'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    {
        name: 'GitHub',
        icon: Github,
        href: 'https://github.com/ritoban23',
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        href: 'https://linkedin.com/in/ritoban',
    },
    {
        name: 'Email',
        icon: Mail,
        href: 'mailto:ritoban@example.com',
    },
];

export function SocialButtons() {
    return (
        <div className="social-buttons">
            {socialLinks.map((social, index) => (
                <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="social-btn"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.name}
                >
                    <social.icon size={18} />
                </motion.a>
            ))}
        </div>
    );
}

export default SocialButtons;
