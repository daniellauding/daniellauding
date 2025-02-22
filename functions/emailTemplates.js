exports.adminNotificationTemplate = (data) => {
	// Log the data we receive
	console.log('Email template received data:', JSON.stringify(data, null, 2));

	return `
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #B2387B; color: white; padding: 20px; border-radius: 4px; }
                .section { margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Project Request</h2>
                    <p><strong>Project Name:</strong> ${data.projectName}</p>
                    
                    <p><strong>From:</strong> ${data.contact.fullName} (${
	data.contact.email
})</p>
                    
                    <p><strong>Company:</strong> ${data.contact.company}</p>
                    
                    <p><strong>Budget Range:</strong> ${data.budget.range}</p>
                    
                    <p><strong>Payment Method:</strong> ${
	data.paymentMethod ||
						data['payment-method'] ||
						'Invoice'
}</p>
                    
                    <h3>Project Description:</h3>
                    <pre>${data.projectDescription}</pre>
                    
                    <p><strong>Help Types:</strong> ${data.helpTypes.join(
		', '
	)}</p>
                    
                    <p><strong>Project Type:</strong> ${data.projectTypes.join(
		', '
	)}</p>
                    
                    <p><strong>Deliverables:</strong> ${data.deliverables.join(
		', '
	)}</p>
                    
                    <p><strong>Files:</strong> ${
	data.fileUrls.length
} attachments</p>
                    ${
	data.fileUrls.length > 0
							? `<ul>${data.fileUrls
									.map(
										(url) =>
											`<li><a href="${url}">View File</a></li>`
									)
									.join('')}</ul>`
		: ''
}
                    ${
	data.paymentMethod === 'stripe'
							? `<p><strong>Payment Status:</strong> ${
									data.paid ? 'Paid' : 'Pending'
							  }</p>
                           ${
	!data.paid && data.stripePaymentLink
									? `<p><a href="${data.stripePaymentLink}">Complete Payment</a></p>`
		: ''
							}`
		: ''
}
                </div>

                <div class="footer">
                    <p><a href="https://daniellauding.se/admin/submissions/${
	data.id
}">View in Admin Dashboard</a></p>
                </div>
            </div>
        </body>
    </html>
    `;
};

exports.clientConfirmationTemplate = (data) => `
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { margin-bottom: 30px; }
                .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Thank you for your project request</h2>
                </div>

                <p>Hi ${data.contact.fullName},</p>

                <p>I've received your project request for "${
	data.projectName
}" and will review it shortly.</p>

                <p>Project Details:</p>
                <ul>
                    <li><strong>Project Description:</strong> ${
	data.projectDescription
}</li>
                    <li><strong>Help Types:</strong> ${data.helpTypes.join(
		', '
	)}</li>
                    <li><strong>Project Type:</strong> ${data.projectTypes.join(
		', '
	)}</li>
                    <li><strong>Deliverables:</strong> ${data.deliverables.join(
		', '
	)}</li>
                    <li><strong>Budget Range:</strong> ${data.budget.range}</li>
                    <li><strong>Payment Method:</strong> ${
	data.paymentMethod ||
						data['payment-method'] ||
						'Invoice'
}</li>
                </ul>

                <p>I'll get back to you within 1-2 business days with more information.</p>

                <div class="footer">
                    <p>Best regards,<br>Daniel Lauding</p>
                    <p style="color: #666; font-size: 14px;">
                        <a href="https://daniellauding.se">daniellauding.se</a>
                    </p>
                </div>
            </div>
        </body>
    </html>
`;
