import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Training />
          <Education />
          <Hobbies />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;