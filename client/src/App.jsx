import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';

<<<<<<< HEAD
// ── New UI/UX components ──────────────────────────────────────
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import { ScrollProgressBar, BackToTop } from './components/ScrollUtils';

=======
>>>>>>> cc078ae1acb086c3510d671aa4e14772dafc9804
export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
<<<<<<< HEAD
    <>
      {/* Global UI layers */}
      <Preloader />
      <CustomCursor />
      <ScrollProgressBar />
      <BackToTop />

      <div className="min-h-screen flex flex-col">
        <Navbar dark={dark} setDark={setDark} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </>
=======
    <div className="min-h-screen flex flex-col">
      <Navbar dark={dark} setDark={setDark} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
>>>>>>> cc078ae1acb086c3510d671aa4e14772dafc9804
  );
}
