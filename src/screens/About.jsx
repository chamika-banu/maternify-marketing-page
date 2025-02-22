import MemberCard from '../components/MemberCard'
import user from '../assets/members/user.jpeg'
import chamika from '../assets/members/chamika.jpg'
import hansaja from '../assets/members/hansaja.png'
import gevin from '../assets/members/gevin.jpg'

function About() {
	const members = [
		['Karunya Jeyabalan', 'https://www.linkedin.com/in/johndoe', user],
		['Lehara Chamee', 'https://www.linkedin.com/in/janedoe', user],
		['Gevin Sankalya', 'https://www.linkedin.com/in/gevin-nanayakkara/', gevin],
		['Ruchini Thathsarani', 'https://www.linkedin.com/in/bobdoe', user],
		['Dulneth Hansaja', 'https://www.linkedin.com/in/bobdoe', hansaja],
		['Chamika Banu', 'https://www.linkedin.com/in/bobdoe', chamika],
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
