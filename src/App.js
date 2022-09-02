import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  const scrollTo = () => {

    const element = document.getElementById("contact");

    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  
  return (
    <div className="bg-gray-100 min-h-screen divide-y divide-gray-300">
      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
