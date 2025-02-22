import { loadStripe } from '@stripe/stripe-js';
import { functions } from '../firebase';
import { httpsCallable } from 'firebase/functions';

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const createPaymentSession = async (projectData) => {
	try {
		const stripe = await stripePromise;

		if (!projectData.projectName || !projectData.budget) {
			throw new Error('Missing required payment information');
		}

		const createStripeCheckout = httpsCallable(
			functions,
			'createPaymentSession'
		);

		// Ensure amount is properly formatted
		const amount =
			typeof projectData.budget === 'string'
				? projectData.budget.replace(/[^0-9]/g, '')
				: projectData.budget;

		const { data } = await createStripeCheckout({
			projectName: projectData.projectName,
			amount: amount,
			contact: {
				email: projectData.contact.email,
				fullName: projectData.contact.fullName,
			},
		});

		if (!data.id) {
			throw new Error('Failed to create payment session');
		}

		// Redirect to Stripe Checkout
		const result = await stripe.redirectToCheckout({
			sessionId: data.id,
		});

		if (result.error) {
			throw new Error(result.error.message);
		}
	} catch (error) {
		console.error('Payment session creation error:', error);
		throw error;
	}
};
