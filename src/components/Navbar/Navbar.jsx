import styles from "./Navbar.module.css";

const Navbar = ({setShowMenu, handleScrollToRef}) => {
  const handleShowMenu = () => {
    setShowMenu(showMenu => !showMenu)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuLogo}>
        <i className="bi bi-list" onClick={handleShowMenu}></i>
        <button onClick={() => handleScrollToRef('home')}>
          <h4>SZero</h4>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
