import socials from '../data/socials.js'
import Availability from './Availability.jsx'
import { LinkedInIcon, GitHubIcon, MailIcon, ArrowIcon } from './Icons.jsx'

function Connect() {
    const links = [
        { label: 'LinkedIn', href: socials.linkedin, Icon: LinkedInIcon, handle: '/monisha-natarajan' },
        { label: 'GitHub', href: socials.github, Icon: GitHubIcon, handle: '@Monisha-Repos' },
        { label: 'Email', href: `mailto:${socials.email}`, Icon: MailIcon, handle: socials.email },
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
                        conversation. The fastest way to reach me is email.
                    </p>
                    <a className="btn btn-primary" href={`mailto:${socials.email}`}>
                        Say hello
                    </a>

                    <Availability />
                </div>

                <ul className="connect-links" data-reveal>
                    {links.map(({ label, href, Icon, handle }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target={href.startsWith('mailto:') ? undefined : '_blank'}
                                rel="noreferrer"
                            >
                                <Icon className="connect-icon" />
                                <span className="connect-label">{label}</span>
                                <span className="connect-handle">{handle}</span>
                                <ArrowIcon className="connect-arrow" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="site-footer">
                <span>© {new Date().getFullYear()} Monisha Natarajan</span>
                <span>Designed &amp; built with React</span>
            </footer>
        </section>
    )
}

export default Connect
