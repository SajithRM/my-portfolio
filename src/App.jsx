import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Hire Me Section */}
      <section id="hireme">
        <HireMe />
      </section>

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
