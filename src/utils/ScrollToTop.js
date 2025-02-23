import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		// Always scroll to top when the route changes
		window.scrollTo(0, 0)
	}, [pathname])

	useEffect(() => {
		// Handle clicks on links to scroll to the top
		const handleClick = (event) => {
			const target = event.target.closest('a') // Get the closest anchor tag
			if (target && target.getAttribute('href') === window.location.pathname) {
				window.scrollTo({ top: 0, behavior: 'smooth' })
			}
		}

		document.addEventListener('click', handleClick)

		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [])

	return null
}

export default ScrollToTop
