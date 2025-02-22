const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const stripe = require('stripe')(functions.config().stripe.secret_key);

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

		// Admin notification email
		const adminMailOptions = {
			from: 'Your App <noreply@yourdomain.com>',
			to: 'daniel@lauding.se',
			subject: `New Project Request: ${projectData.projectName}`,
			html: `
                <h2>New Project Request</h2>
                <p><strong>Project Name:</strong> ${projectData.projectName}</p>
                <p><strong>From:</strong> ${projectData.fullName} (${
				projectData.email
			})</p>
                <p><strong>Company:</strong> ${
					projectData.companyName || 'N/A'
				}</p>
                <p><strong>Budget Range:</strong> ${
					projectData.budget.range || projectData.budget
				}</p>
                ${
					projectData.budget.description
						? `<p><strong>Budget Description:</strong> ${projectData.budget.description}</p>`
						: ''
				}
                ${
					projectData.budget.exactAmount
						? `<p><strong>Exact Amount:</strong> ${projectData.budget.exactAmount}</p>`
						: ''
				}
                <p><strong>Payment Method:</strong> ${
					projectData.paymentMethod
				}</p>
                <h3>Project Description:</h3>
                <pre>${projectData.projectDescription}</pre>
                <p><strong>Help Types:</strong> ${
					projectData.helpTypes
						? projectData.helpTypes.join(', ')
						: 'N/A'
				}</p>
                <p><strong>Project Type:</strong> ${
					projectData.projectTypes
						? projectData.projectTypes.join(', ')
						: 'N/A'
				}</p>
                <p><strong>Deliverables:</strong> ${
					projectData.deliverables
						? projectData.deliverables.join(', ')
						: 'N/A'
				}</p>
                <p><strong>Files:</strong> ${
					projectData.fileUrls ? projectData.fileUrls.length : 0
				} attachments</p>
                ${
					projectData.fileUrls && projectData.fileUrls.length > 0
		`<ul>${projectData.fileUrls.map(url => `<li><a href="${url}">View File</a></li>`).join('')}</ul>` 
						: ''
				}
                ${
					projectData.paymentMethod === 'stripe' && !projectData.paid
						? `<p><strong>Payment Status:</strong> Pending - <a href="${projectData.stripePaymentLink}">View Payment Link</a></p>`
						: ''
				}
                <p>View in admin: https://daniellauding.se/admin/submissions/${
					snap.id
				}</p>
            `,
		};

		// Client confirmation email
		const clientMailOptions = {
			from: 'Daniel Lauding <daniel@lauding.se>',
			to: projectData.email,
			subject: 'Project Request Received',
			html: `
                <h2>Thank you for your project request</h2>
                <p>Hi ${projectData.fullName},</p>
                <p>I've received your project request for "${
					projectData.projectName
				}" and will review it shortly.</p>
                <p>Project Details:</p>
                <ul>
                    <li><strong>Project Description:</strong> ${
						projectData.projectDescription
					}</li>
                    <li><strong>Help Types:</strong> ${
						projectData.helpTypes
							? projectData.helpTypes.join(', ')
							: 'N/A'
					}</li>
                    <li><strong>Project Type:</strong> ${
						projectData.projectTypes
							? projectData.projectTypes.join(', ')
							: 'N/A'
					}</li>
                    <li><strong>Deliverables:</strong> ${
						projectData.deliverables
							? projectData.deliverables.join(', ')
							: 'N/A'
					}</li>
                    <li><strong>Budget Range:</strong> ${
						projectData.budget.range || projectData.budget
					}</li>
                    <li><strong>Payment Method:</strong> ${
						projectData.paymentMethod
					}</li>
                </ul>
                ${
					projectData.paymentMethod === 'stripe' && !projectData.paid
						? `<p><strong>Complete Your Payment:</strong> <a href="${projectData.stripePaymentLink}">Click here to pay</a></p>`
						: ''
				}
                <p>I'll get back to you within 1-2 business days with more information.</p>
                <p>Best regards,<br>Daniel Lauding</p>
            `,
		};

		try {
			// Send emails using nodemailer
			await transporter.sendMail(adminMailOptions);
			await transporter.sendMail(clientMailOptions);
			console.log('Notification emails sent');
		} catch (error) {
			console.error('Error sending emails:', error);
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
