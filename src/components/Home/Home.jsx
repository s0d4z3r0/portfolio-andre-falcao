import styles from "./Home.module.css";

const Home = ({ darkOrLightMode }) => {
  return (
    <section className={styles.home}>
      <div className={styles.layer}>
        <div
          className={darkOrLightMode === "light" ? styles.light : styles.dark}
        ></div>
      </div>

      <div className={styles.intro}>
        <h2>
          Hello, World! 
          {/* <span>&#127758;</span> */}
        </h2>
        <p>
          {/* &#128075;  */}
          Eu sou André Falcão</p>
        <p>| Front-End Developer |</p>
        <div className={styles.more}>
          <button>Mais sobre</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
