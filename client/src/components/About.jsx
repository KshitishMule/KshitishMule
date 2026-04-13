import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiLocationMarker, HiMail } from 'react-icons/hi';
import { PERSONAL } from '../data/portfolio';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { value: '3+', label: 'Projects Shipped' },
    { value: '4', label: 'Certifications' },
    { value: '3+', label: 'Tech Domains' },
    { value: '2', label: 'Publications' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">About Me</p>
            <h2 className="section-title mb-6">
              Building intelligent systems,{' '}
              <span className="gradient-text">one model at a time</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{PERSONAL.bio}</p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              When I'm not building AI systems, I explore robotics, contribute to open source, and work on computer vision experiments. I believe in writing clean, purposeful code and building things that don't just run — but think.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <HiLocationMarker className="text-primary shrink-0" size={16} />
                {PERSONAL.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <HiMail className="text-primary shrink-0" size={16} />
                {PERSONAL.email}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="card text-center"
              >
                <div className="text-4xl font-display font-bold gradient-text mb-2">{value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
              </motion.div>
            ))}

            {/* Terminal card */}
            <div className="col-span-2 card font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-2 text-xs text-gray-400">terminal</span>
              </div>
              <p className="text-green-400">$ whoami</p>
              <p className="text-gray-300 mt-1">→ ai_robotics_developer</p>
              <p className="text-green-400 mt-2">$ status</p>
              <p className="text-gray-300 mt-1">→ <span className="text-green-400">open_to_opportunities</span></p>
              <p className="text-green-400 mt-2">$ passion</p>
              <p className="text-gray-300 mt-1">→ building_intelligent_systems</p>
              <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse align-middle" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
