import React from 'react';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <CustomNavbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
