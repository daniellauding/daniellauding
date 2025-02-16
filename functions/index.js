const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Configure nodemailer with your email service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().email.user,
        pass: functions.config().email.password
    }
});

exports.onNewProjectRequest = functions.firestore
    .document('projectRequests/{requestId}')
    .onCreate(async (snap, context) => {
        const projectData = snap.data();
        
        // Email template
        const mailOptions = {
            from: 'Your App <your-email@gmail.com>',
            to: 'daniel@lauding.se',
            subject: `New Project Request: ${projectData.projectName}`,
            html: `
                <h2>New Project Request</h2>
                <p><strong>Project Name:</strong> ${projectData.projectName}</p>
                <p><strong>From:</strong> ${projectData.contact.fullName} (${projectData.contact.email})</p>
                <p><strong>Company:</strong> ${projectData.contact.company}</p>
                <p><strong>Budget Range:</strong> ${projectData.budget.range}</p>
                <h3>Project Description:</h3>
                <pre>${projectData.projectDescription}</pre>
                <h3>Help Types:</h3>
                <ul>
                    ${projectData.helpTypes.map(type => `<li>${type}</li>`).join('')}
                </ul>
                <h3>Deliverables:</h3>
                <ul>
                    ${projectData.deliverables.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <p><strong>Files:</strong> ${projectData.fileUrls.length} attachments</p>
                <p>View in admin: https://daniellauding.se/admin/submissions/${snap.id}</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('New project request notification email sent');
            
            // Also send confirmation to the client
            const clientMailOptions = {
                from: 'Daniel Lauding <daniel@lauding.se>',
                to: projectData.contact.email,
                subject: 'Project Request Received',
                html: `
                    <h2>Thank you for your project request</h2>
                    <p>Hi ${projectData.contact.fullName},</p>
                    <p>I've received your project request for "${projectData.projectName}" and will review it shortly.</p>
                    <p>I'll get back to you within 1-2 business days with more information.</p>
                    <p>Best regards,<br>Daniel Lauding</p>
                `
            };
            
            await transporter.sendMail(clientMailOptions);
            console.log('Client confirmation email sent');
            
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }); 