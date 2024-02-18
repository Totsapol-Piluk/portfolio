import "./App.css";
import Navbar from "./page/Navbar";
import HeroPage from "./page/hero";
import { AboutMe } from "./page/about";
import { Myproject } from "./page/project";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <AboutMe />
      <Myproject />
    </>
  );
}

export default App;
