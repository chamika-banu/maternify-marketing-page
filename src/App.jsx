import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/About'
					element={<About />}
				/>
				<Route
					path='/Contact'
					element={<Contact />}
				/>
			</Routes>
			<Footer />
		</>
	)
}

export default App
