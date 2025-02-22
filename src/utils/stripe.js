import { loadStripe } from '@stripe/stripe-js';
import { functions } from '../firebase';
import { httpsCallable } from 'firebase/functions';

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const createPaymentSession = async (projectData) => {
	try {
		const stripe = await stripePromise;

		// Debug log the incoming data
		console.log('Stripe: Received project data:', projectData);

		// More detailed validation
		if (!projectData) {
			throw new Error('No project data provided');
		}

		// Check all required fields with detailed errors
		const requiredFields = {
			projectName: projectData.projectName,
			budget: projectData.budget,
			'contact.email': projectData.contact?.email,
		};

		const missingFields = Object.entries(requiredFields)
			.filter(([_, value]) => !value)
			.map(([field]) => field);

		if (missingFields.length > 0) {
			console.error('Missing required fields:', {
				received: projectData,
				missing: missingFields,
			});
			throw new Error(
				`Missing required fields: ${missingFields.join(', ')}`
			);
		}

		// Convert budget string to number and remove non-numeric characters
		let amount = projectData.budget;
		if (typeof amount === 'string') {
			// Extract first number from string (e.g. "$10k – $50k" -> "10")
			const match = amount.match(/\d+/);
			amount = match ? match[0] : '0';
		}

		// Prepare the data for the Stripe session
		const sessionData = {
			projectName: projectData.projectName,
			amount: parseInt(amount, 10) * 1000, // Convert to cents
			contact: {
				email: projectData.contact.email,
				fullName: projectData.contact.fullName,
				company: projectData.contact.company,
			},
		};

		// Debug log the final data being sent
		console.log('Stripe: Sending session data:', sessionData);

		const createStripeCheckout = httpsCallable(
			functions,
			'createPaymentSession'
		);
		const { data } = await createStripeCheckout(sessionData);

		if (!data?.id) {
			throw new Error('No session ID returned from Stripe');
		}

		return {
			url: data.id,
			id: data.id,
		};
	} catch (error) {
		console.error('Stripe payment session error:', error);
		throw error;
	}
};
