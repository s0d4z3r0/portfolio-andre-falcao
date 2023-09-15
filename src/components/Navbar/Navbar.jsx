import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuLogo}>
        <i className="bi bi-list"></i>
        <button>
          <h4>SZero</h4>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
