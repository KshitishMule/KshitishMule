import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiGithub, FiExternalLink, FiArrowLeft, FiCheck } from 'react-icons/fi';
import { PROJECTS } from '../data/portfolio';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary">← Back Home</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — Project</title>
        <meta name="description" content={project.shortDesc} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-10"
          >
            <FiArrowLeft size={16} /> Back to Projects
          </motion.button>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden mb-10 aspect-video"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Main */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2"
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">{project.fullDesc}</p>

              <h2 className="font-display font-semibold text-gray-900 dark:text-white mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiCheck className="text-primary mt-0.5 shrink-0" size={16} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Links */}
              <div className="card space-y-3">
                <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm">Links</h3>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
                    <FiGithub size={15} /> View Source
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
                    <FiExternalLink size={15} /> Live Demo
                  </a>
                )}
                {!project.github && !project.live && (
                  <p className="text-sm text-gray-400">Private repository</p>
                )}
              </div>

              {/* Tech */}
              <div className="card">
                <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>

              {/* Category */}
              <div className="card">
                <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-2">Category</h3>
                <span className="tag capitalize">{project.category}</span>
              </div>
            </motion.div>
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800"
          >
            <h2 className="font-display font-semibold text-gray-900 dark:text-white mb-6">Other Projects</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.filter((p) => p.id !== id).slice(0, 2).map((p) => (
                <Link key={p.id} to={`/project/${p.id}`} className="card flex gap-4 items-start hover:border-primary/30 group">
                  <img src={p.image} alt={p.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-sm text-gray-900 dark:text-white group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
