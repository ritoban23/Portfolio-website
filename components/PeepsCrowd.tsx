"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface PeepsCrowdProps {
    count?: number;
    height?: number;
}

interface Peep {
    x: number;
    y: number;
    scale: number;
    speed: number;
    direction: 1 | -1;
    imageIndex: number;
    opacity: number;
}

// Use 15 standing peep images
const PEEP_COUNT = 15;

export default function PeepsCrowd({ count = 20, height = 200 }: PeepsCrowdProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [peeps, setPeeps] = useState<Peep[]>([]);
    const [images, setImages] = useState<string[]>([]);
    const animationRef = useRef<gsap.core.Timeline | null>(null);

    // Generate image paths
    useEffect(() => {
        const imgPaths: string[] = [];
        for (let i = 1; i <= PEEP_COUNT; i++) {
            imgPaths.push(`/images/peeps/peep-standing-${i}.png`);
        }
        setImages(imgPaths);
    }, []);

    // Initialize peeps
    useEffect(() => {
        if (images.length === 0 || !containerRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const newPeeps: Peep[] = [];

        for (let i = 0; i < count; i++) {
            const direction = Math.random() > 0.5 ? 1 : -1;
            const scale = 0.4 + Math.random() * 0.4; // Random scale between 0.4 and 0.8
            const yOffset = Math.random() * 40; // Variation in y position

            newPeeps.push({
                x: Math.random() * containerWidth,
                y: height - 80 - yOffset, // Position near bottom
                scale,
                speed: 0.3 + Math.random() * 0.5, // px per frame
                direction,
                imageIndex: Math.floor(Math.random() * images.length),
                opacity: 0.6 + Math.random() * 0.4,
            });
        }

        // Sort by y position (depth sorting)
        newPeeps.sort((a, b) => a.y - b.y);
        setPeeps(newPeeps);
    }, [images, count, height]);

    // Animate peeps walking
    useEffect(() => {
        if (peeps.length === 0 || !containerRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;

        const animate = () => {
            setPeeps(prev => prev.map(peep => {
                let newX = peep.x + (peep.speed * peep.direction);

                // Wrap around
                if (newX > containerWidth + 100) {
                    newX = -100;
                } else if (newX < -100) {
                    newX = containerWidth + 100;
                }

                return { ...peep, x: newX };
            }));
        };

        const intervalId = setInterval(animate, 50); // ~20fps for smooth animation

        return () => clearInterval(intervalId);
    }, [peeps.length]);

    return (
        <div
            ref={containerRef}
            className="peeps-crowd-container"
            style={{
                position: 'relative',
                width: '100%',
                height: `${height}px`,
                overflow: 'hidden',
                pointerEvents: 'none',
            }}
        >
            {peeps.map((peep, idx) => (
                <div
                    key={idx}
                    className="peep-figure"
                    style={{
                        position: 'absolute',
                        left: peep.x,
                        top: peep.y,
                        transform: `scaleX(${peep.direction}) scale(${peep.scale})`,
                        opacity: peep.opacity,
                        transition: 'left 0.05s linear',
                        filter: 'brightness(0.9) saturate(0.8)',
                    }}
                >
                    {images[peep.imageIndex] && (
                        <img
                            src={images[peep.imageIndex]}
                            alt=""
                            style={{
                                height: '120px',
                                width: 'auto',
                                objectFit: 'contain',
                            }}
                            loading="lazy"
                        />
                    )}
                </div>
            ))}

            {/* Gradient overlay at top to fade peeps in */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(to bottom, #111111 0%, transparent 100%)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
}
