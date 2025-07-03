import React from 'react';
import Vid_back from '/videos/galaxy.mp4';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blogs/Blogs';

const App = () => {
  return (
    <div className="container">
       <video className="vid-back" autoPlay loop muted playsInline src={Vid_back} type="video/mp4"></video>
       <Navbar />
       <Hero />
       <About />
       <Projects />
       <Skills />
       <Blogs />
       <Contact />
    </div>
  );
}

export default App;
