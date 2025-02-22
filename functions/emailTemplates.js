exports.adminNotificationTemplate = (data) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #B2387B; color: white; padding: 20px; border-radius: 4px; }
        .section { margin: 20px 0; }
        .label { font-weight: bold; color: #666; }
        .value { margin: 5px 0 15px; }
        .tag-list { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag { background: #f0f0f0; padding: 4px 8px; border-radius: 4px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Project Request</h2>
          <p>Project Name: ${data.projectName}</p>
          <p>From: ${data.contact.fullName} (${data.contact.email})</p>
        </div>

        <div class="section">
          <div class="label">Project Details</div>
          <p><strong>Description:</strong></p>
          <pre>${data.projectDescription}</pre>
        </div>

        <div class="section">
          <div class="label">Contact Information</div>
          <p><strong>Name:</strong> ${data.contact.fullName}</p>
          <p><strong>Email:</strong> ${data.contact.email}</p>
          <p><strong>Company:</strong> ${data.contact.company || 'N/A'}</p>
        </div>

        <div class="section">
          <div class="label">Project Requirements</div>
          <p><strong>Help Types:</strong> ${data.helpTypes.join(', ')}</p>
          <p><strong>Project Types:</strong> ${data.projectTypes.join(', ')}</p>
          <p><strong>Deliverables:</strong> ${data.deliverables.join(', ')}</p>
        </div>

        <div class="section">
          <div class="label">Budget Information</div>
          <p><strong>Range:</strong> ${data.budget.range}</p>
          ${
	data.budget.description
		? `<p><strong>Description:</strong> ${data.budget.description}</p>`
		: ''
}
          ${
	data.budget.exactAmount
		? `<p><strong>Exact Amount:</strong> ${data.budget.exactAmount}</p>`
		: ''
}
          <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
        </div>

        ${
	data.fileUrls.length > 0
		? `
          <div class="section">
            <div class="label">Attachments (${data.fileUrls.length})</div>
            <ul>
              ${data.fileUrls
		.map(
			(url, index) => `
                <li><a href="${url}">Attachment ${index + 1}</a></li>
              `
		)
		.join('')}
            </ul>
          </div>
        `
		: ''
}

        <div class="footer">
          <a href="https://daniellauding.se/admin/submissions/${
	data.id
}">View in Admin Dashboard</a>
        </div>
      </div>
    </body>
  </html>
`;

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

        <p>Here's a summary of your request:</p>
        <ul>
          <li><strong>Project Type:</strong> ${data.helpTypes.join(', ')}</li>
          <li><strong>Budget Range:</strong> ${data.budget.range}</li>
          <li><strong>Deliverables:</strong> ${data.deliverables.join(
		', '
	)}</li>
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
