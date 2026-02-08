"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const navItems = {
    "/#home": {
        name: "home",
    },
    "/#about": {
        name: "about",
    },
    "/#experience": {
        name: "experience",
    },
    "/projects": {
        name: "projects",
    },
    "/writing": {
        name: "writing",
    },
    "/beyond": {
        name: "beyond code",
    },
};

export function MorphicNavbar() {
    const [activePath, setActivePath] = useState("/#home");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const navRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
    const pathname = usePathname();

    // Update indicator position based on active item
    const updateIndicator = (path: string) => {
        const activeElement = itemRefs.current.get(path);
        const navElement = navRef.current;

        if (activeElement && navElement) {
            const navRect = navElement.getBoundingClientRect();
            const activeRect = activeElement.getBoundingClientRect();

            setIndicatorStyle({
                left: activeRect.left - navRect.left,
                width: activeRect.width,
            });
        }
    };

    // Update active path based on current route
    useEffect(() => {
        if (pathname === "/beyond") {
            setActivePath("/beyond");
        } else if (pathname === "/projects" || pathname.startsWith("/projects/")) {
            setActivePath("/projects");
        } else if (pathname === "/writing" || pathname.startsWith("/writing/")) {
            setActivePath("/writing");
        } else {
            // Default to home for main page
            if (activePath === "/beyond" || activePath === "/projects" || activePath === "/writing") {
                setActivePath("/#home");
            }
        }
    }, [pathname]);

    // Update indicator when active path changes
    useEffect(() => {
        // Small delay to ensure refs are set
        const timer = setTimeout(() => {
            updateIndicator(activePath);
        }, 50);
        return () => clearTimeout(timer);
    }, [activePath]);

    // Update indicator on resize
    useEffect(() => {
        const handleResize = () => updateIndicator(activePath);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activePath]);

    // Handle scroll spy for hash links
    useEffect(() => {
        const handleScroll = () => {
            // Skip scroll spy on dedicated pages
            if (pathname === "/beyond" || pathname === "/projects" || pathname.startsWith("/projects/")) return;

            const sections = ["experience", "about", "home"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200) {
                        const newPath = `/#${section}`;
                        if (activePath !== newPath) {
                            setActivePath(newPath);
                        }
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname, activePath]);

    const handleClick = (path: string) => {
        setActivePath(path);

        // Handle hash navigation
        if (path.startsWith("/#")) {
            const hash = path.substring(2);
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="morphic-navbar-wrapper">
            <div className="flex items-center justify-center">
                <div
                    ref={navRef}
                    className="morphic-navbar"
                >
                    {/* Morphing indicator - this is the animated background that slides */}
                    <div
                        className="morphic-navbar-indicator"
                        style={{
                            left: indicatorStyle.left,
                            width: indicatorStyle.width,
                        }}
                    />

                    {/* Nav items */}
                    {Object.entries(navItems).map(([path, { name }]) => {
                        const isActive = activePath === path;

                        return (
                            <Link
                                ref={(el) => {
                                    if (el) itemRefs.current.set(path, el);
                                }}
                                className={clsx(
                                    "morphic-navbar-link",
                                    isActive && "active"
                                )}
                                href={path}
                                key={path}
                                onClick={() => handleClick(path)}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

export default MorphicNavbar;
