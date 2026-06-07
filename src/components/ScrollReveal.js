'use client';

import { motion } from 'framer-motion';

/**
 * ScrollReveal Component
 * Wraps children with smooth scroll-based fade-up animation
 * Triggers every time element enters viewport
 *
 * @param {React.ReactNode} children - Content to animate
 * @param {number} duration - Animation duration in seconds (default: 0.7)
 * @param {number} delay - Animation delay in seconds (default: 0)
 * @param {string} className - Optional CSS class for styling
 */
export default function ScrollReveal({
  children,
  duration = 0.7,
  delay = 0,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      viewport={{
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
