"use client";

import { useState } from "react";
import { RadialNav, type RadialNavItem } from "@/components/animate-ui/components/community/radial-nav";
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogContainer,
    MorphingDialogImage,
} from "@/components/motion-primitives/morphing-dialog";
import {
    LayoutGrid,
    BookOpen,
    FileText,
    FlaskConical,
} from "lucide-react";

interface WritingItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    category: "Blogs" | "Books" | "Research";
    image?: string;
    date?: string;
    link?: string;
    stats?: string;
}

const writingItems: WritingItem[] = [
    // Research
    {
        id: "self-driving",
        title: "Self-Driving Cars: An Epitome of Technological Innovation",
        subtitle: "IEEE Publication",
        description: "A comprehensive exploration of the technological innovations driving autonomous vehicle development, covering sensor systems, machine learning algorithms, and safety considerations that are shaping the future of transportation.",
        category: "Research",
        date: "2024",
    },
    {
        id: "genai-multimodal",
        title: "Leveraging GenAI For Multi-Modal Content Creation",
        subtitle: "Cambridge Scholars (In Progress)",
        description: "An ongoing research project exploring how generative AI can be harnessed for creating multi-modal content across text, images, and audio, with a focus on practical applications and ethical considerations.",
        category: "Research",
        date: "2025",
    },
    // Books
    {
        id: "days-that-breathe",
        title: "Days That Breathe Life and Days That Don't",
        subtitle: "Bookleaf Publishing",
        description: "A collection of reflective prose and poetry exploring the duality of human experience—the days that fill us with purpose and the ones that challenge our resilience. A personal journey through moments of inspiration and introspection.",
        category: "Books",
        date: "2023",
    },
    // Blogs
    {
        id: "crypto-auditor",
        title: "Crypto Protocol Auditor: MindsDB Hacktoberfest",
        subtitle: "Technical Deep Dive",
        description: "Think you found the next 10x crypto project? But before you ape in, all you find are videos of fake crypto gurus, documentation too complex to understand. This blog explores how I built an AI-powered auditor to cut through the noise.",
        category: "Blogs",
        date: "Nov 4, 2025",
        stats: "43 reactions",
    },
    {
        id: "random-debugging",
        title: "Random Debugging Epiphanies: From Frustration to Flow",
        subtitle: "Personal Insights",
        description: "When I started web development, I quickly realized that the most challenging aspect wasn't writing code itself, but rather overcoming the mysterious bugs and finding clarity through the chaos of debugging.",
        category: "Blogs",
        date: "Sep 18, 2025",
        stats: "13 reactions",
    },
];

const categories = ["All", "Blogs", "Books", "Research"];

const categoryIcons: Record<string, typeof LayoutGrid> = {
    "All": LayoutGrid,
    "Blogs": FileText,
    "Books": BookOpen,
    "Research": FlaskConical,
};

export default function WritingWithRadialNav() {
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const navItems: RadialNavItem[] = categories.map((category, idx) => ({
        id: idx,
        icon: categoryIcons[category] || LayoutGrid,
        label: category,
        angle: (360 / categories.length) * idx - 90,
    }));

    const filteredItems = activeCategory === "All"
        ? writingItems
        : writingItems.filter(item => item.category === activeCategory);

    const handleCategoryChange = (id: number) => {
        setActiveCategory(categories[id]);
    };

    return (
        <div className="writing-with-nav">
            {/* Radial Nav */}
            <div className="radial-nav-container">
                <RadialNav
                    items={navItems}
                    size={180}
                    defaultActiveId={0}
                    onActiveChange={handleCategoryChange}
                    menuButtonConfig={{
                        iconSize: 18,
                        buttonSize: 38,
                        buttonPadding: 8,
                    }}
                />
            </div>

            {/* Writing Grid */}
            <div className="writing-grid">
                {filteredItems.map((item) => (
                    <MorphingDialog
                        key={item.id}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 24,
                        }}
                    >
                        <MorphingDialogTrigger
                            style={{ borderRadius: '12px' }}
                            className="writing-card-trigger"
                        >
                            <div className="writing-card">
                                <div className="writing-card-badge">{item.category}</div>
                                <MorphingDialogTitle className="writing-card-title">
                                    {item.title}
                                </MorphingDialogTitle>
                                <MorphingDialogSubtitle className="writing-card-subtitle">
                                    {item.subtitle}
                                </MorphingDialogSubtitle>
                                {item.date && (
                                    <span className="writing-card-date">{item.date}</span>
                                )}
                                {item.stats && (
                                    <span className="writing-card-stats">{item.stats}</span>
                                )}
                            </div>
                        </MorphingDialogTrigger>

                        <MorphingDialogContainer>
                            <MorphingDialogContent
                                style={{ borderRadius: '16px' }}
                                className="writing-dialog-content"
                            >
                                <div className="writing-dialog-inner">
                                    <div className="writing-dialog-header">
                                        <div className="writing-dialog-badge">{item.category}</div>
                                        <MorphingDialogTitle className="writing-dialog-title">
                                            {item.title}
                                        </MorphingDialogTitle>
                                        <MorphingDialogSubtitle className="writing-dialog-subtitle">
                                            {item.subtitle}
                                        </MorphingDialogSubtitle>
                                        {item.date && (
                                            <span className="writing-dialog-date">{item.date}</span>
                                        )}
                                    </div>
                                    <div className="writing-dialog-body">
                                        <p>{item.description}</p>
                                        {item.stats && (
                                            <div className="writing-dialog-stats">
                                                <span>📊 {item.stats}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <MorphingDialogClose className="writing-dialog-close" />
                            </MorphingDialogContent>
                        </MorphingDialogContainer>
                    </MorphingDialog>
                ))}
            </div>

            {/* Empty state */}
            {filteredItems.length === 0 && (
                <div className="writing-empty-state">
                    <p>No writings in this category yet.</p>
                </div>
            )}
        </div>
    );
}
