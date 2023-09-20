import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

import emailjs from "@emailjs/browser";

const Contact = ({ setConfirmSendEmail }) => {
  const mailTo = "mailto:dev.szero.pro@gmail.com";
  const celphone = "tel:+55061981840029";

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    const validarEmail = (email) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      return regex.test(email);
    };

    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!validarEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (message === "") {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };
  useEffect(() => {
    if (nameError === false && emailError === false && messageError === false) {
      const templatePrams = {
        from_name: name,
        email: email,
        message: message,
      };

      emailjs
        .send(
          "service_p2t6s2i",
          "template_clboytf",
          templatePrams,
          "1-j26-5SEoG3uyIft"
        )
        .then((res) => {
          console.log("Email enviado", res.status, res.text);
        }, (err) => {
          console.log('ERRO: ', err)
        });

      setConfirmSendEmail((prevConfirmSendEmail) => !prevConfirmSendEmail);
      setName("");
      setEmail("");
      setMessage("");
      setNameError("");
      setEmailError("");
      setMessageError("");
    }
  }, [nameError, emailError, messageError, setConfirmSendEmail, name, email, message]);

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
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome..."
              name="from_name"
            />
            <p className={nameError ? styles.errorShow : styles.errorHide}>
              *Digite um nome válido.
            </p>
          </label>
          <label>
            <span>Email:</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor e-mail..."
              name="email"
            />
            <p className={emailError ? styles.errorShow : styles.errorHide}>
              *Digite um e-mail válido.
            </p>
          </label>
          <label>
            <span>Mensagem:</span>
            <textarea
              rows={10}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite aqui sua mensagem..."
              name="message"
            />
            <p className={messageError ? styles.errorShow : styles.errorHide}>
              *Digite sua mensagem.
            </p>
          </label>
          <div className={styles.button}>
            <button type="submit">Enviar</button>
          </div>
        </form>

        <div className={styles.celEmail}>
          <ul>
            <li>
              <a href={mailTo}>
                <i className={`bi bi-envelope-fill`}>
                  {" "}
                  - dev.szero.pro@gmail.com
                </i>
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
