import styles from "./Footer.module.css";

const Footer = () => {
    const gitHub = "https://github.com/s0d4z3r0"
    const linkedIn = "https://www.linkedin.com/in/andre-falcao-s0/"
    const mailTo = "mailto:dev.szero.pro@gmail.com"
    const instaGram = "https://www.instagram.com/dev.szero/"
    const whatsApp = "https://api.whatsapp.com/send?phone=5561981840029&text=Olá%20André!%20Acabei%20de%20ver%20seu%20portifólio%20e%20projetos%20pessoais%20e%20gostei%20do%20que%20vi"


  return (
    <section className={styles.footer}>
      <div className={styles.icons}>
        <ul>
            <li>
                <a href={gitHub} target="_blank" rel="noreferrer">
                <i className={`bi bi-github`}></i>
                </a>
            </li>
            <li>
                <a href={linkedIn} target="_blank" rel="noreferrer">
                <i className={`bi bi-linkedin`}></i>
                </a>
            </li>
            <li>
                <a href={mailTo} target="_blank" rel="noreferrer">
                <i className={`bi bi-envelope-fill`}></i>
                </a>
            </li>
            <li>
                <a href={instaGram} target="_blank" rel="noreferrer">
                <i className={`bi bi-instagram`}></i>
                </a>
            </li>
            <li>
                <a href={whatsApp} target="_blank" rel="noreferrer">
                <i className={`bi bi-whatsapp`}></i>
                </a>
            </li>
        </ul>
      </div>
      <div className={styles.createdBy}>
        <p>
          Portfólio idealizado e criado por: {''}
          <span>
            &copy;
            <a href={gitHub} target="_blank" rel="noreferrer">André Falcão</a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
