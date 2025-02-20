import { loadStripe } from '@stripe/stripe-js';
import { functions } from '../firebase';
import { httpsCallable } from 'firebase/functions';

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const createPaymentSession = async (projectData) => {
	try {
		const stripe = await stripePromise;

		// Call Firebase function
		const createStripeCheckout = httpsCallable(
			functions,
			'createPaymentSession'
		);

		// Convert budget string to number
		const amount = projectData.budget.replace(/[^0-9]/g, '');

		const { data } = await createStripeCheckout({
			projectName: projectData.projectName,
			amount: amount,
			contact: {
				email: projectData.contact.email,
			},
		});

		if (!data.id) {
			throw new Error('No session ID returned');
		}

		// Redirect to Stripe Checkout
		const result = await stripe.redirectToCheckout({
			sessionId: data.id,
		});

		if (result.error) {
			throw new Error(result.error.message);
		}
	} catch (error) {
		console.error('Payment error:', error);
		throw error;
	}
};
