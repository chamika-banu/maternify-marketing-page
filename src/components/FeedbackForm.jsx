import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

function FeedbackForm() {
	const [data, setData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const isValidEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return re.test(email)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsSubmitting(true)

		const { name, email, message } = data

		if (!name.trim() || !email.trim() || !message.trim()) {
			toast.error('All fields are required')
			setIsSubmitting(false)
			return
		}

		if (!isValidEmail(email)) {
			toast.error('Invalid email address')
			setIsSubmitting(false)
		}

		// EmailJS credentials
		const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
		const TEMPLATE_ID_COMPANY = import.meta.env.VITE_TEMPLATE_ID_COMPANY
		const TEMPLATE_ID_USER = import.meta.env.VITE_TEMPLATE_ID_USER
		const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY


		// Email data
		const companyEmailData = { name, email, message }
		const userEmailData = {
			name,
			message,
			send_to: email,
		}

		try {
			// Send email to the company (admin)
			await emailjs.send(SERVICE_ID, TEMPLATE_ID_COMPANY, companyEmailData, PUBLIC_KEY)
			console.log('Admin email sent')

			// Send acknowledgment email to the user
			await emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, userEmailData, PUBLIC_KEY)
			console.log('User email sent')

			// Reset form after success
			setData({ name: '', email: '', message: '' })
			toast.success('Message sent successfully')
		} catch (error) {
			console.error('Error sending email:', error)
			toast.error('Failed to send email')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<form
			className='flex flex-col md:px-24 lg:px-0'
			onSubmit={handleSubmit}
			autoComplete='on'
		>
			<input
				className='mb-4 w-full rounded-md p-3 text-black ring-1 shadow-md ring-gray-400 transition-all duration-200 outline-none focus:ring-[1.5px] focus:ring-black'
				type='text'
				name='name'
				value={data.name}
				placeholder='Your Name'
				onChange={(event) => setData({ ...data, name: event.target.value })}
				autoComplete='name'
				required
			/>
			<input
				className='mb-4 w-full rounded-md p-3 text-black ring-1 shadow-md ring-gray-400 transition-all duration-200 outline-none focus:ring-[1.5px] focus:ring-black'
				type='text'
				name='email'
				value={data.email}
				placeholder='Your Email'
				onChange={(event) => setData({ ...data, email: event.target.value })}
				autoComplete='email'
				required
			/>

			<textarea
				className='mb-4 h-32 w-full resize-none overflow-y-auto rounded-md p-3 ring-1 shadow-md ring-gray-400 transition-all duration-200 outline-none focus:ring-[1.5px] focus:ring-black'
				name='message'
				value={data.message}
				placeholder='Your Message'
				onChange={(event) => setData({ ...data, message: event.target.value })}
				autoComplete='message'
				required
			/>

			<button
				type='submit'
				className='is flex w-full cursor-pointer items-center justify-center rounded-md bg-black py-3 font-medium text-white transition-all duration-200 hover:scale-95'
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<LoaderCircle className='animate-spin' />
				) : (
					'Send Message'
				)}
			</button>
		</form>
	)
}

export default FeedbackForm
