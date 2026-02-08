"use client";

import { useState } from "react";
import { RadialNav, type RadialNavItem } from "@/components/animate-ui/components/community/radial-nav";
import {
    LayoutGrid,
    Server,
    Brain,
    Database,
    Globe,
    Code2,
} from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    category: string;
}

interface ProjectsWithRadialNavProps {
    projects: Project[];
}

// Define the categories we want
const categories = ["All", "DevOps", "AI/ML", "Data Engg", "Full Stack", "OSS"];

// Map categories to icons
const categoryIcons: Record<string, typeof LayoutGrid> = {
    "All": LayoutGrid,
    "DevOps": Server,
    "AI/ML": Brain,
    "Data Engg": Database,
    "Full Stack": Globe,
    "OSS": Code2,
};

export default function ProjectsWithRadialNav({ projects }: ProjectsWithRadialNavProps) {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    // Create radial nav items with evenly distributed angles
    const navItems: RadialNavItem[] = categories.map((category, idx) => ({
        id: idx,
        icon: categoryIcons[category] || LayoutGrid,
        label: category,
        angle: (360 / categories.length) * idx - 90, // Start from top
    }));

    // Map project categories to our simplified categories
    const mapCategory = (projectCategory: string): string => {
        const categoryMap: Record<string, string> = {
            "AI & Web3": "AI/ML",
            "AI & Developer Tools": "AI/ML",
            "Machine Learning": "AI/ML",
            "Open Source": "OSS",
            "Blockchain": "Full Stack",
            "DevOps": "DevOps",
            "Systems": "DevOps",
            "Full Stack": "Full Stack",
        };
        return categoryMap[projectCategory] || "Full Stack";
    };

    // Filter projects based on active category
    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => mapCategory(p.category) === activeCategory);

    const handleCategoryChange = (id: number) => {
        setActiveCategory(categories[id]);
    };

    return (
        <div className="projects-with-nav">
            {/* Radial Nav - Fixed Position */}
            <div className="radial-nav-container">
                <RadialNav
                    items={navItems}
                    size={200}
                    defaultActiveId={0}
                    onActiveChange={handleCategoryChange}
                    menuButtonConfig={{
                        iconSize: 18,
                        buttonSize: 38,
                        buttonPadding: 8,
                    }}
                />
            </div>

            {/* Projects Grid */}
            <div className="projects-grid-all">
                {filteredProjects.map((project, idx) => (
                    <a
                        key={idx}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-full"
                    >
                        <div className="project-category-badge">{project.category}</div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="project-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="project-card-arrow">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
                <div className="projects-empty-state">
                    <p>No projects in this category yet.</p>
                </div>
            )}
        </div>
    );
}
