import Hero from './components/Hero/Hero';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <section className="hero">
        <Hero />
      </section>
      <section className="about" id="about">
        <h1>Second Page</h1>
      </section>
      <section className="project" id="project">
        <h1>Third Page</h1>
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
