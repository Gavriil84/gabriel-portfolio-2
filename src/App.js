import Hero from './components/Hero/Hero';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="container">
      <NavBar />
      <section className="hero">
        <Hero />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="project" id="project">
        <Projects />
      </section>
      <section className="experience" id="experience">
        <Experience />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
