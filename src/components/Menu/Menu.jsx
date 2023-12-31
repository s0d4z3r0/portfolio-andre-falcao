import styles from './Menu.module.css'

const Menu = ({showMenu, setShowMenu, handleScrollToRef}) => {

  const handleSelectSection = (section) => {
    // Close Menu
    setShowMenu(false)

    // Sett section to scroll with useRef
    handleScrollToRef(section)
  }


  return (
    <div className={`${styles.menu} ${showMenu ? styles.showMenu : styles.hideMenu}`}>
        <ul>
            <li onClick={() => handleSelectSection('home')}>Home</li>
            <li onClick={() => handleSelectSection('about')}>Sobre</li>
            <li onClick={() => handleSelectSection('projects')}>Projetos</li>
            <li onClick={() => handleSelectSection('contact')}>Contatos</li>
        </ul>
    </div>
  )
}

export default Menu
