'use client';

import React, { useState } from 'react';
import { TransitionPanel } from '@/components/motion-primitives/transition-panel';

const TECH_DOMAINS = [
    {
        title: 'Full Stack',
        subtitle: 'Web Development Ecosystem',
        content: 'React, Next.js, Node.js, Express, TypeScript, JavaScript, HTML/CSS, Tailwind, PostgreSQL, MongoDB, REST APIs, GraphQL',
    },
    {
        title: 'DevOps',
        subtitle: 'Infrastructure & Automation',
        content: 'Docker, Kubernetes, AWS, GitHub Actions, Terraform, Linux, CI/CD Pipelines, Nginx, Cloud Architecture, Monitoring',
    },
    {
        title: 'Data Engineering',
        subtitle: 'Data Pipelines & ML',
        content: 'Python, Pandas, NumPy, TensorFlow, PyTorch, SQL, Apache Spark, Airflow, ETL Pipelines, Data Visualization, Jupyter',
    },
];

export function TechStackSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="tech-transition-container">
            <div className="tech-tabs">
                {TECH_DOMAINS.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`tech-tab-button ${activeIndex === index ? 'active' : ''}`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            <div className="tech-panel-container">
                <TransitionPanel
                    activeIndex={activeIndex}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    variants={{
                        enter: { opacity: 0, y: -30, filter: 'blur(4px)' },
                        center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                        exit: { opacity: 0, y: 30, filter: 'blur(4px)' },
                    }}
                >
                    {TECH_DOMAINS.map((item, index) => (
                        <div key={index} className="tech-panel-content">
                            <h4 className="tech-panel-subtitle">{item.subtitle}</h4>
                            <p className="tech-panel-text">{item.content}</p>
                        </div>
                    ))}
                </TransitionPanel>
            </div>
        </div>
    );
}

export default TechStackSection;
