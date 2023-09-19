import { useState } from "react";
import styles from "./App.module.css";
import DarkMode from "./components/DarkMode/DarkMode";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  const [theme, setTheme] = useState(true)
  const [darkOrLightMode, setDarkOrLightMode] = useState('light')
  document.body.setAttribute('className', darkOrLightMode)

  return (
    <>
      <div className={styles.navbar}>
        <Navbar />
        <DarkMode theme={theme} setTheme={setTheme} setDarkOrLightMode={setDarkOrLightMode}/>
      </div>
      <div className={styles.content}>
        <Home darkOrLightMode={darkOrLightMode}/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
