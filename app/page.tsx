import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ThreeHero from "@/components/ThreeHero";
import Topbar from "@/components/Topbar";
import ExperienceSection from "@/components/ExperienceSection";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedText from "@/components/AnimatedText";
import ShowcaseWrapper from "@/components/ShowcaseWrapper";
import WinLogGrid from "@/components/WinLogGrid";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <>
      <Topbar />
      <ParticleBackground />
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
          <Suspense fallback={null}>
            <ThreeHero />
          </Suspense>
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
                <div className="tech-compact">
                  {/* Programming Languages */}
                  <div className="tech-row">
                    <span className="tech-label">Languages:</span>
                    <div className="tech-items">
                      <span><i className="fab fa-js-square"></i> JavaScript</span>
                      <span><i className="fas fa-code"></i> TypeScript</span>
                      <span><i className="fab fa-html5"></i> HTML</span>
                      <span><i className="fab fa-css3-alt"></i> CSS</span>
                      <span><i className="fas fa-database"></i> SQL</span>
                      <span><i className="fas fa-file-code"></i> C++</span>
                      <span><i className="fab fa-python"></i> Python</span>
                      <span><i className="fab fa-node-js"></i> NodeJS</span>
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div className="tech-row">
                    <span className="tech-label">Frameworks:</span>
                    <div className="tech-items">
                      <span><i className="fab fa-react"></i> React/NextJS</span>
                      <span><i className="fas fa-server"></i> ExpressJS</span>
                      <span><i className="fas fa-database"></i> PostgreSQL</span>
                      <span><i className="fas fa-database"></i> MongoDB</span>
                      <span><i className="fab fa-css3-alt"></i> Tailwind CSS</span>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="tech-row">
                    <span className="tech-label">Tools:</span>
                    <div className="tech-items">
                      <span><i className="fab fa-git-alt"></i> Git</span>
                      <span><i className="fab fa-github"></i> GitHub</span>
                      <span><i className="fas fa-code"></i> VS Code</span>
                      <span><i className="fab fa-linux"></i> Linux CLI</span>
                      <span><i className="fab fa-aws"></i> AWS</span>
                      <span><i className="fab fa-docker"></i> Docker</span>
                      <span><i className="fas fa-paper-plane"></i> Postman</span>
                      <span><i className="fab fa-figma"></i> Figma</span>
                      <span><i className="fas fa-video"></i> Premiere Pro</span>
                    </div>
                  </div>
                </div>
                <p style={{ color: "var(--clr-neutral)", marginTop: "1.5rem" }}>
                  When I’m not coding, I’m usually side-questing: dabbling in
                  design, music, weaving little bits of
                  storytelling, and keeping up with sports.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience - Commented Out */}
        {/*
        <section id="experience" data-section className="myServices reveal">
          <div className="container">
            <h2 className="sectionTitle">experience</h2>
            <ExperienceSection />
          </div>
        </section>
        */}

        {/* Projects */}
        <section id="projects" data-section className="myWork reveal">
          <div className="container">
            <h2 className="sectionTitle">pet projects</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
                gap: "2rem",
                marginTop: "3rem",
              }}
            >
              <a href="https://github.com/ritoban23/crypto-protocol-auditor" target="_blank" rel="noopener noreferrer" className="project-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>Crypto Protocol Auditor</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <p>
                    It's an AI-powered auditor, built on MindsDB, that unifies this scattered crypto/web3 data into one conversational interface.
                  </p>
                  <div className="project-tech">
                    <span>MINDSDB</span>
                    <span>NEXT.JS</span>
                    <span>PYTHON</span>
                    <span>LLM APIS</span>
                    <span>SQL</span>
                    <span>REST APIS</span>
                  </div>
                </div>
              </a>
              <a href="https://github.com/ritoban23/gh-showcase" target="_blank" rel="noopener noreferrer" className="project-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>gh-showcase</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <p>
                    Drop-in React component to visualize your GitHub activity, PR breakdown, and developer DNA in seconds.
                  </p>
                  <div className="project-tech">
                    <span>REACT</span>
                    <span>TYPESCRIPT</span>
                    <span>GITHUB API</span>
                    <span>NPM PACKAGE</span>
                  </div>
                </div>
              </a>
              <a href="https://github.com/ritoban23/orbWallet" target="_blank" rel="noopener noreferrer" className="project-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3>orbWallet</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <p>
                    A web wallet for Solana & Ethereum. Create multiple wallets, generate public/private key pairs.
                  </p>
                  <div className="project-tech">
                    <span>SOLANA</span>
                    <span>ETHEREUM</span>
                    <span>WEB3</span>
                    <span>CRYPTOGRAPHY</span>
                  </div>
                </div>
              </a>
            </div>
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
          <div className="container" style={{ textAlign: "center" }}>
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
