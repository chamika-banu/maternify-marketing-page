import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
	const [nav, setNav] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const lastScrollY = useRef(0)
	const pages = [
		['Home', '/'],
		['About', '/About'],
		['Contact', '/Contact'],
	]

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			// Add shadow when scrolled
			setScrolled(currentScrollY > 10)

			// Hide navbar on scroll down, show on scroll up
			if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}

			lastScrollY.current = currentScrollY
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [isVisible])

	return (
		<nav
			className={`fixed top-0 left-0 z-100 w-full bg-white px-3 transition-all duration-300 lg:px-0 ${scrolled ? 'shadow-lg shadow-gray-100/80' : ''} ${isVisible ? 'md:translate-y-0' : 'md:-translate-y-full'}`}
		>
			<div className='mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between font-bold md:h-24'>
				<h1 className='cursor-pointer text-3xl'>
					<NavLink to='/'>Maternify</NavLink>					
				</h1>
				<ul className='hidden font-medium md:flex'>
					{pages.map(([page, path], index) => (
						<li
							className='p-4'
							key={index}
						>
							<NavLink
								to={path}
								className={({ isActive }) =>
									`cursor-pointer transition-colors duration-200 hover:text-[#38bdf8] ${isActive ? 'text-[#38bdf8]' : ''}`
								}
							>
								{page}
							</NavLink>
						</li>
					))}
				</ul>
				<div
					onClick={handleNav}
					className='block md:hidden'
				>
					{nav ? (
						<X
							size={28}
							strokeWidth={3}
							className='cursor-pointer'
						/>
					) : (
						<Menu
							size={28}
							strokeWidth={3}
							className='cursor-pointer'
						/>
					)}
				</div>

				{/* Mobile Menu */}
				<div
					className={
						nav
							? 'bg-white-100/30 fixed top-0 left-0 flex h-full w-[60%] flex-col px-4 backdrop-blur-md duration-500 ease-in-out'
							: 'fixed top-0 left-[-100%] duration-500 ease-in-out'
					}
				>
					<h1 className='mt-8 ml-4 text-3xl font-bold'>
						<NavLink to='/'>Maternify</NavLink>
					</h1>
					<ul className='p-4 font-medium'>
						{pages.map(([page, path], index) => (
							<li
								className='py-4'
								key={index}
							>
								<NavLink
									to={path}
									onClick={handleNav}
									className={({ isActive }) =>
										`cursor-pointer transition-colors duration-200 hover:text-[#38bdf8] ${isActive ? 'text-[#38bdf8]' : ''}`
									}
								>
									{page}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
