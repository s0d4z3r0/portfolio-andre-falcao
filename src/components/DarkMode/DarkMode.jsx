import { useState } from "react";
import styles from "./DarkMode.module.css";

const DarkMode = ({theme, setTheme, setDarkOrLightMode}) => {
    
    const [darkOrLight, setDarkOrLight] = useState('dark')
    const toggleTheme = () => {
      setTheme(prevTheme => !prevTheme)
      setDarkOrLight(theme ? 'light' : 'dark')
      setDarkOrLightMode(darkOrLight)
    }
    
  return (
    <div className={styles.switchButton}>
      <input type="checkbox" id="switch-darkMode" className={styles.switch} onChange={toggleTheme}/>
      <label htmlFor="switch-darkMode"></label>
    </div>
  );
};

export default DarkMode;
