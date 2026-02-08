'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';

const bars = [1, 2, 3, 4, 5];

export function MusicToggleButton() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const [play, { pause, sound }] = useSound('/audio/nanana.mp3', {
        loop: true,
        volume: 0.5,
        onload: () => setIsLoaded(true),
        onplay: () => setIsPlaying(true),
        onend: () => setIsPlaying(false),
        onpause: () => setIsPlaying(false),
        onstop: () => setIsPlaying(false),
    });

    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    };

    return (
        <motion.button
            onClick={togglePlay}
            className="music-toggle-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
            <div className="music-bars">
                {bars.map((bar) => (
                    <motion.span
                        key={bar}
                        className="music-bar"
                        animate={isPlaying ? {
                            height: ['40%', '100%', '60%', '90%', '40%'],
                        } : {
                            height: '40%',
                        }}
                        transition={isPlaying ? {
                            duration: 0.8 + bar * 0.1,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        } : {
                            duration: 0.3,
                        }}
                    />
                ))}
            </div>
        </motion.button>
    );
}

export default MusicToggleButton;
