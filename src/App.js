import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <div className="container">
      <section className="hero">
        <Hero />
      </section>
      <section className="about">
        <h1>Second Page</h1>
      </section>
      <section className="project">
        <h1>Third Page</h1>
      </section>
      <section className="experience">
        <h1>Fourth Page</h1>
      </section>
      <section className="contact">
        <h1>Fifth Page</h1>
      </section>
    </div>
  );
}

export default App;
