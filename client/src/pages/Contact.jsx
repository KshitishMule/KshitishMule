import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import { PERSONAL } from '../data/portfolio';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — {PERSONAL.name}</title>
        <meta name="description" content={`Get in touch with ${PERSONAL.name} for project inquiries or collaboration.`} />
      </Helmet>
      <div className="pt-16">
        <ContactForm />
      </div>
    </>
  );
}
