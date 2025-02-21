import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
dotenv.config()

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	}),
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER, // Your Gmail address
		pass: process.env.EMAIL_PASS, // Your Gmail app password
	},
})

function isValidEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return re.test(email)
}

app.post('/feedback', (req, res) => {
	const { name, email, message } = req.body

	if (!name.trim() || !email || !message.trim()) {
		return res.status(400).send('All fields are required')
	}

	if (!isValidEmail(email)) {
		return res.status(400).send('Invalid email address')
	}

	// Email sent to the company
	const companyMailOptions = {
		from: email, // The email address from which the form is being submitted
		to: 'chamika.20230842@iit.ac.lk', // The company's email address
		subject: 'New Form Submission from Maternify',
		html: `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>New Form Submission</title>
					<style>
						body {
							font-family: Arial, sans-serif;
							background-color: #f4f4f9;
							color: #333;
							line-height: 1.6;
						}
						.container {
							width: 100%;
							max-width: 600px;
							margin: 0 auto;
							padding: 20px;
							background-color: #fff;
							border-radius: 8px;
							box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
						}
						.header {
							text-align: center;
							border-bottom: 2px solid #f4f4f9;
							margin-bottom: 20px;
						}
						.header h2 {
							color: #5cb85c;
						}
						.content {
							margin-bottom: 20px;
						}
						.content p {
							font-size: 16px;
						}
						.footer {
							text-align: center;
							font-size: 14px;
							color: #777;
						}
						.footer p {
							margin-top: 20px;
						}
					</style>
				</head>
				<body>
					<div class="container">
						<div class="header">
							<h2>Maternify - New Form Submission</h2>
						</div>
						<div class="content">
							<p><strong>Name:</strong> ${name}</p>
							<p><strong>Email:</strong> ${email}</p>
							<p><strong>Message:</strong><br/>${message}</p>
						</div>
						<div class="footer">
							<p>The Maternify Team</p>
						</div>
					</div>
				</body>
			</html>
		`,
	}

	// Email sent to the sender (user)
	const senderMailOptions = {
		from: 'chamika.20230842@iit.ac.lk', // The company's email address (it will appear as the sender)
		to: email, // The sender's email address (the user who submitted the form)
		subject: 'Thank You for Your Submission to Maternify',
		html: `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Thank You for Your Submission</title>
					<style>
						body {
							font-family: Arial, sans-serif;
							background-color: #f4f4f9;
							color: #333;
							line-height: 1.6;
						}
						.container {
							width: 100%;
							max-width: 600px;
							margin: 0 auto;
							padding: 20px;
							background-color: #fff;
							border-radius: 8px;
							box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
						}
						.header {
							text-align: center;
							border-bottom: 2px solid #f4f4f9;
							margin-bottom: 20px;
						}
						.header h2 {
							color: #5cb85c;
						}
						.content {
							margin-bottom: 20px;
						}
						.content p {
							font-size: 16px;
						}
						.footer {
							text-align: center;
							font-size: 14px;
							color: #777;
						}
						.footer p {
							margin-top: 20px;
						}
					</style>
				</head>
				<body>
					<div class="container">
						<div class="header">
							<h2>Thank You for Contacting Maternify</h2>
						</div>
						<div class="content">
							<p>Dear ${name},</p>
							<p>Thank you for reaching out to us. We have received your message.</p>
							<p><strong>Message:</strong><br/>${message}</p>
							<p>Our team will review your message and get back to you shortly.</p>
						</div>
						<div class="footer">
							<p>Best regards,<br />The Maternify Team</p>
						</div>
					</div>
				</body>
			</html>
		`,
	}

	// Send the email to the company
	transporter.sendMail(companyMailOptions, (error, info) => {
		if (error) {
			console.log('Error sending email to company', error)
			return res.status(500).send('Server encountered an issue!')
		}

		// Send the email to the sender
		transporter.sendMail(senderMailOptions, (error, info) => {
			if (error) {
				console.log('Error sending email to company', error)
				return res.status(500).send('Server encountered an issue!')
			}

			// If both emails are sent successfully
			res.status(200).send('Emails sent successfully')
		})
	})
})

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is running on port: ${process.env.PORT}`)
})
