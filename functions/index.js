const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const stripe = require('stripe')(functions.config().stripe.secret_key);
const {
	adminNotificationTemplate,
	clientConfirmationTemplate,
} = require('./emailTemplates');

admin.initializeApp();

// Email configuration
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: functions.config().email.user,
		pass: functions.config().email.password,
	},
});

// When a new project request is created
exports.onNewProjectRequest = functions.firestore
	.document('projectRequests/{requestId}')
	.onCreate(async (snap, context) => {
		const projectData = snap.data();
		const requestId = context.params.requestId;

		// Admin notification email
		const adminMailOptions = {
			from: 'Your App <noreply@yourdomain.com>',
			to: 'daniel@lauding.se',
			subject: `New Project Request: ${projectData.projectName}`,
			html: adminNotificationTemplate({ ...projectData, id: requestId }),
		};

		// Client confirmation email
		const clientMailOptions = {
			from: 'Daniel Lauding <daniel@lauding.se>',
			to: projectData.contact.email,
			subject: 'Project Request Received',
			html: clientConfirmationTemplate(projectData),
		};

		try {
			await transporter.sendMail(adminMailOptions);
			await transporter.sendMail(clientMailOptions);
			console.log('Notification emails sent successfully');
		} catch (error) {
			console.error('Error sending notification emails:', error);
		}
	});

// Stripe payment session creation
exports.createPaymentSession = functions.https.onCall(async (data, context) => {
	try {
		// Validate input
		if (!data.projectName) {
			throw new functions.https.HttpsError(
				'invalid-argument',
				'Project name is required'
			);
		}

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: {
							name: data.projectName,
							description: 'Project Development Services',
						},
						unit_amount:
							parseInt(data.amount.replace(/[^0-9]/g, '')) * 100,
					},
					quantity: 1,
				},
			],
			mode: 'payment',
			success_url: `${process.env.REACT_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.REACT_APP_URL}/cancel`,
			customer_email: data.contact.email,
		});

		return { id: session.id };
	} catch (error) {
		console.error('Stripe session creation error:', error);
		throw new functions.https.HttpsError('internal', error.message);
	}
});
