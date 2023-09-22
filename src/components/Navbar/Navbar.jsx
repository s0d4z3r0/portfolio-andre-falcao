import styles from "./Navbar.module.css";

const Navbar = ({handleScrollToRef}) => {

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuLogo}>
        <i className="bi bi-list"></i>
        <button onClick={() => handleScrollToRef('home')}>
          <h4>SZero</h4>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
