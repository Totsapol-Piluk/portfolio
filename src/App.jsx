import "./App.css";
import Navbar from "./page/Navbar";
import HeroPage from "./page/hero";
import { AboutMe } from "./page/about";
import { Myproject } from "./page/project";
import { Contact } from "./page/contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <AboutMe />
      <Myproject />
      <Contact />
    </>
  );
}

export default App;
