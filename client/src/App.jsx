import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import { ScrollProgressBar, BackToTop } from './components/ScrollUtils';

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
    <>
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
  );
}
