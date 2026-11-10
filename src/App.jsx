import { Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const measureHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    measureHeight();
    window.addEventListener('resize', measureHeight);
  }, []);


  return (
    <div>
      <div ref={headerRef}>
        <Header />
      </div>
      <main>
      <Routes>
        <Route path="/" element={<Home headerHeight={headerHeight} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App