import styles from './App.module.css';
import { About } from './components_temporename/About/About';
import { Contact } from './components_temporename/Contact/Contact';
import { Experience } from './components_temporename/Experience/Experience';
import { Hero } from './components_temporename/Hero/Hero';
import { Navbar } from './components_temporename/Navbar/Navbar';
import { Projects } from './components_temporename/Projects/Projects';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
