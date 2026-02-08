"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselIndicator,
    CarouselItem,
} from '@/components/motion-primitives/carousel';

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

interface ProjectsCarouselProps {
    projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [projects.length]);

    return (
        <div className="projects-carousel-container">
            <div className="projects-carousel-wrapper">
                <Carousel
                    index={currentIndex}
                    onIndexChange={setCurrentIndex}
                    className="projects-carousel"
                >
                    <CarouselContent className="projects-carousel-content">
                        {projects.map((project, idx) => (
                            <CarouselItem key={idx} className="projects-carousel-item">
                                <div className="project-card-new">
                                    <div className="project-card-header">
                                        <h3>{project.title}</h3>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span key={tagIdx} className="project-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNavigation
                        alwaysShow
                        className="projects-carousel-nav"
                        classNameButton="projects-carousel-nav-btn"
                    />
                    <CarouselIndicator
                        className="projects-carousel-indicator"
                        classNameButton="projects-carousel-dot"
                    />
                </Carousel>
            </div>

            {/* View All Link */}
            <div className="carousel-footer">
                <Link href="/projects" className="view-all-link">
                    View all projects
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
