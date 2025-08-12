"use client";
import { useState } from 'react';

interface ExperienceData {
  id: string;
  company: string;
  title: string;
  date: string;
  description: string[];
}

const experienceData: ExperienceData[] = [
  {
    id: 'amazon',
    company: 'AMAZON',
    title: 'Associate Engineer @ Amazon',
    date: 'MAY 2020 - APR 2021',
    description: [
      '▸ Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).',
      '▸ Iteratively built web experiences for 80 million users across high-traffic pages.',
      '▸ Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.'
    ]
  },
  {
    id: 'wattpad',
    company: 'WATTPAD',
    title: 'Software Engineer @ Wattpad',
    date: 'JAN 2019 - APR 2020',
    description: [
      '▸ Developed and maintained key features for the Wattpad platform serving millions of users worldwide.',
      '▸ Collaborated with cross-functional teams to implement user-facing features and improve platform performance.',
      '▸ Worked on both frontend and backend systems using modern web technologies and best practices.'
    ]
  },
  {
    id: 'toronto',
    company: 'UNIVERSITY OF TORONTO',
    title: 'Research Assistant @ University of Toronto',
    date: 'SEP 2018 - DEC 2018',
    description: [
      '▸ Conducted research in computer science and software engineering under faculty supervision.',
      '▸ Contributed to academic projects and publications in the field of software development.',
      '▸ Gained experience in research methodologies and academic writing.'
    ]
  },
  {
    id: 'contivizer',
    company: 'CONTIVIZER RTC',
    title: 'Software Developer @ Contivizer RTC',
    date: 'JUN 2017 - AUG 2018',
    description: [
      '▸ Developed software solutions for real-time communication systems.',
      '▸ Worked on system optimization and performance improvements.',
      '▸ Collaborated with team members to deliver high-quality software products.'
    ]
  }
];

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState('amazon');
  const [exitingExperience, setExitingExperience] = useState<string | null>(null);

  const handleTabClick = (experienceId: string) => {
    if (experienceId !== activeExperience) {
      setExitingExperience(activeExperience);
      setActiveExperience(experienceId);
      
      // Clear the exiting state after animation completes
      setTimeout(() => {
        setExitingExperience(null);
      }, 600);
    }
  };

  return (
    <div className="experience-container">
      <div className="experience-tabs">
        {experienceData.map((exp) => (
          <button
            key={exp.id}
            className={`experience-tab ${activeExperience === exp.id ? 'active' : ''}`}
            onClick={() => handleTabClick(exp.id)}
          >
            {exp.company}
          </button>
        ))}
      </div>
      <div className="experience-content">
        {experienceData.map((exp) => {
          let className = 'experience-item';
          if (activeExperience === exp.id) {
            className += ' active';
          } else if (exitingExperience === exp.id) {
            className += ' exiting';
          }
          
          return (
            <div
              key={exp.id}
              className={className}
            >
              <h3>{exp.title}</h3>
              <p className="date">{exp.date}</p>
              <div className="description">
                {exp.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}