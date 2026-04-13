import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiBookOpen } from 'react-icons/fi';
import { PUBLICATIONS } from '../data/portfolio';

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="publications" ref={ref} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">Research</p>
          <h2 className="section-title">Publications</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-md mx-auto">
            Peer-reviewed research and academic contributions.
          </p>
        </motion.div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative card p-0 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 pl-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="font-display font-semibold text-gray-900 dark:text-white text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                      {pub.title}
                    </h3>

                    {/* Venue + date */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-primary">
                        <FiBookOpen size={12} />
                        {pub.venue}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">·</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">{pub.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {pub.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="tag text-[11px]">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-primary hover:border-primary/40 transition-all duration-200"
                      aria-label="Read paper"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20 whitespace-nowrap">
                      Awaiting Publication
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
