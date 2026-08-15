import { useState } from 'react'
import socials from '../data/socials.js'

function Hero() {
    const [imgOk, setImgOk] = useState(true)

    const scrollTo = (e, id) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="hero">
            <div className="hero-inner">
                <div className="hero-copy">
                    <p className="eyebrow" data-reveal>
                        Computer Science · Full-Stack Developer
                    </p>

                    <h1 className="hero-title" data-reveal>
                        <span className="line">Hi, I&apos;m</span>
                        <span className="line accent">Monisha</span>
                        <span className="line">Natarajan.</span>
                    </h1>

                    <p className="hero-lead" data-reveal>
                        I build modern full-stack applications — exploring cloud
                        deployment workflows and shipping projects that emphasize
                        clarity, performance, and clean engineering.
                    </p>

                    <div className="hero-actions" data-reveal>
                        <a
                            className="btn btn-primary"
                            href="#projects"
                            onClick={(e) => scrollTo(e, 'projects')}
                        >
                            View my work
                        </a>
                        <a className="btn btn-ghost" href={`mailto:${socials.email}`}>
                            Get in touch
                        </a>
                    </div>
                </div>

                <div className="hero-portrait" data-reveal>
                    <div className="portrait-frame">
                        {imgOk ? (
                            <img
                                src="/profile.jpg"
                                alt="Monisha Natarajan"
                                loading="eager"
                                onError={() => setImgOk(false)}
                            />
                        ) : (
                            <div className="portrait-fallback" aria-label="Monisha Natarajan">
                                <span>MN</span>
                            </div>
                        )}
                    </div>
                    <div className="portrait-glow" aria-hidden="true" />
                </div>
            </div>

            <a
                className="scroll-cue"
                href="#about"
                onClick={(e) => scrollTo(e, 'about')}
                aria-label="Scroll to about"
            >
                <span>Scroll</span>
                <span className="scroll-dot" aria-hidden="true" />
            </a>
        </section>
    )
}

export default Hero
