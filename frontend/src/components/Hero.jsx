import { ReactTyped } from 'react-typed'
import Image from '../assets/iPhones.svg'

function Hero() {
	return (
		<div
			className='mx-auto mt-24 flex w-full flex-col justify-center px-4 text-center md:mt-32'
			id='hero'
		>
			<h1 className='mb-4 text-xl font-normal md:mb-0 md:py-6 lg:text-4xl'>
				A Supportive App for Every Mother's Journey
			</h1>
			<p className='pr-3 text-3xl font-bold sm:text-4xl lg:hidden lg:text-6xl'>
				Personalized support
			</p>
			<div className='flex items-center justify-center text-3xl font-bold sm:text-4xl lg:text-6xl'>
				<p className='hidden pr-3 lg:block'>Personalized support for</p>
				<p className='pr-3 lg:hidden'>for</p>
				<div className='whitespace-pre-line'>
					<ReactTyped
						strings={['Pregnancy', 'Postpartum']}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
			</div>
			<p className='mx-auto mt-5 mb-6 text-base text-gray-500 md:mt-10 md:w-[768px] md:text-xl lg:w-[980px]'>
				Maternify provides personalized support, expert health guidance, and
				real-time updates, making maternal care more accessible and empowering
				for every mother.
			</p>

			<img
				src={Image}
				className='mx-auto mt-8 max-w-full rounded-xl md:mt-20'
				alt='iPhones'
			/>
		</div>
	)
}

export default Hero
