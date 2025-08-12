"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link href="#home" style={{color: 'var(--clr-light)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600'}}>
          Ritoban Dutta
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="nav-desktop" aria-label="Primary">
        <ul className="navList">
          <li><Link className="navLink" href="#home">Home</Link></li>
          <li><Link className="navLink" href="#about">About</Link></li>
          <li><Link className="navLink" href="#experience">Experience</Link></li>
          <li><Link className="navLink" href="#projects">Projects</Link></li>
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
        onClick={() => setOpen(o => !o)}
      >
        <span className="hamburger" />
      </button>
      
      {/* Mobile Navigation */}
      <nav id="primary-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
        <ul className="navList" onClick={() => setOpen(false)} role="menubar">
          <li><Link className="navLink" href="#home">Home</Link></li>
          <li><Link className="navLink" href="#about">About</Link></li>
          <li><Link className="navLink" href="#experience">Experience</Link></li>
          <li><Link className="navLink" href="#projects">Projects</Link></li>
          <li><Link className="navLink" href="#contact">Contact</Link></li>
        </ul>
        
        {/* Mobile Social Icons */}
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
