import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950"
        >
          {/* SVG KM draw effect */}
          <svg
            viewBox="0 0 120 60"
            width="180"
            height="90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* K */}
            <motion.path
              d="M10 8 L10 52 M10 30 L32 8 M10 30 L32 52"
              stroke="#6366f1"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.2 }}
            />
            {/* M */}
            <motion.path
              d="M50 52 L50 8 L70 35 L90 8 L90 52"
              stroke="#a78bfa"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.7 }}
            />
            {/* Underline glow */}
            <motion.line
              x1="8"
              y1="58"
              x2="92"
              y2="58"
              stroke="url(#glowGrad)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            />
            <defs>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </svg>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="mt-6 text-xs font-mono tracking-[0.3em] text-gray-500 uppercase"
          >
            AI · Robotics · Dev
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-violet-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
