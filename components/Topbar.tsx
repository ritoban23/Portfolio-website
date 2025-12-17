"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (open && !target.closest('.nav') && !target.closest('.menuBtn')) {
        console.log('Closing menu due to outside click');
        setOpen(false);
      }
    };
    
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClickOutside);
    document.body.style.overflow = open ? 'hidden' : '';
    
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div id="scroll-progress" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '2px',
        background: 'var(--clr-accent)',
        width: '0%',
        transition: 'width 0.1s ease-out',
        zIndex: 1001
      }}></div>
      <div className="logo">
        <Link href="#home">
          <Image 
            src="/img/devrito.png" 
            alt="Ritoban Dutta" 
            width={50} 
            height={50} 
            style={{
              objectFit: 'contain',
              filter: 'invert(1) brightness(2)' 
            }} 
          />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="nav-desktop" aria-label="Primary">
        <ul className="navList">
          <li><Link className="navLink" href="/#home">Home</Link></li>
          <li><Link className="navLink" href="/#about">About</Link></li>
          <li><Link className="navLink" href="/#experience">Experience</Link></li>
          <li><Link className="navLink" href="/#projects">Projects</Link></li>
          <li>
            {pathname === '/beyond' ? (
              <Link className="navLink special-nav-btn" href="/">Portfolio</Link>
            ) : (
              <Link className="navLink special-nav-btn" href="/beyond">Beyond Code</Link>
            )}
          </li>
        </ul>
      </nav>
      
      {/* Social Icons */}
      <div className="social-icons">
        <a href="mailto:ankudutt101@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/ritoban23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://medium.com" target="_blank" rel="noopener noreferrer" aria-label="Medium">
          <FaMedium />
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        className="menuBtn"
        aria-label="toggle navigation"
        aria-controls="primary-nav"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          console.log('Hamburger clicked, current state:', open);
          setOpen(o => !o);
        }}
      >
        <span className="hamburger" />
      </button>
      
      {/* Mobile Navigation */}
      <nav id="primary-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
        <ul className="navList" onClick={() => setOpen(false)} role="menubar">
          <li><Link className="navLink" href="/#home">Home</Link></li>
          <li><Link className="navLink" href="/#about">About</Link></li>
          <li><Link className="navLink" href="/#experience">Experience</Link></li>
          <li><Link className="navLink" href="/#projects">Projects</Link></li>
          <li>
            {pathname === '/beyond' ? (
              <Link className="navLink special-nav-btn" href="/">Portfolio</Link>
            ) : (
              <Link className="navLink special-nav-btn" href="/beyond">Beyond Code</Link>
            )}
          </li>
          <li><Link className="navLink" href="/#contact">Contact</Link></li>
        </ul>
        
        <div className="social-icons-mobile">
          <a href="mailto:ankudutt101@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/ritoban23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <FaMedium />
          </a>
        </div>
      </nav>
    </header>
  );
}
