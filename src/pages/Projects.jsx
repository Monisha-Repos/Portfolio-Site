function Projects() {
    const projects = [
        {
            title: 'Cadence',
            description:
                'A personalCadence is a smart calendar and time‑management assistant that uses AI to organize tasks, optimize schedules, and help users maintain consistent daily rhythm. portfolio built with React and Vite to showcase my projects, skills, and contact information.',
            tech: ['React ', 'Vite ', 'CSS '],
        },
        {
            title: 'Weather App',
            description:
                'A simple web app that displays weather data using an external API and a clean responsive interface.',
            tech: ['JavaScript ', 'API ', 'CSS '],
        },
        {
            title: 'Task Manager',
            description:
                'A productivity app concept for creating, organizing, and tracking tasks with a straightforward user experience.',
            tech: ['React ', 'State ', 'UI Design '],
        },
    ]

    return (
        <section className="projects-page">
            <div>
                <p className="eyebrow">Selected Work</p>
                <h1>Projects</h1>
                <p>
                    A few projects that show how I approach building useful, readable,
                    and polished web experiences.
                </p>

                <div className="card-grid">
                    {projects.map((project) => (
                        <article className="info-card" key={project.title}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>

                            <div className="tag-row">
                                {project.tech.map((item) => (
                                    <span className="tag" key={item}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects