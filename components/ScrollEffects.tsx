"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollEffects(){
  const pathname = usePathname();

  useEffect(() => {
    // Reveal elements
  const reveals = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    reveals.forEach(el => revealObs.observe(el));

    // Active nav link
  const sections = Array.from(document.querySelectorAll('[data-section]')) as HTMLElement[];
  const links = Array.from(document.querySelectorAll('.navLink')) as HTMLAnchorElement[];
  const map = new Map<string, HTMLAnchorElement>();
    links.forEach(l => {
      const href = l.getAttribute('href');
      if (href && href.startsWith('#')) map.set(href.slice(1), l);
    });
    const setActive = (id: string) => {
      links.forEach(l => l.classList.remove('active'));
      const link = map.get(id);
      if (link) link.classList.add('active');
    };
    const secObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) setActive((e.target as HTMLElement).id); });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });
    sections.forEach(s => secObs.observe(s));

    return () => { revealObs.disconnect(); secObs.disconnect(); };
  }, [pathname]);

  return null;
}
