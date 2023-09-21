import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import DarkMode from "./components/DarkMode/DarkMode";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import AlertConfirm from "./components/AlertConfirm/AlertConfirm";
import Menu from "./components/Menu/Menu";

function App() {
  // Dark and Light Mode
  const [theme, setTheme] = useState(true);
  const [darkOrLightMode, setDarkOrLightMode] = useState("light");
  document.body.setAttribute("className", darkOrLightMode);

  // Open menu
  const [showMenu, setShowMenu] = useState(false);

  // Alert
  const [confirmSendEmail, setConfirmSendEmail] = useState(false);

  useEffect(() => {
    if (confirmSendEmail === true) {
      setTimeout(() => {
        setConfirmSendEmail(false);
      }, 5000);
    }
  });

  // Smooth Scroll
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToRef = (section) => {
    if (section === "home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects") {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Click out menu or out navbar to close
  const menuRef = useRef();

  useEffect(() => {
    const clickOut = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", clickOut);

    return () => {
      document.removeEventListener("mousedown", clickOut);
    };
  }, []);

  // Button to top
  const [scrollPositionY, setScrollPositionY] = useState(0);

  const getPagePositionY = () => {
    setScrollPositionY(window.scrollY);
  };

  window.addEventListener("scroll", getPagePositionY);

  return (
    <div className={styles.app}>
      <div
        className={`${styles.alert} ${
          confirmSendEmail ? styles.showAlert : styles.hideAlert
        }`}
      >
        <AlertConfirm confirmSendEmail={confirmSendEmail} />
      </div>

      <div className={styles.navbar} ref={menuRef}>
        <Navbar
          setShowMenu={setShowMenu}
          handleScrollToRef={handleScrollToRef}
        />
        <DarkMode
          theme={theme}
          setTheme={setTheme}
          setDarkOrLightMode={setDarkOrLightMode}
        />
      </div>
      <div className={styles.menu} ref={menuRef}>
        <Menu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          handleScrollToRef={handleScrollToRef}
        />
      </div>

      <div className={styles.content}>
        <div ref={homeRef}>
          <Home darkOrLightMode={darkOrLightMode} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        {scrollPositionY >= 455 ? (
          <div className={`${styles.toTop} ${styles.showToTopButton}`}>
            <button onClick={() => handleScrollToRef("home")}>
              <i className="bi bi-arrow-up-circle-fill"></i>
            </button>
          </div>
        ) : (
          ""
        )}

        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact setConfirmSendEmail={setConfirmSendEmail} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
