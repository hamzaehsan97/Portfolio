const navigation = ["Home", "Career", "Work", "Writing", "About"];

const career = [
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer",
    period: "2022 — Present",
    summary:
      "Building and migrating customer-facing services, with work spanning critical APIs, automated integration testing, AWS Fargate, and resilient multi-region systems.",
    skills: ["Java", "AWS", "Distributed systems"],
  },
  {
    company: "NinjaTrader",
    role: "Full-Stack Engineer",
    period: "2022",
    summary:
      "Redesigned onboarding, modernized reporting infrastructure, and integrated critical APIs during the Tradovate platform acquisition.",
    skills: ["React", "Platform engineering", "Data systems"],
  },
  {
    company: "Weidert Group",
    role: "Software Engineer",
    period: "2020 — 2022",
    summary:
      "Developed web applications, analytics tooling, APIs, and performance improvements across the full product stack.",
    skills: ["React", "Python", "Analytics"],
  },
];

const projects = [
  {
    name: "StackPilot",
    type: "AI incident response · Featured",
    description:
      "An AI-powered on-call copilot that investigates alerts, connects evidence across code and observability tools, and drafts proposed fixes as pull requests.",
    url: "https://www.stack-pilot.com/",
    featured: true,
    proof: ["100+ engineers", "1,000+ bugs fixed", "15-minute average resolution"],
  },
  {
    name: "DroneSeek",
    type: "Computer vision",
    description:
      "An autonomous facial-recognition drone built with Tello, OpenCV, Pandas, Pygame, and Flask.",
    url: "https://github.com/hamzaehsan97/AI_Rescue_Drone",
  },
  {
    name: "Texties",
    type: "Full-stack product",
    description:
      "An SMS-based note-taking app built with Next.js, Flask, PostgreSQL, SQLAlchemy, and Twilio.",
    url: "https://texties.netlify.app/",
  },
  {
    name: "EV2EV",
    type: "iOS · MakeHarvard winner",
    description:
      "A peer-to-peer approach to electric-vehicle charging, created as the winning MakeHarvard 2019 project.",
    url: "https://github.com/hamzaehsan97/MakeHarvard2019-Ev2Ev",
  },
  {
    name: "FlashPass",
    type: "Mobile product",
    description:
      "A Flutter concept for a universal, location-aware car-wash membership and automated arrival experience.",
    url: "https://github.com/hamzaehsan97/car_wash",
  },
  {
    name: "Virus Growth Patterns",
    type: "Data science",
    description:
      "An R-based study modeling early COVID-19 growth against international travel patterns.",
    url: "https://github.com/hamzaehsan97/VirusGrowthPatterns",
  },
];

const writing = [
  {
    label: "Personal notes",
    title: "Essays and ideas",
    description: "Occasional writing on software, learning, and building things.",
    url: "https://medium.com/@hamzaehsan75",
  },
  {
    label: "StackPilot blog",
    title: "Notes from on-call",
    description:
      "Product writing about incident response, engineering debt, and AI-assisted debugging.",
    url: "https://www.stack-pilot.com/blog",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ number, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-number">{number}</p>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Hamza Ehsan, home">
          HE
        </a>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <p className="eyebrow">Hamza Ehsan · Software engineer · Seattle</p>
          <h1>Engineer by trade. Curious by default.</h1>
          <p className="hero-copy">
            I work across cloud infrastructure and product engineering. Lately,
            I’ve been especially interested in making on-call work less reactive
            through StackPilot.
          </p>
          <div className="hero-links">
            <a className="primary-link" href="#work">
              See what I’m working on
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Read résumé <Arrow />
            </a>
          </div>
        </section>

        <section className="section" id="career">
          <SectionHeading
            number="01"
            title="Career"
            description="Recent work across cloud services, trading platforms, and full-stack product development."
          />
          <div className="timeline">
            {career.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-meta">
                  <p>{item.period}</p>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <div className="timeline-detail">
                  <p>{item.summary}</p>
                  <ul className="tag-list" aria-label={`${item.company} skills`}>
                    {item.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <SectionHeading
            number="02"
            title="Selected work"
            description="A few products and experiments that were worth following through."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <a
                className={`project-card${project.featured ? " project-card--featured" : ""}`}
                href={project.url}
                key={project.name}
                target="_blank"
                rel="noreferrer"
              >
                <div className="card-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Arrow />
                </div>
                <div className="project-card__content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.proof && (
                    <ul className="project-proof" aria-label="StackPilot highlights">
                      {project.proof.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="writing">
          <SectionHeading
            number="03"
            title="Writing"
            description="A small index of ideas, notes, and product thinking—kept easy to browse."
          />
          <div className="writing-list">
            {writing.map((item) => (
              <a
                className="feature-link"
                href={item.url}
                key={item.title}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <p className="project-type">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading
            number="04"
            title="Away from the keyboard"
            description="Cycling, reading, cooking, and the questions that come from studying both computers and people."
          />
          <div className="life-grid">
            <article>
              <p className="project-type">Outside</p>
              <h3>Cycling</h3>
              <p>Long rides, new routes, and time away from the desk.</p>
            </article>
            <article>
              <p className="project-type">Learning</p>
              <h3>Reading</h3>
              <p>Technology, philosophy, human behavior, and useful contrarian ideas.</p>
            </article>
            <article>
              <p className="project-type">Making</p>
              <h3>Cooking</h3>
              <p>A different kind of systems thinking—with a better payoff at the end.</p>
            </article>
          </div>

          <article className="education-row">
            <p className="project-type">Education</p>
            <div>
              <h3>Lawrence University</h3>
              <p>Bachelor’s in Computer Science and Philosophy, 2020</p>
            </div>
          </article>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Have an interesting problem—or a good question?</h2>
          <a className="contact-email" href="mailto:hamza-ehsan@outlook.com">
            hamza-ehsan@outlook.com <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Hamza Ehsan</p>
        <div className="footer-links">
          <a href="https://github.com/hamzaehsan97" target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-ehsan-56937113b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
          <a href="https://medium.com/@hamzaehsan75" target="_blank" rel="noreferrer">
            Medium <Arrow />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
