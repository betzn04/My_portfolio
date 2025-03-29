const nodemailer = require('nodemailer');
const cors = require('cors');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const handler = async (req, res) => {
    await cors()(req, res);

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const mailOptions = {
            from: `"${name}" <${email}>`,
            replyTo: email,
            to: process.env.EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><small>This email was sent through your portfolio contact form.</small></p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'Failed to send email',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

module.exports = handler;