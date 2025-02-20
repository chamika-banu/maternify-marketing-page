function ContactForm() {
  return (		
			<form className='flex flex-col md:px-24 lg:px-0'>
				<input
					className='mb-4 w-full rounded-md p-3 text-black ring-1 shadow-md ring-gray-400 transition-all duration-200 outline-none focus:ring-[1.5px] focus:ring-black'
					type='text'
					placeholder='Your Name'
					required
				/>
				<input
					className='mb-4 w-full rounded-md p-3 text-black ring-1 shadow-md ring-gray-400 transition-all duration-200 outline-none focus:ring-[1.5px] focus:ring-black'
					type='text'
					placeholder='Your Email'
					required
				/>

				<textarea
					className='mb-4 h-32 w-full resize-none overflow-y-auto rounded-md p-3 ring-1 shadow-md ring-gray-400 transition-all duration-200 outline-none focus:ring-[1.5px] focus:ring-black'
					placeholder='Your Message'
					required
				/>

				<button className='w-full cursor-pointer rounded-md bg-black py-3 font-medium text-white transition-all duration-200 hover:scale-95'>
					Send Message
				</button>
			</form>		
	)
}

export default ContactForm;