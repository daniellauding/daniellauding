exports.adminNotificationTemplate = (data) => `
    <h2>New Project Request</h2>
    <p><strong>Project Name:</strong> ${data.projectName}</p>
    <p><strong>From:</strong> ${data.contact?.fullName} (${
	data.contact?.email
})</p>
    <p><strong>Company:</strong> ${data.contact?.company || 'Not specified'}</p>
    
    <h3>Project Details</h3>
    <p><strong>Budget:</strong> ${data.budget?.range || 'Not specified'}
    ${
	data.budget?.description
		? `<br>Description: ${data.budget.description}`
		: ''
}
    ${
	data.budget?.exactAmount
		? `<br>Exact Amount: ${data.budget.exactAmount}`
		: ''
}</p>
    <p><strong>Payment Method:</strong> ${
	data.paymentMethod || 'Not specified'
}</p>
    
    <h3>Project Description:</h3>
    <pre>${data.projectDescription || 'Not provided'}</pre>
    
    <h3>Requirements:</h3>
    <p><strong>Help Types:</strong> ${
	data.helpTypes?.join(', ') || 'Not specified'
}</p>
    <p><strong>Project Types:</strong> ${
	data.projectTypes?.join(', ') || 'Not specified'
}</p>
    <p><strong>Deliverables:</strong> ${
	data.deliverables?.join(', ') || 'Not specified'
}</p>
    
    <h3>Attachments:</h3>
    <p>${data.fileUrls?.length || 0} files attached</p>
    ${
	data.fileUrls?.length
		? data.fileUrls
			.map((url) => `<p><a href="${url}">View File</a></p>`)
			.join('')
		: ''
}
    
    <p><a href="https://daniellauding.se/admin/submissions/${
	data.id
}">View in admin dashboard</a></p>
`;

exports.clientConfirmationTemplate = (data) => `
    <h2>Thank you for your project request</h2>
    <p>Hi ${data.contact?.fullName},</p>
    <p>I've received your project request for "${
	data.projectName
}" and will review it shortly.</p>
    
    <h3>Project Details:</h3>
    <ul>
        <li>Help Types: ${data.helpTypes?.join(', ') || 'Not specified'}</li>
        <li>Budget: ${data.budget?.range || 'Not specified'}</li>
        <li>Payment Method: ${data.paymentMethod || 'Not specified'}</li>
    </ul>
    
    <p>I'll get back to you within 1-2 business days with more information.</p>
    <p>Best regards,<br>Daniel Lauding</p>
`;
