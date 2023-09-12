import { useState } from "react";
import styles from "./App.module.css";
import DarkMode from "./components/DarkMode/DarkMode";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

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
      <Home darkOrLightMode={darkOrLightMode}/>
    </>
  );
}

export default App;
