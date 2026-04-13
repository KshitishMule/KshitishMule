import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '../data/portfolio';

<<<<<<< HEAD
// Map all skills into one flat list with category color
const CATEGORY_COLORS = {
  'Programming & Development': { bg: '#6366f1', light: '#eef2ff' },
  'AI & Machine Learning': { bg: '#8b5cf6', light: '#f5f3ff' },
  'Robotics & Automation': { bg: '#06b6d4', light: '#ecfeff' },
};

const allSkills = SKILLS.flatMap((group) =>
  group.items.map((item) => ({ name: item, category: group.category }))
);

// Hexagon SVG cell
function Hex({ skill, index, inView }) {
  const color = CATEGORY_COLORS[skill.category]?.bg ?? '#6366f1';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center justify-center"
      style={{ width: 110, height: 110 }}
    >
      <div className="relative group" style={{ width: 100, height: 110 }}>
        {/* Hexagon shape via clip-path */}
        <div
          className="absolute inset-0 transition-all duration-300 group-hover:scale-110"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: `linear-gradient(135deg, ${color}22, ${color}44)`,
            border: `1.5px solid ${color}55`,
          }}
        />
        {/* Hover fill */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: `linear-gradient(135deg, ${color}55, ${color}88)`,
          }}
        />
        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center px-2">
          <span
            className="text-center text-[11px] font-mono font-semibold leading-tight transition-colors duration-200"
            style={{ color, textShadow: '0 0 20px currentColor' }}
          >
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

=======
>>>>>>> cc078ae1acb086c3510d671aa4e14772dafc9804
export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
<<<<<<< HEAD
    <section id="skills" ref={ref} className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
=======
    <section id="skills" ref={ref} className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
>>>>>>> cc078ae1acb086c3510d671aa4e14772dafc9804
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">Skills</p>
          <h2 className="section-title">Tech Stack</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-md mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

<<<<<<< HEAD
        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {SKILLS.map((group) => {
            const color = CATEGORY_COLORS[group.category]?.bg ?? '#6366f1';
            return (
              <div key={group.category} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-3 h-3 rounded-sm" style={{ background: color }} />
                {group.category}
              </div>
            );
          })}
        </motion.div>

        {/* Hex grid — offset rows */}
        <div className="flex flex-wrap justify-center" style={{ gap: '6px 2px' }}>
          {allSkills.map((skill, i) => (
            <Hex key={skill.name} skill={skill} index={i} inView={inView} />
=======
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="card"
            >
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.05, duration: 0.3 }}
                    className="tag hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
>>>>>>> cc078ae1acb086c3510d671aa4e14772dafc9804
          ))}
        </div>
      </div>
    </section>
  );
}
