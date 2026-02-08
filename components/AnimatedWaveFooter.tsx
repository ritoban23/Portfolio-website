"use client";

import { useEffect, useRef } from 'react';

interface WaveProps {
    color?: string;
    height?: number;
}

export default function AnimatedWaveFooter({ color = '#acfffe', height = 80 }: WaveProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = height;
        };

        resize();
        window.addEventListener('resize', resize);

        let time = 0;

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw multiple waves for depth effect
            const waves = [
                { amplitude: 15, frequency: 0.015, speed: 0.03, opacity: 0.3, offset: 0 },
                { amplitude: 20, frequency: 0.02, speed: 0.02, opacity: 0.2, offset: 10 },
                { amplitude: 12, frequency: 0.025, speed: 0.04, opacity: 0.15, offset: 20 },
            ];

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, height);

                for (let x = 0; x <= canvas.width; x++) {
                    const y = Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude + (height / 2) + wave.offset;
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.lineTo(canvas.width, height);
                ctx.lineTo(0, height);
                ctx.closePath();

                ctx.fillStyle = color.replace(')', `, ${wave.opacity})`).replace('rgb', 'rgba').replace('#', '');
                // Handle hex color
                if (color.startsWith('#')) {
                    const r = parseInt(color.slice(1, 3), 16);
                    const g = parseInt(color.slice(3, 5), 16);
                    const b = parseInt(color.slice(5, 7), 16);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${wave.opacity})`;
                }
                ctx.fill();
            });

            // Draw floating particles
            const particleCount = 15;
            for (let i = 0; i < particleCount; i++) {
                const x = ((time * 20 + i * 100) % (canvas.width + 50)) - 25;
                const baseY = height / 2;
                const y = baseY + Math.sin(time * 0.05 + i) * 20;
                const size = 2 + Math.sin(time * 0.1 + i * 0.5) * 1;
                const opacity = 0.3 + Math.sin(time * 0.08 + i) * 0.2;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                if (color.startsWith('#')) {
                    const r = parseInt(color.slice(1, 3), 16);
                    const g = parseInt(color.slice(3, 5), 16);
                    const b = parseInt(color.slice(5, 7), 16);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                }
                ctx.fill();
            }

            time++;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [color, height]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: `${height}px`,
                pointerEvents: 'none',
                opacity: 0.6,
            }}
        />
    );
}
