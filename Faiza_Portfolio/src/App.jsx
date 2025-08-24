
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Me } from "./components/Me/Me";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Me />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
