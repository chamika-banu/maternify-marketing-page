import MemberCard from '../components/MemberCard'
import karunya from '../assets/members/karunya.jpg'
import lehara from '../assets/members/lehara.jpeg'
import gevin from '../assets/members/gevin.jpg'
import ruchini from '../assets/members/ruchini.jpeg'
import chamika from '../assets/members/chamika.jpeg'
import hansaja from '../assets/members/hansaja.jpeg'

function About() {
	const members = [
		[
			'Karunya Jeyabalan',
			'https://www.linkedin.com/in/karunya-jeyabalan-6425bb270',
			karunya,
		],
		[
			'Lehara Chamee',
			'https://www.linkedin.com/in/lehara-jayasena-736204279',
			lehara,
		],
		['Gevin Sankalya', 'https://www.linkedin.com/in/gevin-nanayakkara', gevin],
		['Ruchini Thathsarani', 'https://www.linkedin.com/in/ruchinit', ruchini],
		[
			'Dulneth Hansaja',
			'https://www.linkedin.com/in/hansaja-wickrama-670159293',
			hansaja,
		],
		['Chamika Banu', 'https://www.linkedin.com/in/chamika-banu', chamika],
	]
	return (
		<div className='mx-auto mt-24 max-w-[1080px] md:mt-32'>
			<div className='flex flex-col items-center justify-center'>
				<h1 className='font-semibold text-[#38bdf8]'>OUR MISSION</h1>
				<h1 className='my-6 px-4 text-center text-3xl font-semibold md:px-0'>
					Empowering Maternal Health
				</h1>

				<p className='w-full px-4 text-center text-gray-500 md:w-2xl'>
					We're dedicated to transforming maternal healthcare through
					technology, making support and resources accessible to every mother.
				</p>
			</div>
			<div className='mt-16 flex flex-col items-center justify-center'>
				<h1 className='font-semibold text-[#38bdf8]'>OUR TEAM</h1>
				<h1 className='my-6 px-4 text-center text-3xl font-semibold md:px-0'>
					Meet the brains behind Maternify
				</h1>

				<p className='text-center text-gray-500 md:w-2xl'>
					We are a team of students from IIT, affiliated with the University of
					Westminster.
				</p>
				<div className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 gap-8 '>
					{members.map(([name, linkedin, image], index) => (
						<MemberCard
							key={index}
							name={name}
							linkedin={linkedin}
							image={image}
						/>
					))}
				</div>
			</div>		
		</div>
	)
}

export default About
