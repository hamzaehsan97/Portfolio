const navigation = [
  { label: "Home", href: "/" },
  { label: "Career", href: "/career/" },
  { label: "Work", href: "/work/" },
  { label: "Writing", href: "/writing/" },
  { label: "About", href: "/about/" },
];

const career = [
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer II",
    period: "Aug 2022 — Present",
    summary:
      "Architecting distributed cloud and GenAI platforms across Amazon Connect, with work spanning cross-region resilience, AgentCore and MCP infrastructure, LLM evaluation, security, operational readiness, and large-scale cost optimization.",
    skills: ["Java", "AWS", "Distributed systems", "AgentCore", "MCP"],
  },
  {
    company: "NinjaTrader",
    role: "Software Engineer",
    period: "Feb 2022 — Aug 2022",
    summary:
      "Led full-stack integrations during the Tradovate acquisition and redesigned onboarding, reporting, and analytics systems without disrupting live trading operations.",
    skills: ["React", "Django", "GCP", "Platform migration"],
  },
  {
    company: "Weidert Group",
    role: "Software Engineer",
    period: "Aug 2020 — Feb 2022",
    summary:
      "Built web applications, analytics tooling, APIs, and a Python/Flask CSS minification service that reduced application bundle sizes and improved first-load performance.",
    skills: ["React", "Python", "Flask", "Analytics"],
  },
];

const projects = [
  {
    name: "StackPilot",
    type: "AI incident response · Featured",
    description:
      "An AI-powered on-call copilot that investigates alerts, connects evidence across code and observability tools, and drafts proposed fixes as pull requests.",
    url: "/work/stackpilot/",
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

export const routeMetadata = {
  "/": {
    title: "Hamza Ehsan — Software Engineer",
    description:
      "Hamza Ehsan is a Seattle-based software engineer building distributed systems, cloud infrastructure, and AI platforms.",
  },
  "/career/": {
    title: "Career — Hamza Ehsan",
    description:
      "Hamza Ehsan's software engineering experience across AWS, NinjaTrader, and Weidert Group.",
  },
  "/work/": {
    title: "Selected Work — Hamza Ehsan",
    description:
      "Selected software, AI, distributed systems, computer vision, and product projects by Hamza Ehsan.",
  },
  "/work/stackpilot/": {
    title: "StackPilot — Hamza Ehsan",
    description:
      "StackPilot is an AI-powered on-call copilot that investigates alerts and proposes fixes.",
  },
  "/writing/": {
    title: "Writing — Hamza Ehsan",
    description: "Essays and product writing by Hamza Ehsan about software and incident response.",
  },
  "/about/": {
    title: "About — Hamza Ehsan",
    description:
      "About Hamza Ehsan, a Seattle software engineer and Lawrence University computer science and philosophy graduate.",
  },
  "/resume/": {
    title: "Résumé — Hamza Ehsan",
    description:
      "Résumé for Hamza Ehsan, a software engineer specializing in distributed systems and AI platforms.",
  },
};

export const routes = Object.keys(routeMetadata);

function normalizePath(pathname) {
  const withoutLegacyBase = (pathname || "/").replace(/^\/Portfolio(?=\/|$)/, "");
  if (withoutLegacyBase === "") return "/";
  return withoutLegacyBase.endsWith("/") ? withoutLegacyBase : `${withoutLegacyBase}/`;
}

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

function Header({ pathname }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Hamza Ehsan, home">
        HE
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => {
          const isActive = item.href === pathname;
          return (
            <a key={item.label} href={item.href} aria-current={isActive ? "page" : undefined}>
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

function PageIntro({ eyebrow, title, description, children }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-copy">{description}</p>
      {children}
    </header>
  );
}

function CareerSection({ standalone = false }) {
  return (
    <section className={`section${standalone ? " section--standalone" : ""}`} id="career">
      {!standalone && (
        <SectionHeading
          number="01"
          title="Career"
          description="Recent work across cloud services, AI platforms, trading systems, and full-stack product development."
        />
      )}
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
      {standalone && (
        <a className="inline-link" href="/resume/">
          Read the full résumé <Arrow />
        </a>
      )}
    </section>
  );
}

function WorkSection({ standalone = false }) {
  return (
    <section className={`section${standalone ? " section--standalone" : ""}`} id="work">
      {!standalone && (
        <SectionHeading
          number="02"
          title="Selected work"
          description="Products and experiments spanning AI operations, computer vision, mobile software, and data systems."
        />
      )}
      <div className="project-grid">
        {projects.map((project, index) => {
          const external = project.url.startsWith("http");
          return (
            <a
              className={`project-card${project.featured ? " project-card--featured" : ""}`}
              href={project.url}
              key={project.name}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
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
          );
        })}
      </div>
    </section>
  );
}

function WritingSection({ standalone = false }) {
  return (
    <section className={`section${standalone ? " section--standalone" : ""}`} id="writing">
      {!standalone && (
        <SectionHeading
          number="03"
          title="Writing"
          description="A small index of ideas, notes, and product thinking—kept easy to browse."
        />
      )}
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
  );
}

function AboutSection({ standalone = false }) {
  return (
    <section className={`section${standalone ? " section--standalone" : ""}`} id="about">
      {!standalone && (
        <SectionHeading
          number="04"
          title="Away from the keyboard"
          description="Cycling, reading, cooking, and the questions that come from studying both computers and people."
        />
      )}
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
  );
}

function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <p className="eyebrow">Get in touch</p>
      <h2 id="contact-title">Have an interesting problem—or a good question?</h2>
      <a className="contact-email" href="mailto:hamza-ehsan@outlook.com">
        hamza-ehsan@outlook.com <Arrow />
      </a>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" id="home">
        <p className="eyebrow">Hamza Ehsan · Software engineer · Seattle</p>
        <h1>Engineer by trade. Curious by default.</h1>
        <p className="hero-copy">
          I build distributed systems and AI platforms at AWS, and I’m exploring how software
          can make on-call work calmer through StackPilot.
        </p>
        <div className="hero-links">
          <a className="primary-link" href="/work/">
            See selected work
          </a>
          <a href="/resume/">
            Read résumé <Arrow />
          </a>
        </div>
      </section>
      <CareerSection />
      <WorkSection />
      <WritingSection />
      <AboutSection />
      <Contact />
    </>
  );
}

function CareerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Career"
        title="Distributed systems, AI platforms, and product engineering."
        description="Six years of engineering experience spanning global AWS services, trading platforms, and full-stack products."
      />
      <CareerSection standalone />
      <Contact />
    </>
  );
}

