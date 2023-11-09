import styles from "./CardsProjects.module.css";
import { useState } from "react";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/js.png";
import bsIcon from "../../assets/bs.png";
import reactIcon from "../../assets/react.png";
import sass from "../../assets/sass.png"

const CardsProjects = ({
  project
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [colorThumb, setColorThumb] = useState(false);

  const handleShowDescription = () => setShowDescription(!showDescription);

  const handleCard = () => {
    setColorThumb(!colorThumb);
  };

  return (
    <div
      className={`${styles.card} `}
      onMouseEnter={handleCard}
      onMouseLeave={handleCard}
      onMouseDown={colorThumb ? undefined : handleCard}
      onMouseUp={colorThumb ? undefined : handleCard}
    >
      <div className={styles.title}>
        <h3>{project.name}</h3>
      </div>
      <div className={styles.icons}>
        {project.html ? (
          <i>
            <img src={htmlIcon} alt="html" title="HTML 5" />
          </i>
        ) : (
          ""
        )}
        {project.css ? (
          <i>
            <img src={cssIcon} alt="css" title="CSS 3" />
          </i>
        ) : (
          ""
        )}
        {project.js ? (
          <i>
            <img src={jsIcon} alt="js" title="JavaScript ES6" />
          </i>
        ) : (
          ""
        )}
        {project.bs ? (
          <i>
            <img src={bsIcon} alt="bs" title="Bootstrap v5.3" />
          </i>
        ) : (
          ""
        )}
        {project.react ? (
          <i>
            <img src={reactIcon} alt="react" title="React" />
          </i>
        ) : (
          ""
        )}
        {project.sass ? (
          <i>
            <img src={sass} alt="sass" title="Sass" />
          </i>
        ) : (
          ""
        )}
      </div>

      <div className={styles.image}>
        <a
          href={`${project.projectView}`}
          target="_blank"
          rel="noreferrer"
          className={styles.thumb}
        >
          <img
            src={project.thumb}
            alt="thumb projeto 1"
            className={`${colorThumb ? styles.colored : styles.pb}`}
          />
        </a>
        <div className={styles.view}>
          <a href={`${project.projectGit}`} target="_blank" rel="noreferrer">
            <i className={`bi bi-github ${styles.github}`}>
              <span className={styles.tooltip}>Repositório GitHub</span>
            </i>
          </a>
          <a href={`${project.projectView}`} target="_blank" rel="noreferrer">
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
        <p>{project.description}</p>
        <span className={styles.more} onClick={handleShowDescription}>
          {showDescription ? "Ver menos" : "Ver mais"}
        </span>
      </div>
    </div>
  );
};

export default CardsProjects;
