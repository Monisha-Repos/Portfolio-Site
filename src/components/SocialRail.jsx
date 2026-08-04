import socials from '../data/socials.js'
import { LinkedInIcon, GitHubIcon, MailIcon } from './Icons.jsx'

function SocialRail() {
    const links = [
        { label: 'LinkedIn', href: socials.linkedin, Icon: LinkedInIcon },
        { label: 'GitHub', href: socials.github, Icon: GitHubIcon },
        { label: 'Email', href: `mailto:${socials.email}`, Icon: MailIcon },
    ]

    return (
        <aside className="social-rail" aria-label="Social links">
            <ul>
                {links.map(({ label, href, Icon }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target={href.startsWith('mailto:') ? undefined : '_blank'}
                            rel="noreferrer"
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
