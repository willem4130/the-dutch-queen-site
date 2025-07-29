'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ value, duration = 2000, className = '' }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value and suffix
    const numericMatch = value.match(/^([+\-]?)(\d+(?:\.\d+)?)/);
    const suffix = value.replace(/^[+\-]?\d+(?:\.\d+)?/, '');
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const prefix = numericMatch[1] || '';
    const numericValue = parseFloat(numericMatch[2]);
    const isDecimal = numericMatch[2].includes('.');

    const startValue = 0;
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = numericValue * easeOut;
      
      if (progress >= 1) {
        setDisplayValue(`${prefix}${isDecimal ? numericValue.toFixed(1) : Math.round(numericValue)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${isDecimal ? currentValue.toFixed(1) : Math.round(currentValue)}${suffix}`);
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      {displayValue}
    </motion.span>
  );
}

// Specialized counter for percentage values
export function AnimatedPercentage({ value, duration = 2000, className = '' }: AnimatedCounterProps) {
  return <AnimatedCounter value={value} duration={duration} className={className} />;
}

// Specialized counter for time values
export function AnimatedTime({ value, duration = 2000, className = '' }: AnimatedCounterProps) {
  return <AnimatedCounter value={value} duration={duration} className={className} />;
}

// Pulsing effect for completed metrics
export function PulsingMetric({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.02, 1],
        opacity: [0.9, 1, 0.9]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}