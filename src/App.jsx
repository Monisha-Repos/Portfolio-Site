import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import SocialRail from './components/SocialRail.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Connect from './components/Connect.jsx'
import useReveal from './hooks/useReveal.js'

function App() {
    useReveal()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const h = document.documentElement
            const max = h.scrollHeight - h.clientHeight
            setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className="app">
            <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
            <div className="bg-aurora" aria-hidden="true" />

            <Navbar />
            <SocialRail />

            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Connect />
            </main>
        </div>
    )
}

export default App
