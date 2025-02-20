import { motion } from 'framer-motion'
import {
	Calendar,
	Users,
	Bot,
	Clipboard,
	BookOpen,
	CircleUser,
	MapPin,
} from 'lucide-react'

import BentoBox from './BentoBox'

function Features() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { duration: 1, ease: 'easeInOut' },
			}}
			viewport={{ threshold: 0.8, once: true }}
			id='features'
		>
			<div className='mx-auto mt-16 flex w-full max-w-[1080px] flex-col items-center md:mt-28'>
				<h1 className='font-semibold text-[#38bdf8]'>FEATURES</h1>
				<h1 className='my-6 px-4 text-center text-3xl font-semibold md:px-0'>
					Discover Powerful Features
				</h1>

				<p className='w-full px-4 text-center text-gray-500 md:w-2xl'>
					Maternify empowers mothers with innovative tools that support, guide,
					and make maternal care more accessible and enjoyable.
				</p>
				<div className='my-4 flex flex-col gap-4 overflow-clip px-8 py-8 md:my-8 md:grid md:grid-cols-3 md:gap-8'>
					<BentoBox
						className={'md:row-span-2'}
						icon={<Bot />}
						title={'AI Health Assistance'}
						description={
							'Get instant answers to your pregnancy and health questions.'
						}
					/>
					<BentoBox
						className={'md:col-span-2'}
						icon={<BookOpen />}
						title={'Healthcare Resources'}
						description={
							'Access comprehensive guides on pregnancy, newborn care and postnatal recovery.'
						}
					/>
					<BentoBox
						className={''}
						icon={<Users />}
						title={'Community Support'}
						description={
							'Connect with other expectant mothers and share experiences.'
						}
					/>
					<BentoBox
						className={'md:row-span-2'}
						icon={<Calendar />}
						title={'Doctor Appointments'}
						description={
							'Connect with nearby doctors and schedule check-ups effortlessly.'
						}
					>
						<div className='flex items-center justify-center'>
							<div className='mt-5 flex w-fit rotate-x-40 rotate-z-35 flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 px-4 py-6 text-center text-sm text-gray-600 shadow-md transition-transform duration-500 hover:rotate-z-20'>
								<CircleUser size={30} />
								<p>Dr. Bhagya</p>
								<button className='flex items-center justify-center gap-2 rounded-3xl border border-[#2089a6] bg-[#64dafc]/20 px-2 py-1 text-sm text-[#2089a6]'>
									<MapPin size={16} />
									Colombo
								</button>
							</div>
							<div className='z-35 -ml-4 flex w-fit -rotate-x-40 -rotate-z-25 flex-col items-center justify-center gap-4 rounded-xl border border-gray-300 bg-white px-4 py-8 text-center text-sm text-gray-600 shadow-md transition-transform duration-500 hover:-rotate-z-10'>
								<CircleUser size={30} />
								<p>Dr. Shawn</p>
								<button className='flex items-center justify-center gap-2 rounded-3xl border border-[#30a189] bg-[#52f6d3]/20 px-2 py-1 text-sm text-[#30a189]'>
									{/* <button className='py-1 px-2 flex gap-2 text-sm justify-center items-center bg-[#52f6d3]/20 border border-[#52f6d3] rounded-3xl'></button> */}
									<MapPin size={16} />
									Colombo
								</button>
							</div>
						</div>
					</BentoBox>
					<BentoBox
						className={'col-span-2'}
						icon={<Clipboard />}
						title={'Personalized Health Plan'}
						description={'Tailored health guidance for your pregnancy stage.'}
					/>
				</div>
			</div>
		</motion.div>
	)
}

export default Features
