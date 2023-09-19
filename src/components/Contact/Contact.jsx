import styles from "./Contact.module.css";

const Contact = () => {
  const mailTo = "mailto:dev.szero.pro@gmail.com";
  const celphone =
    "tel:+55061981840029";

    const handleSendEmail = (e) => {
        e.preventDefault()
    }

  return (
    <div className={styles.contact}>

      <div className={styles.shape1}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.triangle3}></div>
      </div>

      <h2>Contato</h2>

      <p>Que tal me mandar uma mensagem?</p>

      <div className={styles.content}>
          <form onSubmit={handleSendEmail}>
            <label>
              <span>Nome:</span>
              <input type="text" placeholder="Digite seu nome..."/>
            </label>
            <label>
              <span>Email:</span>
              <input type="email" placeholder="Digite seu melhor e-mail..."/>
            </label>
            <label>
              <span>Mensagem:</span>
              <textarea rows={10} type="text" placeholder="Digite aqui sua mensagem..."/>
            </label>
            <button type="submit">Enviar</button>
          </form>


          <div className={styles.celEmail}>
            <ul>
              <li>
                <a href={mailTo}>
                  <i className={`bi bi-envelope-fill`}> - dev.szero.pro@gmail.com</i>
                </a>
              </li>
              <li>
                <a href={celphone}>
                  <i className={`bi bi-telephone`}> - (61)98184-0029</i>
                </a>
              </li>
            </ul>
          </div>
      </div>

      <div className={styles.shape2}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.triangle3}></div>
      </div>
    </div>
  );
};

export default Contact;
