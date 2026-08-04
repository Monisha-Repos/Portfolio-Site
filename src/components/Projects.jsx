import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

function Projects() {
    return (
        <section id="projects" className="section projects">
            <div className="section-head" data-reveal>
                <span className="section-index">02</span>
                <h2 className="section-title">Selected Work</h2>
                <span className="section-rule" aria-hidden="true" />
            </div>

            <p className="section-lead" data-reveal>
                A few projects that show how I approach building useful, readable,
                and polished web experiences.
            </p>

            <div className="project-grid">
                {projects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </section>
    )
}

export default Projects
