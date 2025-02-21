import axios from 'axios'
import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { toast } from 'react-hot-toast'

function FeedbackForm() {
	const [data, setData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = async (event) => {
		event.preventDefault()
		setIsSubmitting(true)
		const { name, email, message } = data

		try {			
			const response = await axios.post('http://localhost:8000/feedback', {
				name,
				email,
				message,
			})

			// Reset the form after successful submission
			setData({ name: '', email: '', message: '' })
			toast.success('Message sent successfully')
		} catch (error) {						
			if (error.response && error.response.data) {
				toast.error(error.response.data)
			} else {
				toast.error('Server encountered an issue!')
			}
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
