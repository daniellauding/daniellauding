const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.notifyNewProject = functions.https.onRequest(async (req, res) => {
    // Configure email transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: functions.config().email.user,
            pass: functions.config().email.pass
        }
    });

    const { projectId, projectName, clientName, clientEmail } = req.body;

    const mailOptions = {
        from: functions.config().email.user,
        to: 'your-email@example.com', // Replace with your email
        subject: `New Project Request: ${projectName}`,
        html: `
            <h2>New Project Request</h2>
            <p><strong>Project:</strong> ${projectName}</p>
            <p><strong>Client:</strong> ${clientName}</p>
            <p><strong>Email:</strong> ${clientEmail}</p>
            <p><strong>Project ID:</strong> ${projectId}</p>
            <p>Check your Firebase console for full details.</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Notification sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending notification');
    }
}); 