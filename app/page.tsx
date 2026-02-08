import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import MorphicNavbar from "@/components/MorphicNavbar";
import ExperienceSection from "@/components/ExperienceSection";
import AnimatedText from "@/components/AnimatedText";
import ShowcaseWrapper from "@/components/ShowcaseWrapper";
import WinLogGrid from "@/components/WinLogGrid";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import BackToTop from "@/components/BackToTop";
import TechStackSection from "@/components/TechStackSection";
import HeaderControls from "@/components/HeaderControls";

export default function Page() {
  return (
    <>
      <HeaderControls />
      <MorphicNavbar />
      <main>
        {/* Home */}
        <section
          id="home"
          data-section
          className="reveal"
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="container"
            style={{ position: "relative", zIndex: 10, textAlign: "center" }}
          >
            <h1
              className="sectionTitle"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                marginBottom: "1rem",
              }}
            >
              <AnimatedText
                text="hi,"
                type="fadeIn"
                delay={500}
                speed={150}
              />{" "}
              <span style={{ color: "var(--clr-accent)" }}>
                <AnimatedText
                  text="ritoban"
                  type="typing"
                  delay={1000}
                  speed={150}
                  className="inline-block"
                />
              </span>{" "}
              <AnimatedText
                text="here."
                type="fadeIn"
                delay={2500}
                speed={150}
              />
            </h1>
            <div
              style={{
                fontSize: "1.25rem",
                color: "var(--clr-neutral)",
                marginBottom: "2rem",
                fontWeight: "300",
              }}
            >
              <AnimatedText
                text="I like creating with purpose and play."
                type="slideUp"
                delay={3000}
              />
            </div>
            <div
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "var(--clr-neutral)",
                lineHeight: "1.6",
                fontSize: "1.1rem",
              }}
            >
              <AnimatedText
                text="I'm a software developer from India who's drawn to big ideas and even bigger user bases. I'm fascinated by industry-leading services and the software that powers them, and I'm dedicated to honing my skills to contribute to projects that reach a wide audience."
                type="slideUp"
                delay={3500}
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" data-section className="reveal">
          <div className="container">
            <h2 className="sectionTitle">about me</h2>
            <div className="about-layout">
              <Image
                src="/img/pp.jpeg"
                alt="Portrait"
                width={300}
                height={300}
                style={{ borderRadius: "var(--radius)", objectFit: "cover" }}
                className="about-image"
              />
              <div className="about-content">
                <p
                  style={{
                    color: "var(--clr-neutral)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Hello! I'm Ritoban, a passionate software developer with a knack for creating dynamic and user-friendly web applications. My journey in tech has been a thrilling ride, from building full-stack applications to exploring the realms of blockchain, AI, and creative coding. I am currently a senior at{" "}
                  <span style={{ color: "var(--clr-accent)" }}>
                    KIIT University
                  </span>
                  , pursuing a degree in{" "}
                  <strong style={{ color: "var(--clr-light)" }}>
                    Computer Science
                  </strong>
                  . I thrive on challenges and am always eager to learn new technologies and contribute to impactful projects.
                </p>
                <p
                  style={{
                    color: "var(--clr-neutral)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Here are some technologies I have been working with:
                </p>
                <TechStackSection />
                <p style={{ color: "var(--clr-neutral)", marginTop: "1.5rem" }}>
                  When I’m not coding, I’m usually side-questing: dabbling in
                  design, music, weaving little bits of
                  storytelling, and keeping up with sports.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Experience */}
        <section id="experience" data-section className="myServices reveal">
          <div className="container">
            <h2 className="sectionTitle">experience</h2>
            <ExperienceSection />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-section className="myWork reveal">
          <div className="container">
            <h2 className="sectionTitle">pet projects</h2>
            <ProjectsCarousel
              projects={[
                {
                  title: "Crypto Protocol Auditor",
                  description: "AI-powered auditor built on MindsDB that unifies scattered crypto/web3 data into one conversational interface.",
                  tags: ["MindsDB", "Next.js", "Python", "LLM APIs"],
                  link: "https://github.com/ritoban23/crypto-protocol-auditor",
                },
                {
                  title: "gh-showcase",
                  description: "Drop-in React component to visualize your GitHub activity, PR breakdown, and developer DNA in seconds.",
                  tags: ["React", "TypeScript", "GitHub API", "NPM"],
                  link: "https://github.com/ritoban23/gh-showcase",
                },
                {
                  title: "orbWallet",
                  description: "A web wallet for Solana & Ethereum. Create multiple wallets, generate public/private key pairs.",
                  tags: ["Solana", "Ethereum", "Web3", "Cryptography"],
                  link: "https://github.com/ritoban23/orbWallet",
                },
                {
                  title: "DevOps Pipeline",
                  description: "Automated CI/CD pipeline with Docker, Kubernetes orchestration, and monitoring dashboards.",
                  tags: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
                  link: "https://github.com/ritoban23",
                },
                {
                  title: "ML Portfolio Optimizer",
                  description: "Machine learning model for portfolio optimization using modern portfolio theory and reinforcement learning.",
                  tags: ["Python", "TensorFlow", "Finance", "ML"],
                  link: "https://github.com/ritoban23",
                },
              ]}
            />
          </div>
        </section>

        {/* Activity */}
        <section id="activity" data-section className="reveal">
          <div className="container">
            <h2 className="sectionTitle">activity</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              <ShowcaseWrapper username="ritoban23" />
            </div>
          </div>
        </section>

        {/* Win Log */}
        <section id="win-log" data-section className="myWork reveal">
          <div className="container">
            <h2 className="sectionTitle">win log</h2>
            <WinLogGrid images={[
              'akash.jpg', 'digitalocean.jpg', 'docsgpt.jpg', 'dotnet.jpg',
              'flexprice.jpg', 'globo.jpg', 'interledger.jpg', 'keploy.jpg',
              'mindsdb1.jpg', 'mindsdb2.jpg', 'raycast.jpg', 'inweave.jpg', 'superdevs.jpg',
              'aevy.jpg', 'mlh.jpg', 'mindsdb3.jpg'
            ]} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-section className="reveal">
          <div className="container">
            <h2 className="sectionTitle">contact</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--clr-neutral)' }}>
              Have a project or idea? I'm open to collaborations and
              internships.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="mailto:ankudutt101@gmail.com" className="contact-card" style={{ textDecoration: 'none', color: 'inherit', minWidth: '200px' }}>
                <i className="fas fa-envelope" style={{ fontSize: '2rem', color: 'var(--clr-accent)', marginBottom: '1rem' }}></i>
                <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
                <p>ankudutt101@gmail.com</p>
              </a>

              <a href="https://github.com/ritoban23" target="_blank" rel="noreferrer" className="contact-card" style={{ textDecoration: 'none', color: 'inherit', minWidth: '200px' }}>
                <i className="fab fa-github" style={{ fontSize: '2rem', color: 'var(--clr-accent)', marginBottom: '1rem' }}></i>
                <h3 style={{ marginBottom: '0.5rem' }}>GitHub</h3>
                <p>@ritoban23</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          Built by Ritoban Dutta and fueled by an alarming number of open Chrome
          tabs 😛
        </p>
      </footer>
      <BackToTop />
    </>
  );
}
