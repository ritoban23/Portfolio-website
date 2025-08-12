import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import ThreeHero from '@/components/ThreeHero';
import Topbar from '@/components/Topbar';

export default function Page() {
  return (
    <>
      <Topbar />
      <main>
        {/* Home */}
        <section id="home" data-section className="reveal">
          <div className="container">
            <h1 className="sectionTitle">hi, <span style={{color: 'var(--clr-accent)'}}>ritoban</span> here.</h1>
            <p style={{fontSize: '1.25rem', color: 'var(--clr-muted)', marginBottom: '2rem'}}>I create stuff sometimes.</p>
            <p style={{maxWidth: '600px', margin: '0 auto', color: 'var(--clr-muted)', lineHeight: '1.6'}}>
              I'm a software developer from India. I'm fascinated by large-scale, high-impact products and contributed to major feature launches in industry-leading services as well as apps that have 100M+ installs.
            </p>
          </div>
          <Suspense fallback={null}>
            <ThreeHero />
          </Suspense>
        </section>

        {/* About */}
        <section id="about" data-section className="reveal">
          <div className="container">
            <h2 className="sectionTitle">about me</h2>
            <div style={{display:'grid',gridTemplateColumns:'1fr 300px',gap:'3rem',alignItems:'start',marginTop:'2rem'}}>
              <div>
                <p style={{color:'var(--clr-muted)',marginBottom:'1.5rem'}}>
                  I am currently a <strong style={{color:'var(--clr-light)'}}>Software Development Engineer</strong> at <span style={{color:'var(--clr-accent)'}}>Amazon</span>, working in
                  the AWS sector under team Route 53. At the same time, I am
                  undertaking a part-time <strong style={{color:'var(--clr-light)'}}>Master's of Science in Software Engineering</strong> at <span style={{color:'var(--clr-accent)'}}>University of Oxford</span>.
                </p>
                <p style={{color:'var(--clr-muted)',marginBottom:'1.5rem'}}>Here are some technologies I have been working with:</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5rem',color:'var(--clr-muted)'}}>
                  <div>▸ TypeScript</div>
                  <div>▸ Python</div>
                  <div>▸ React.js</div>
                  <div>▸ Java</div>
                  <div>▸ JavaScript ES6+</div>
                  <div>▸ C#</div>
                </div>
                <p style={{color:'var(--clr-muted)',marginTop:'1.5rem'}}>
                  Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikToks.
                </p>
              </div>
              <Image src="/img/pp.jpeg" alt="Portrait" width={300} height={300} style={{borderRadius:12,objectFit:'cover'}} />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" data-section className="myServices reveal">
          <div className="container">
            <h2 className="sectionTitle">experience</h2>
            <div style={{display:'grid',gridTemplateColumns:'200px 1fr',gap:'3rem',maxWidth:'800px',margin:'2rem auto 0'}}>
              <div style={{color:'var(--clr-muted)',fontSize:'0.9rem',textAlign:'right'}}>
                <div style={{marginBottom:'2rem'}}>AMAZON</div>
                <div style={{marginBottom:'2rem'}}>WATTPAD</div>
                <div style={{marginBottom:'2rem'}}>UNIVERSITY OF TORONTO</div>
                <div style={{marginBottom:'2rem'}}>CENTIVIZER</div>
                <div>ORANGE GATE</div>
              </div>
              <div>
                <div style={{marginBottom:'3rem'}}>
                  <h3 style={{color:'var(--clr-light)',margin:'0 0 0.5rem 0'}}>Associate Engineer @ <span style={{color:'var(--clr-accent)'}}>Amazon</span></h3>
                  <p style={{color:'var(--clr-muted)',fontSize:'0.9rem',margin:'0 0 1rem 0'}}>MAY 2020 - APR 2021</p>
                  <div style={{color:'var(--clr-muted)',lineHeight:'1.6'}}>
                    <p>▸ Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).</p>
                    <p>▸ Iteratively built web experiences for 80 million users across high-traffic pages.</p>
                    <p>▸ Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.</p>
                  </div>
                </div>
              </div>
            </div>
            <Link href="#projects" className="btn" scroll={true}>See my projects</Link>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-section className="myWork reveal">
          <div className="container">
            <h2 className="sectionTitle">pet projects</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(400px,1fr))',gap:'2rem',marginTop:'3rem'}}>
              <div className="project-card">
                <Image src="/img/repCounterSS.png" alt="Rep Counter Web App Screenshot" width={960} height={540} style={{width:'100%',height:'200px',objectFit:'cover',borderRadius:8,marginBottom:'1.5rem'}} />
                <h3>tall tales</h3>
                <p>A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.</p>
                <div className="project-tech">
                  <span>NODE.JS (SOCKET.IO)</span>
                  <span>REACT.JS</span>
                  <span>MONGODB</span>
                </div>
              </div>
              <div className="project-card">
                <Image src="/img/portfolio-02.jpg" alt="Project placeholder" width={960} height={540} style={{width:'100%',height:'200px',objectFit:'cover',borderRadius:8,marginBottom:'1.5rem'}} />
                <h3>portfolio website</h3>
                <p>A responsive portfolio website built with Next.js and modern web technologies. Features smooth animations and clean design.</p>
                <div className="project-tech">
                  <span>NEXT.JS</span>
                  <span>TYPESCRIPT</span>
                  <span>CSS3</span>
                </div>
              </div>
              <div className="project-card">
                <Image src="/img/portfolio-03.jpg" alt="Project placeholder" width={960} height={540} style={{width:'100%',height:'200px',objectFit:'cover',borderRadius:8,marginBottom:'1.5rem'}} />
                <h3>web application</h3>
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
        <a href="mailto:ankudutt101@gmail.com">ankudutt101@gmail.com</a>
        <div style={{marginTop:'1rem'}}>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{marginRight:12}}>Twitter</a>
          <a href="https://github.com/ritoban23" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
}
