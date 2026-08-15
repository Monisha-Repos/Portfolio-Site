function About() {
    return (
        <section id="about" className="section about">
            <div className="section-head" data-reveal>
                <span className="section-index">01</span>
                <h2 className="section-title">About</h2>
                <span className="section-rule" aria-hidden="true" />
            </div>

            <div className="about-grid">
                <div className="about-copy" data-reveal>
                    <p className="lead">
                        I&apos;m a computer science student focused on full-stack
                        engineering — turning ideas into products that feel fast,
                        clear, and considered, from interface to backend.
                    </p>
                    <p>
                        My work spans building responsive React applications,
                        wiring up APIs, and exploring the cloud deployment workflows
                        that get projects in front of real people. I care about the
                        details: readable code, thoughtful motion, and experiences
                        that hold up on any screen.
                    </p>
                    <p>
                        When I&apos;m learning something new, I like to build with
                        it — which is how most of the projects below came to be.
                    </p>
                </div>

                <ul className="about-facts" data-reveal>
                    <li>
                        <span className="fact-k">Focus</span>
                        <span className="fact-v">Full-Stack Engineering</span>
                    </li>
                    <li>
                        <span className="fact-k">Currently</span>
                        <span className="fact-v">Studying Computer Science</span>
                    </li>
                    <li>
                        <span className="fact-k">Exploring</span>
                        <span className="fact-v">Cloud deployment &amp; CI/CD</span>
                    </li>
                    <li>
                        <span className="fact-k">Values</span>
                        <span className="fact-v">Clarity · Performance · Craft</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
