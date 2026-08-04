import { useState } from 'react'
import useScrollSpy from '../hooks/useScrollSpy.js'

const SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'connect', label: 'Connect' },
]

const IDS = SECTIONS.map((s) => s.id)

function Navbar() {
    const active = useScrollSpy(IDS)
    const [open, setOpen] = useState(false)

    const go = (e, id) => {
        e.preventDefault()
        setOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="navbar">
            <a className="brand" href="#home" onClick={(e) => go(e, 'home')}>
                <span className="brand-mark">M</span>
                <span className="brand-name">Monisha&nbsp;Natarajan</span>
            </a>

            <button
                className="nav-toggle"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                <span />
                <span />
            </button>

            <nav className={`nav-links ${open ? 'is-open' : ''}`}>
                {SECTIONS.map((item, i) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={active === item.id ? 'active' : ''}
                        onClick={(e) => go(e, item.id)}
                    >
                        <span className="nav-index">0{i + 1}</span>
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Navbar
