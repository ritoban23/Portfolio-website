import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import ThreeHero from '@/components/ThreeHero';
import Topbar from '@/components/Topbar';
import ExperienceSection from '@/components/ExperienceSection';

export default function Page() {
  return (
    <>
      <Topbar />
      <main>
        {/* Home */}
        <section id="home" data-section className="reveal" style={{position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
          <Suspense fallback={null}>
            <ThreeHero />
          </Suspense>
          <div className="container" style={{position: 'relative', zIndex: 10, textAlign: 'center'}}>
            <h1 className="sectionTitle" style={{fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem'}}>
              hi, <span style={{color: 'var(--clr-accent)'}}>ritoban</span> here.
            </h1>
            <p style={{fontSize: '1.25rem', color: 'var(--clr-neutral)', marginBottom: '2rem', fontWeight: '300'}}>
              I create stuff sometimes.
            </p>
            <p style={{maxWidth: '600px', margin: '0 auto', color: 'var(--clr-neutral)', lineHeight: '1.6', fontSize: '1.1rem'}}>
              I'm a software developer from India. I'm fascinated by large-scale, high-impact products and contributed to major feature launches in industry-leading services as well as apps that have 100M+ installs.
            </p>
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
                style={{borderRadius:'var(--radius)',objectFit:'cover'}}
                className="about-image"
              />
              <div className="about-content">
                <p style={{color:'var(--clr-neutral)',marginBottom:'1.5rem'}}>
                  I am currently a <strong style={{color:'var(--clr-light)'}}>Software Development Engineer</strong> at <span style={{color:'var(--clr-accent)'}}>Amazon</span>, working in
                  the AWS sector under team Route 53. At the same time, I am
                  undertaking a part-time <strong style={{color:'var(--clr-light)'}}>Master's of Science in Software Engineering</strong> at <span style={{color:'var(--clr-accent)'}}>University of Oxford</span>.
                </p>
                <p style={{color:'var(--clr-neutral)',marginBottom:'1.5rem'}}>Here are some technologies I have been working with:</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5rem',color:'var(--clr-neutral)'}}>
                  <div>▸ TypeScript</div>
                  <div>▸ Python</div>
                  <div>▸ React.js</div>
                  <div>▸ Java</div>
                  <div>▸ JavaScript ES6+</div>
                  <div>▸ C#</div>
                </div>
                <p style={{color:'var(--clr-neutral)',marginTop:'1.5rem'}}>
                  Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikToks.
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
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(400px,1fr))',gap:'2rem',marginTop:'3rem'}}>
              <div className="project-card">
                <Image src="/img/repCounterSS.png" alt="Rep Counter Web App Screenshot" width={960} height={540} style={{width:'100%',height:'200px',objectFit:'cover',borderRadius:'var(--radius-sm)',marginBottom:'1.5rem'}} />
                <h3>Health bot</h3>
                <p>A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.</p>
                <div className="project-tech">
                  <span>NODE.JS (SOCKET.IO)</span>
                  <span>REACT.JS</span>
                  <span>MONGODB</span>
                </div>
              </div>
              <div className="project-card">
                <Image src="/img/portfolio-02.jpg" alt="Project placeholder" width={960} height={540} style={{width:'100%',height:'200px',objectFit:'cover',borderRadius:'var(--radius-sm)',marginBottom:'1.5rem'}} />
                <h3>portfolio website</h3>
                <p>A responsive portfolio website built with Next.js and modern web technologies. Features smooth animations and clean design.</p>
                <div className="project-tech">
                  <span>NEXT.JS</span>
                  <span>TYPESCRIPT</span>
                  <span>CSS3</span>
                </div>
              </div>
              <div className="project-card">
                <Image src="/img/portfolio-03.jpg" alt="Project placeholder" width={960} height={540} style={{width:'100%',height:'200px',objectFit:'cover',borderRadius:'var(--radius-sm)',marginBottom:'1.5rem'}} />
                <h3>Wallet geenrator</h3>
                <p>A full-stack web application with user authentication, real-time features, and responsive design for optimal user experience.</p>
                <div className="project-tech">
                  <span>REACT</span>
                  <span>NODE.JS</span>
                  <span>POSTGRESQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-section className="reveal">
          <div className="container" style={{textAlign:'center'}}>
            <h2 className="sectionTitle">contact</h2>
            <p>Have a project or idea? I'm open to collaborations and internships.</p>
            <p>
              <a className="btn" href="mailto:ankudutt101@gmail.com">Email me</a>
              <a className="btn btnOutline" href="https://github.com/ritoban23" target="_blank" rel="noreferrer">GitHub</a>
            </p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Built by Ritoban Dutta and fueled by an alarming number of open Chrome tabs 😛</p>
      </footer>
    </>
  );
}
