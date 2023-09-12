import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menuLogo}>
        <i className="bi bi-list"></i>
        <button>
          <h4>SZero</h4>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
