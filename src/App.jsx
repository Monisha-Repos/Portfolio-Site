import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
// import Skills from './pages/Skills.jsx'
import Connect from './pages/Connect.jsx'
// import './App.css'

function App() {
    const [currentPage, setCurrentPage] = useState('home')

    return (
        <div className="app">
            <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            {currentPage === 'home' && <Home />}
            {currentPage === 'projects' && <Projects />}
            {currentPage === 'skills' && <h4>Page Under Construction</h4>}
            {currentPage === 'connect' && <Connect />}
        </div>
    )
}

export default App