import { useState } from "react";
import styles from "./About.module.css";

const About = () => {
  // Definir idade
  const date = new Date();
  const birthday = new Date("1992-01-09");
  const difference = date - birthday;
  const age = Math.floor(difference / (365.25 * 24 * 60 * 60 * 1000));

  const [showWho, setShowWho] = useState(false)
  const [showProfessional, setShowProfessional] = useState(false)

  const handleShowCard = (show) => {
    if(show === 'who'){
      setShowWho(!showWho)
    }else{
      setShowProfessional(!showProfessional)
    }
  }

  return (
    <section className={styles.about}>
      <h2>Sobre</h2>
      <div className={styles.shape1}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.triangle3}></div>
      </div>
      <div className={`${styles.who} ${showWho ? styles.show : styles.hide}`}>
        <h2>Quem sou eu?</h2>
        <p>
          Olá, me chamo André Vinícius Rodrigues Falcão, tenho {age} anos e sou
          natural de Manaus-AM, mas quase um brasiliense, pois moro em
          Brasilia-DF desde 2007. <br></br>
          Casado e sem filhos meus hobbies são jogos
          eletronicos (FPS, MOBA e MMORPG), assistir filmes/séries/streammers (terror, suspense e
          drama), ouvir música (eclético, mas com bom gosto), conhecer lugares novos
          para comer (de comidas básicas à comidas diferentes), cozinhar (quem
          gosta de comer tem que saber cozinhar), treinar musculação
          (No Pain, No Gain), assistir futebol americano (GO Giants) e encontrar a felicidade
          em coisas simples da vida. <br></br>
          Já jogou CS, Lolzinho, Ragnarok ou WOW? bom demais, né não?! E
          filmes?! Dormiu bem depois de ter assistido Atividade Paranormal? Qual
          sua comida favorita? É difícil escolher só uma pra mim. Mas
          não dá só pra comer né?! Você ta cuidando da saúde?! praticando alguma 
          atividade física?! Se sua resposta é &#34;Sim!&#34;, é isso aí!!! Acompanha algum esporte? Futebol americano é muito bom, vai por mim!! <br></br>
          Enfim... A vida é bela, basta você encontrar a felicidade nas coisas simples da vida.
        </p>
        <span className={styles.more} onClick={() => handleShowCard('who')}>{showWho ? 'Ver menos' : 'Ver mais'}</span>
      </div>

      <div className={styles.phrase}>
        <h4>
        &#34;Mas felicidade é poder estar com quem você gosta em algum lugar.&#34; -
          CBJr
        </h4>
      </div>

      <div className={`${styles.professional} ${showProfessional ? styles.show : styles.hide}`}>
        <h2>E como profissional?</h2>
        <p>
          Formado em Gestão Pública pela universidade Cruzeiro do Sul, com MBA
          em Marketing e Comunicação decidi empreender, porém em um ramo que já
          tinha certo conhecimento, na área de alimentação. <br></br>
          Da área de
          alimentação resolvi então entrar de cabeça na área da programação, uma
          área que sempre tive interesse, mas sempre deixei de lado por achar
          que seria difícil aprender algo do zero. Na programação comecei a
          estudar por conta própria em 2022 HTML, CSS e JS através de vídeos
          gratuitos no YouTube. No final de 2022 fiz um curso de Desenvolvedor
          Front-End pelo SENAI no programa Inova DF Tech e no inicio de 2023 fiz
          o curso de Desenvolvedor Back-End pela mesma instituição. Migrando de
          área, resolvi alterar a rota que estava traçando na minha vida
          profissional. Após adquirir um certo conhecimento de Front-End com os
          cursos realizados, hoje continuo estudando por conta própria e me
          dedicando a realizar projetos para compor este portfólio e criar
          novas soluções para o dia a dia. <br></br>
          Este portfólio foi desenvolvido 100%
          utilizando técnicas e conhecimentos adquiridos como HTML, CSS, JS e
          JSX, React + Vite, componentização, hooks, entre outros. Como
          profissional, o que pode se esperar de mim é um colaborador que veste
          a camisa da organização e se compromete com metas. Pensamento
          analítico e visão de negócio também são características minhas. Uma pessoa com sede de aprender e
          ensinar. Pronto para encarar desafios, motivar e fortalecer o espírito
          de equipe na organização. Let&#39;s to code!
        </p>
        <span className={styles.more} onClick={() => handleShowCard('professional')}>{showProfessional ? 'Ver menos' : 'Ver mais'}</span>
      </div>
      <div className={styles.shape2}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.triangle3}></div>
      </div>
    </section>
  );
};

export default About;
