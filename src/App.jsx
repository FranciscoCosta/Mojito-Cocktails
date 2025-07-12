import React from "react";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/cocktails.jsx";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Art from "./components/art.jsx";
import Contact from "./components/contact.jsx";
import Menu from "./components/menu.jsx";
import Footer from "./components/footer.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
