"use client";

import { useState } from "react";

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  isCurrentRole?: boolean;
}

const experiences: Experience[] = [
  {
    id: "datacurve",
    company: "Datacurve (YC W24)",
    role: "FOSS Engineer (Contract)",
    location: "Remote",
    period: "12/2025 – Present",
    isCurrentRole: true,
    description: [
      "Engineering robust solutions for critical bugs and features across major open-source ecosystems.",
      "Generating data for State-of-the-Art LLMs, directly contributing to the 'Project Mars' program on Shipd platform.",
    ],
  },
  {
    id: "opensource",
    company: "Open Source",
    role: "Contributor",
    location: "Global",
    period: "06/2025 – Present",
    isCurrentRole: true,
    description: [
      "Big Tech & Systems: Merged production-grade code optimizations for Microsoft, Meta, Uber, and Apache.",
      "AI & Data: Refactored core logic and testing suites for Pandas, MLflow, MindsDB, and Timescale.",
      "Web Ecosystem: Improved performance, accessibility, and tooling for Storybook, WordPress, and Biome.",
    ],
  },
  {
    id: "fed",
    company: "Federation of Entrepreneurship Development",
    role: "Senior Creative Executive",
    location: "Bhubaneswar, India",
    period: "09/2022 – 12/2024",
    description: [
      "Architected responsive web solutions increasing engagement by ~25% across event pages.",
      "Drove technical literacy for 200+ students through analytical workshops.",
    ],
  },
];

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const selectedExp = experiences.find((exp) => exp.id === selectedId) || experiences[0];

  return (
    <div className="experience-accordion">
      {/* List on the left */}
      <div className="experience-list">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            className={`experience-list-item ${selectedId === exp.id ? "active" : ""}`}
            onClick={() => setSelectedId(exp.id)}
          >
            <span className="experience-list-company">{exp.company}</span>
            <span className="experience-list-role">{exp.role}</span>
            {exp.isCurrentRole && <span className="current-badge-small">Current</span>}
          </button>
        ))}
      </div>

      {/* Details on the right */}
      <div className="experience-details">
        <div className="experience-details-header">
          <h3 className="experience-company">{selectedExp.company}</h3>
          <span className="experience-role">{selectedExp.role}</span>
        </div>
        <div className="experience-details-meta">
          <span className="experience-period">
            {selectedExp.period}
            {selectedExp.isCurrentRole && <span className="current-badge">Current</span>}
          </span>
          <span className="experience-location">📍 {selectedExp.location}</span>
        </div>
        <ul className="experience-description">
          {selectedExp.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}