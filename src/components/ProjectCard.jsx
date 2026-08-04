import { ArrowIcon } from './Icons.jsx'

function ProjectCard({ project, index }) {
    const { title, year, description, tech, link } = project
    const Tag = link ? 'a' : 'article'
    const linkProps = link
        ? { href: link, target: '_blank', rel: 'noreferrer' }
        : {}

    return (
        <Tag className="project-card" data-reveal {...linkProps}>
            <div className="project-top">
                <span className="project-index">0{index + 1}</span>
                <span className="project-year">{year}</span>
                {link && <ArrowIcon className="project-arrow" />}
            </div>

            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{description}</p>

            <div className="tag-row">
                {tech.map((item) => (
                    <span className="tag" key={item}>
                        {item}
                    </span>
                ))}
            </div>
        </Tag>
    )
}

export default ProjectCard
