import { motion } from 'framer-motion'
import mailbox from '../assets/mailbox.svg'
import ContactForm from './ContactForm'

const Contact = () => {
	return (
		<motion.div initial={{ opacity: 0, y: 100 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { duration: 1, ease: 'easeInOut' },
			}}
			viewport={{ threshold: 0.8, once: true }} className='w-full px-4 md:py-8' id='contact'>
			<div className='mx-auto grid max-w-[1240px] lg:grid-cols-3'>
				<div className='contact-section my-4 text-center lg:col-span-2 lg:text-left'>
					<h1 className='py-2 text-2xl font-bold sm:text-3xl md:text-4xl'>
						Have Questions or Need Support?
					</h1>
					<p>
						We're here to help! Contact us for assistance, feedback, or
						inquiries.
					</p>
					<div className='hidden w-full lg:block'>
						<img
							src={mailbox}
							className='mt-12 ml-24 w-48'
						/>
					</div>
				</div>
				<div className='my-4 grid '>
					<ContactForm />
					<div></div>
				</div>
			</div>
		</motion.div>
	)
}

export default Contact
