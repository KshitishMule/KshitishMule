import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const API_URL = import.meta.env.VITE_API_URL || '';

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.length < 2) e.name = 'Name must be at least 2 characters';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setServerMsg(data.message);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setServerMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMsg('Network error. Please check your connection and try again.');
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-sm placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/30 focus:border-primary ${
      errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
    }`;

  return (
    <section id="contact" ref={ref} className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">Contact</p>
          <h2 className="section-title mb-4">Let's Work Together</h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Have a project in mind or want to say hello? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card text-center py-16"
          >
            <FiCheckCircle className="text-green-400 mx-auto mb-4" size={48} />
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">Message Sent!</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">{serverMsg}</p>
            <button onClick={() => setStatus('idle')} className="btn-outline text-sm">Send Another</button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="card space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass('name')} />
                {errors.name && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><FiAlertCircle size={12} />{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass('email')} />
                {errors.email && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><FiAlertCircle size={12} />{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry, collaboration, etc." className={inputClass('subject')} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell me about your project or idea..." className={`${inputClass('message')} resize-none`} />
              {errors.message && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><FiAlertCircle size={12} />{errors.message}</p>}
              <p className="text-xs text-gray-400 mt-1 text-right">{form.message.length}/2000</p>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                <FiAlertCircle size={16} className="shrink-0" />
                {serverMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <><FiSend size={16} /> Send Message</>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