function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title="Things I’ve followed through."
        description="A collection of products and experiments across AI operations, computer vision, full-stack software, and data science."
      />
      <WorkSection standalone />
      <Contact />
    </>
  );
}

function StackPilotPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work · StackPilot"
        title="A calmer way to handle on-call."
        description="StackPilot is an AI-powered on-call copilot that investigates alerts, connects evidence across code and observability tools, and drafts proposed fixes as pull requests."
      >
        <div className="hero-links">
          <a
            className="primary-link"
            href="https://www.stack-pilot.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit StackPilot <Arrow />
          </a>
          <a href="https://www.stack-pilot.com/blog" target="_blank" rel="noreferrer">
            Read the blog <Arrow />
          </a>
        </div>
      </PageIntro>

      <section className="section section--standalone">
        <div className="metric-grid" aria-label="StackPilot highlights">
          <article>
            <strong>100+</strong>
            <span>engineers</span>
          </article>
          <article>
            <strong>1,000+</strong>
            <span>bugs fixed</span>
          </article>
          <article>
            <strong>15 min</strong>
            <span>average resolution</span>
          </article>
        </div>
        <div className="detail-grid">
          <article>
            <p className="project-type">Investigate</p>
            <h2>Start with evidence.</h2>
            <p>
              StackPilot investigates alerts using context from the systems engineers already
              rely on, reducing the time spent assembling a picture by hand.
            </p>
          </article>
          <article>
            <p className="project-type">Resolve</p>
            <h2>Move from diagnosis to action.</h2>
            <p>
              It connects signals across code and observability tools, then drafts a proposed
              fix as a pull request for an engineer to review.
            </p>
          </article>
        </div>
      </section>
      <Contact />
    </>
  );
}

function WritingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Writing"
        title="Notes on software and building."
        description="Personal essays and product writing about engineering, incident response, and the ideas that survive contact with real systems."
      />
      <WritingSection standalone />
      <Contact />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Computers, people, and the space between them."
        description="I’m a Seattle-based software engineer. Studying computer science and philosophy shaped how I think about systems: what they do, whom they serve, and where their assumptions break."
      />
      <AboutSection standalone />
      <Contact />
    </>
  );
}

function ResumePage() {
  return (
    <>
      <PageIntro
        eyebrow="Résumé"
        title="Software Engineer II · Distributed Systems & AI Platforms"
        description="Six years of experience architecting distributed cloud and GenAI platforms, with cross-team leadership across system architecture, resilience, AI infrastructure, security, operational readiness, and cost optimization."
      >
        <div className="hero-links">
          <a className="primary-link" href="/resume.pdf" target="_blank" rel="noreferrer">
            View PDF <Arrow />
          </a>
          <a href="/resume.pdf" download="Hamza_Ehsan_SWE_Resume.pdf">
            Download résumé
          </a>
        </div>
      </PageIntro>

      <section className="section section--standalone resume-summary">
        <div className="skill-groups">
          <article>
            <p className="project-type">Languages</p>
            <p>Java, Python, TypeScript, JavaScript, SQL</p>
          </article>
          <article>
            <p className="project-type">Cloud & AI</p>
            <p>AWS, AgentCore, Model Context Protocol, Amazon Bedrock, Lambda, ECS Fargate</p>
          </article>
          <article>
            <p className="project-type">Engineering</p>
            <p>Distributed systems, microservices, event-driven architecture, system design, CI/CD, observability, IAM, incident response</p>
          </article>
        </div>
        <CareerSection standalone />
      </section>
      <Contact />
    </>
  );
}

function NotFoundPage() {
  return (
    <PageIntro
      eyebrow="404"
      title="This page wandered off."
      description="The page you requested does not exist, but the rest of the site is close by."
    >
      <div className="hero-links">
        <a className="primary-link" href="/">
          Return home
        </a>
      </div>
    </PageIntro>
  );
}

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Hamza Ehsan</p>
      <div className="footer-links">
        <a href="https://github.com/hamzaehsan97" target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
        <a href="https://www.linkedin.com/in/ehsan-hamza" target="_blank" rel="noreferrer">
          LinkedIn <Arrow />
        </a>
        <a href="https://medium.com/@hamzaehsan75" target="_blank" rel="noreferrer">
          Medium <Arrow />
        </a>
      </div>
    </footer>
  );
}

const pageComponents = {
  "/": HomePage,
  "/career/": CareerPage,
  "/work/": WorkPage,
  "/work/stackpilot/": StackPilotPage,
  "/writing/": WritingPage,
  "/about/": AboutPage,
  "/resume/": ResumePage,
};

function App({ pathname }) {
  const currentPath = normalizePath(
    pathname ?? (typeof window !== "undefined" ? window.location.pathname : "/"),
  );
  const Page = pageComponents[currentPath] || NotFoundPage;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header pathname={currentPath} />
      <main id="main-content">
        <Page />
      </main>
      <Footer />
    </div>
  );
}

export default App;
