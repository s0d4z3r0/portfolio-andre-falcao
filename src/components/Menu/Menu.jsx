import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div className={styles.menu}>
        <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contatos</li>
        </ul>
    </div>
  )
}

export default Menu