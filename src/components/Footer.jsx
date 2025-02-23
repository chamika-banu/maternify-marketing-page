import { Tooltip } from 'antd'
import { FaLinkedin, FaInstagram, FaAt } from 'react-icons/fa'
import { CircleChevronUp } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	const pages = [
		['Home', '/'],
		['About', '/About'],
		['Contact', '/Contact'],
	]

	return (
		<div className='mt-16 bg-[#000300] px-4 py-16 text-gray-300 md:mt-24'>
			<div className='mx-auto flex max-w-[1240px] items-start justify-between'>
				<div className=''>
					<h1 className='w-full text-3xl font-bold text-white'>Maternify</h1>
					<p className='py-4 md:w-96'>
						Supporting mothers with AI-powered maternal health guidance,
						community support, and expert care. Your journey, our priority.
					</p>
					<div className='my-6 flex gap-4 md:w-[75%]'>
						<Tooltip title='Follow us on Instagram'>
							<a
								href='https://www.instagram.com/maternify.team'
								target='_blank'
							>
								<FaInstagram
									size={30}
									className='cursor-pointer transition-colors duration-200 hover:text-[#38bdf8]'
								/>
							</a>
						</Tooltip>
						<Tooltip title='Visit our LinkedIn'>
							<a
								href='https://www.linkedin.com/company/maternify-info'
								target='_blank'
							>
								<FaLinkedin
									size={30}
									className='cursor-pointer transition-colors duration-200 hover:text-[#38bdf8]'
								/>
							</a>
						</Tooltip>
						<Tooltip title='Send us an email'>
							<a href='mailto:maternify.contact@gmail.com'>
								<FaAt
									size={30}
									className='cursor-pointer transition-colors duration-200 hover:text-[#38bdf8]'
								/>
							</a>
						</Tooltip>
					</div>
				</div>

				<div className='hidden md:block'>
					<h6 className='mb-2 font-medium text-gray-400'>Maternify</h6>
					<ul>
						{pages.map(([page, path], index) => (
							<li
								className='py-2 text-sm'
								key={index}
							>
								<NavLink
									to={path}
									className='cursor-pointer transition-colors duration-200 hover:text-[#38bdf8]'
								>
									{page}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='mx-auto mt-4 max-w-[1240px]'>
				<hr></hr>
				<div className='mt-4 flex items-center justify-between'>
					<p>Copyright © 2024 Maternify</p>
					<Tooltip title='Scroll to top'>
						<div
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							className='cursor-pointer'
						>
							<CircleChevronUp />
						</div>
					</Tooltip>
				</div>
			</div>
		</div>
	)
}

export default Footer
