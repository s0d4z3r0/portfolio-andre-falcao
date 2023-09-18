import styles from "./Projects.module.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import bs from "../../assets/bs.png";
import react from "../../assets/react.png";
import thumb from "../../assets/thumb.jpg";
import { useState } from "react";

const Projects = () => {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowDescription = () => setShowDescription(!showDescription);

  const TotemGit = "https://github.com/s0d4z3r0/totem-react";
  const TotemView = "https://s0d4z3r0.github.io/totem-react/";

  return (
    <section className={styles.projects}>
      <h2>Projetos</h2>
      <div className={styles.card}>
        <div className={styles.title}>
          <h3>Sistema de Totem - Hamburgueria</h3>
        </div>
        <div className={styles.icons}>
          <i>
            <img src={html} alt="html" title="HTML 5" />
          </i>
          <i>
            <img src={css} alt="css" title="CSS 3" />
          </i>
          <i>
            <img src={js} alt="js" title="JavaScript ES6" />
          </i>
          <i>
            <img src={bs} alt="bs" title="Bootstrap v5.3" />
          </i>
          <i>
            <img src={react} alt="react" title="React" />
          </i>
        </div>
        <div className={styles.image}>
          <img src={thumb} alt="thumb projeto 1" />
          <div className={styles.view}>
            <a href={TotemGit} target="_blank" rel="noreferrer">
              <i className={`bi bi-github ${styles.github}`}>
                <span className={styles.tooltip}>Repositório GitHub</span>
              </i>
            </a>
            <a href={TotemView} target="_blank" rel="noreferrer">
              <i className={`bi bi-eye ${styles.eye}`}>
                <span className={styles.tooltip}>Visualizar</span>
              </i>
            </a>
          </div>
        </div>
        <div
          className={`${styles.description} ${
            showDescription ? styles.show : styles.hide
          }`}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum
            cupiditate molestias? Dolorum, sunt! Possimus explicabo eius, alias
            reprehenderit debitis nam hic? Laboriosam maxime tempora quidem ea
            alias atque dolorum!
          </p>
          <span className={styles.more} onClick={handleShowDescription}>
            {showDescription ? "Ver menos" : "Ver mais"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
