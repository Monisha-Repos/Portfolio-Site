import socials from '../data/socials.js'
import { LinkedInIcon, GitHubIcon, MailIcon } from './Icons.jsx'

function SocialRail() {
    const links = [
        { label: 'LinkedIn', href: socials.linkedin, Icon: LinkedInIcon, external: true },
        { label: 'GitHub', href: socials.github, Icon: GitHubIcon, external: true },
        { label: 'Contact form', href: '#connect', Icon: MailIcon, external: false },
    ]

    const jumpToConnect = (e) => {
        e.preventDefault()
        document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <aside className="social-rail" aria-label="Social links">
            <ul>
                {links.map(({ label, href, Icon, external }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noreferrer' : undefined}
                            onClick={external ? undefined : jumpToConnect}
                            aria-label={label}
                        >
                            <Icon className="rail-icon" />
                        </a>
                    </li>
                ))}
            </ul>
            <span className="rail-line" aria-hidden="true" />
        </aside>
    )
}

export default SocialRail
