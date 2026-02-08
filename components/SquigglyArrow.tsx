'use client';

import { motion } from 'framer-motion';

interface SquigglyArrowProps {
    width?: number;
    height?: number;
    strokeWidth?: number;
    className?: string;
}

// Diagonal squiggly path from bottom-right going up-left, with BIGGER arrowhead
const squigglyPath = "M 90,90 Q 65,55 45,45 Q 25,35 10,10";
// Larger arrowhead at the end (top-left, pointing up-left towards the button)
const arrowHead = "M 10,10 L 28,18 M 10,10 L 18,28";

export function SquigglyArrow({
    width = 70,
    height = 70,
    strokeWidth = 3.5,
    className = '',
}: SquigglyArrowProps) {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 1.2, ease: [0.42, 0, 0.58, 1] as const },
                opacity: { duration: 0.3 },
            },
        },
    };

    return (
        <motion.svg
            width={width}
            height={height}
            viewBox="0 0 100 100"
            fill="none"
            className={`squiggly-arrow ${className}`}
            initial="hidden"
            animate="visible"
        >
            <motion.path
                d={squigglyPath}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                variants={pathVariants}
            />
            <motion.path
                d={arrowHead}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                variants={pathVariants}
            />
        </motion.svg>
    );
}

export default SquigglyArrow;
