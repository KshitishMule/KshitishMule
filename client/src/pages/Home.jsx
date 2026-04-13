<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> cc078ae1acb086c3510d671aa4e14772dafc9804
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
<<<<<<< HEAD
import Certifications from '../components/Certifications';
import Publications from '../components/Publications';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
=======
import Certifications from '../components/Certifications'; // ✅ correct
import ContactForm from '../components/ContactForm';
import { PERSONAL } from '../data/portfolio'; // ✅ only PERSONAL here
export default function Home() {
  return (
    <>
      <Helmet>
        <title>{PERSONAL.name} — {PERSONAL.role}</title>
        <meta name="description" content={`${PERSONAL.name} is a ${PERSONAL.role} specializing in React, Node.js, and cloud architecture. ${PERSONAL.tagline}`} />
        <meta property="og:title" content={`${PERSONAL.name} — ${PERSONAL.role}`} />
        <meta property="og:description" content={PERSONAL.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${PERSONAL.name} — ${PERSONAL.role}`} />
        <meta name="twitter:description" content={PERSONAL.tagline} />
      </Helmet>
>>>>>>> cc078ae1acb086c3510d671aa4e14772dafc9804
      <Hero />
      <About />
      <Skills />
      <Projects />
<<<<<<< HEAD
      <Publications />
=======
>>>>>>> cc078ae1acb086c3510d671aa4e14772dafc9804
      <Certifications />
      <ContactForm />
    </>
  );
}
