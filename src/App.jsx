import "./App.css";
import Navbar from "./page/Navbar";
import HeroPage from "./page/hero";
import { About } from "./page/about";
import { Myproject } from "./page/project";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <About />
      <Myproject />
    </>
  );
}

export default App;
