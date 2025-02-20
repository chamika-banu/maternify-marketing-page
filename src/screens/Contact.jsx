import { FaLinkedin, FaInstagram, FaAt } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'

function Contact() {	
	return (
		<div className='mx-auto mt-24 max-w-[1080px] md:mt-32'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='font-semibold text-[#38bdf8]'>GET IN TOUCH</h1>
				<h1 className='my-6 px-4 text-center text-3xl font-semibold md:px-0'>
					We're Here to Support You
				</h1>

				<p className='w-full px-4 text-center text-gray-500 md:w-2xl'>
					We welcome your feedback and questions about our maternal health
					support services!
				</p>
				<div className='mt-16 grid w-full grid-cols-1 gap-12 px-8 lg:grid-cols-2'>
					<div className='my-auto'>
						<ContactForm />
					</div>
					<div className='flex flex-col gap-4 md:px-24 lg:px-0'>
						<p className='text-xl'>Stay Connected</p>

						<a
							href='https://www.linkedin.com/company/maternify'
							target='_blank'
							className='flex cursor-pointer items-center gap-4 rounded-md border border-gray-200 p-4 transition-shadow duration-300 hover:shadow-lg'
						>
							<FaLinkedin size={40} />
							<div>
								<p className='font-semibold'>LinkedIn</p>
								<p className='font-light text-gray-500'>
									Connect with us on LinkedIn
								</p>
							</div>
						</a>

						<a
							href='https://www.instagram.com/maternify'
							target='_blank'
							className='flex cursor-pointer items-center gap-4 rounded-md border border-gray-200 p-4 transition-shadow duration-300 hover:shadow-lg'
						>
							<FaInstagram size={40} />
							<div>
								<p className='font-semibold'>Instagram</p>
								<p className='font-light text-gray-500'>
									Follow us on Instagram
								</p>
							</div>
						</a>

						<a
							href='mailto:Maternify@gmail.com'
							className='flex cursor-pointer items-center gap-4 rounded-md border border-gray-200 p-4 transition-shadow duration-300 hover:shadow-lg'
						>
							<Mail size={40} />
							<div>
								<p className='font-semibold'>Email</p>
								<p className='font-light text-gray-500'>
									Mail us at Maternify@gmail.com
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
