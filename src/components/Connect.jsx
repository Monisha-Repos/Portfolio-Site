import socials from '../data/socials.js'
import Availability from './Availability.jsx'
import ContactForm from './ContactForm.jsx'
import { LinkedInIcon, GitHubIcon } from './Icons.jsx'

function Connect() {
    const socialLinks = [
        { label: 'LinkedIn', href: socials.linkedin, Icon: LinkedInIcon },
        { label: 'GitHub', href: socials.github, Icon: GitHubIcon },
    ]

    return (
        <section id="connect" className="section connect">
            <div className="section-head" data-reveal>
                <span className="section-index">04</span>
                <h2 className="section-title">Connect</h2>
                <span className="section-rule" aria-hidden="true" />
            </div>

            <div className="connect-inner">
                <div className="connect-copy" data-reveal>
                    <p className="connect-big">
                        Let&apos;s build
                        <br />
                        something.
                    </p>
                    <p className="connect-sub">
                        I&apos;m open to internships, collaborations, and a good
                        conversation. Drop me a note and I&apos;ll get back to you.
                    </p>

                    <Availability />

                    <ul className="connect-socials">
                        {socialLinks.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a href={href} target="_blank" rel="noreferrer">
                                    <Icon className="connect-icon" />
                                    <span>{label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <ContactForm />
            </div>

            <footer className="site-footer">
                <span>© {new Date().getFullYear()} Monisha Natarajan</span>
                <span>Designed &amp; built with React</span>
            </footer>
        </section>
    )
}

export default Connect
