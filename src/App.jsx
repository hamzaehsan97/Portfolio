const navigation = ["Home", "Career", "Work", "Writings", "Life"];

const career = [
  {
    company: "NinjaTrader",
    role: "Full-Stack Engineer",
    period: "2022 — Present",
    summary:
      "Building product and platform experiences for active traders, from onboarding interfaces to operational systems and critical integrations.",
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
  {
    company: "TitletownTech + Microsoft",
    role: "Software Engineer Intern",
    period: "2019",
    summary:
      "Built machine-learning and speech-recognition prototypes for startup evaluation and language-learning products.",
    skills: ["Python", "Machine learning", "Prototyping"],
  },
  {
    company: "Lawrence University",
    role: "Software Engineer Intern",
    period: "2018 — 2019",
    summary:
      "Modernized student-facing portals and integrations while completing a bachelor’s degree in computer science.",
    skills: ["JavaScript", "APIs", "Web platforms"],
  },
];

const projects = [
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
  {
    name: "College Retention Rates",
    type: "Data science",
    description:
      "An exploration of how students’ financial well-being relates to college retention and dropout rates.",
    url: "https://github.com/hamzaehsan97/CollegeRetentionRates",
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
          <p className="eyebrow">Software engineer · Chicago</p>
          <h1>I build useful software with care.</h1>
          <p className="hero-copy">
            I’m Hamza Ehsan, a full-stack engineer focused on clear interfaces,
            dependable systems, and products that make complicated work feel
            simpler.
          </p>
          <div className="hero-links">
            <a className="primary-link" href="#work">
              View selected work
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
            description="A career spent turning complex product and platform problems into practical software."
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
            description="A selection of product, mobile, machine-learning, and data projects."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <a
                className="project-card"
                href={project.url}
                key={project.name}
                target="_blank"
                rel="noreferrer"
              >
                <div className="card-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Arrow />
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="writings">
          <SectionHeading
            number="03"
            title="Writings"
            description="Notes on engineering, products, and the ideas worth keeping."
          />
          <a
            className="feature-link"
            href="https://medium.com/@hamzaehsan75"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <p className="project-type">Medium</p>
              <h3>Essays and notes</h3>
              <p>Read the longer-form archive on software, learning, and building.</p>
            </div>
            <Arrow />
          </a>
        </section>

        <section className="section" id="life">
          <SectionHeading
            number="04"
            title="Beyond the screen"
            description="The interests that keep the work in perspective."
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
              <p>Technology, business, human behavior, and useful contrarian ideas.</p>
            </article>
            <article>
              <p className="project-type">Making</p>
              <h3>Cooking</h3>
              <p>A different kind of systems thinking—with a better payoff at the end.</p>
            </article>
          </div>

          <div className="recognition-grid">
            <article>
              <p className="project-type">Education</p>
              <h3>Lawrence University</h3>
              <p>Bachelor of Computer Science, 2020</p>
            </article>
            <article>
              <p className="project-type">Recognition</p>
              <h3>Built in good company</h3>
              <p>
                MakeHarvard winner · The Pitch winner · DifferenceMaker runner-up
                · LuLaunch winner
              </p>
            </article>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Have a thoughtful problem to solve?</h2>
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
