import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CERTIFICATIONS, PUBLICATIONS } from '../data/portfolio';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">Achievements</p>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="flex flex-col gap-6 mb-24">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="font-display font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                </div>
                <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                  {cert.date}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{cert.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => <span key={s} className="tag text-[11px]">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">Research</p>
          <h2 className="section-title">Publications</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {PUBLICATIONS.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="font-display font-semibold text-gray-900 dark:text-white">{pub.title}</h3>
                  <p className="text-primary text-sm font-medium">{pub.venue}</p>
                </div>
                <span className="text-xs font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                  {pub.date}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{pub.description}</p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-primary font-medium hover:underline mb-4"
                >
                  View Publication ↗
                </a>
              )}
              <div className="flex flex-wrap gap-1.5">
                {pub.tags.map((t) => <span key={t} className="tag text-[11px]">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}