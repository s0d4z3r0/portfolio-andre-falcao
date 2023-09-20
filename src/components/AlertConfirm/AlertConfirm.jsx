import styles from "./AlertConfirm.module.css";

const AlertConfirm = ({confirmSendEmail}) => {
  return (
    <div className={styles.alertConfirm}>
      <div className={styles.alertConfirmBG}>
        <div className={`${styles.alertConfirmContent} ${confirmSendEmail ? styles.showAlert : styles.hideAlert}`}>
          <h4>Mensagem enviada com sucesso!</h4>
          <p>Muito obrigado pelo seu contato! Retornarei o mais breve possível!</p>
        </div>
      </div>
    </div>
  );
};

export default AlertConfirm;
