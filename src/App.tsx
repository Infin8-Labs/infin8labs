import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });
    
    // Expose lenis globally so components can trigger smooth scrolls
    const lenisWindow = window as unknown as { __lenis?: typeof lenis };
    lenisWindow.__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Global click handler for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const id = anchor.getAttribute('href');
        if (id && id !== '#') {
          e.preventDefault();
          const el = document.querySelector(id);
          if (el) {
            const lenisWindow = window as unknown as { __lenis?: { scrollTo: (target: string, options?: object) => void } };
            if (lenisWindow.__lenis) {
              const distance = Math.abs(el.getBoundingClientRect().top);
              // Calculate duration based on distance for consistent speed (approx 800px per 1.5s)
              const duration = Math.max(1.5, Math.min(3.5, distance / 600));
              lenisWindow.__lenis.scrollTo(id, { offset: -80, duration });
            } else {
              const top = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
