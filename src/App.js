import Hero from './components/Hero/Hero';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

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
        <h1>Fourth Page</h1>
      </section>
      <section className="contact" id="contact">
        <h1>Fifth Page</h1>
      </section>
    </div>
  );
}

export default App;
