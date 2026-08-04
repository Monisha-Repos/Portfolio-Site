import skills from '../data/skills.js'

function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="section-head" data-reveal>
                <span className="section-index">03</span>
                <h2 className="section-title">Skills &amp; Tools</h2>
                <span className="section-rule" aria-hidden="true" />
            </div>

            <div className="skills-grid">
                {skills.map((cluster) => (
                    <div className="skill-cluster" key={cluster.group} data-reveal>
                        <h3 className="skill-group">{cluster.group}</h3>
                        <ul>
                            {cluster.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
