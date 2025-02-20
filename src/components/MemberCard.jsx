import { FaLinkedin } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt'
import { Tooltip } from 'antd'

function MemberCard({ name, linkedin, image }) {
	return (
		<Tilt
			tiltReverse='true'
			transitionSpeed={10000}
		>
			<div className='flex items-center gap-8 rounded-lg border border-gray-200 bg-[#F9FAFB] px-8 py-12 transition-all duration-200 hover:shadow-md'>
				<div className='h-20 w-20 overflow-hidden rounded-full'>
					<img
						src={image}
						className=''
					/>
				</div>
				<div className='flex flex-col gap-4 text-left'>
					<p>{name}</p>
					<Tooltip title={`Visit ${name.split(' ')[0]}'s Linkedln`} placement='bottom' arrow={false}>
						<a
							className='w-fit transition-transform duration-300 hover:scale-110'
							href={linkedin}
							target='_blank'
						>
							<FaLinkedin size={24} />
						</a>
					</Tooltip>
				</div>
			</div>
		</Tilt>
	)
}

export default MemberCard
