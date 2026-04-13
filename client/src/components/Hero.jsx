import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { PERSONAL } from '../data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-mono mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          {PERSONAL.available ? 'Available for work' : 'Currently unavailable'}
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.1)} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 dark:text-white leading-[1.05] mb-6">
          {PERSONAL.name.split(' ')[0]}{' '}
          <span className="gradient-text">{PERSONAL.name.split(' ')[1]}</span>
        </motion.h1>

        {/* Role */}
        <motion.p {...fadeUp(0.2)} className="text-xl md:text-2xl font-display font-medium text-gray-500 dark:text-gray-400 mb-4">
          {PERSONAL.role}
        </motion.p>

        {/* Tagline */}
        <motion.p {...fadeUp(0.3)} className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
          {PERSONAL.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button onClick={scrollToProjects} className="btn-primary text-sm px-7 py-3.5">
            View My Work
          </button>
          <button onClick={scrollToContact} className="btn-outline text-sm px-7 py-3.5">
            Get In Touch
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div {...fadeUp(0.5)} className="flex items-center justify-center gap-4">
          {[
            { icon: FiGithub, href: PERSONAL.github, label: 'GitHub' },
            { icon: FiLinkedin, href: PERSONAL.linkedin, label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary/30 dark:hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <HiArrowDown className="text-gray-400 dark:text-gray-600" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
