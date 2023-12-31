import styles from "./Projects.module.css";

// Component
import CardsProjects from "../CardsProjects/CardsProjects";

// Img
import thumbDiet from "../../assets/thumb-diet.jpg";
import thumbTimer from "../../assets/thumb-timer.jpg";
import thumbTodo from "../../assets/thumb-todo.jpg";
import thumbTotem from "../../assets/thumb-totem.jpg";
import thumbCosts from "../../assets/thumb-costs.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = ({ widthScreen }) => {
  const projects = [
    {
      name: "Diet React - Kcal Calculator",
      description:
        "Diet React é uma inovadora calculadora que utiliza a fórmula de Harris-Benedict (1919) para estimar o gasto calórico, levando em consideração os objetivos individuais e o nível de atividade de cada usuário. Desenvolvido com React, o projeto incorpora conceitos avançados, como componentes modulares, hooks como useState e useEffect. Implementei também funções para validar os dados inseridos, garantindo precisão nos resultados. Além disso, adotei a abordagem mobile first para proporcionar uma experiência de usuário otimizada, assegurando a responsividade em diferentes dispositivos.",
      html: true,
      css: true,
      js: true,
      bs: false,
      react: true,
      thumb: thumbDiet,
      projectGit: "https://github.com/s0d4z3r0/diet-react",
      projectView: "https://s0d4z3r0.github.io/diet-react/",
    },
    {
      name: "SZero Timer - Pomodoro",
      description:
        "Este é um timer/Pomodoro que oferece opções de 5, 15 e 30 minutos. Dispõe de funcionalidades para iniciar, pausar e reiniciar. Ao atingir zero, exibe um modal alertando que o tempo se esgotou. Além disso, foi implementado um modo escuro (dark mode). O projeto faz uso de hooks, como o useState para armazenar valores e o useEffect para monitorar alterações de alguns estados. A estilização foi aprimorada com o uso de CSS modular e global, proporcionando uma apresentação visual mais atraente. A aplicação é responsiva, adaptando-se a telas pequenas, médias e grandes.",
      html: true,
      css: true,
      js: true,
      bs: false,
      react: true,
      thumb: thumbTimer,
      projectGit: "https://github.com/s0d4z3r0/timer-react",
      projectView: "https://s0d4z3r0.github.io/timer-react/",
    },
    {
      name: "Lista de Tarefas - To-Do",
      description:
        "Desenvolvi este projeto utilizando React + Vite e Bootstrap para garantir tanto sua funcionalidade dinâmica quanto seu design responsivo. A construção foi fundamentada nos princípios essenciais do React e JavaScript, como a aplicação de useState e useEffect, a utilização eficiente de componentização e props, manipulação de arrays de objetos e emprego do spread operator. Além de incorporar a responsividade padrão do Bootstrap, realizei ajustes personalizados para garantir uma experiência otimizada em telas menores. Para isso, empreguei CSS Global e implementei uma função com o evento 'resize' para modificar os placeholders de maneira dinâmica.",
      html: true,
      css: true,
      js: true,
      bs: true,
      react: true,
      thumb: thumbTodo,
      projectGit: "https://github.com/s0d4z3r0/todo_react_vite",
      projectView: "https://s0d4z3r0.github.io/todo_react_vite/",
    },
    {
      name: "Sistema de Totem - Hamburgueria",
      description:
        "Este projeto foi concebido e implementado com React + Vite utilizando HTML, CSS e JSX, com a proposta de ser um totem virtual para facilitar pedidos em estabelecimentos físicos. Ele apresenta uma tela inicial (HOME) e uma interface para realizar pedidos (MENU). Durante o desenvolvimento, apliquei diversos conceitos do framework React, como a prática de componentização, a utilização do router-dom, o emprego de hooks, CSS modules, a implementação do Redux e a criação e reutilização eficiente de estados e modais. Além disso, dediquei atenção especial à responsividade, seguindo a abordagem mobile first, com media queries configuradas para um mínimo de 320px.",
      html: true,
      css: true,
      js: true,
      bs: false,
      react: true,
      thumb: thumbTotem,
      projectGit: "https://github.com/s0d4z3r0/totem-react",
      projectView: "https://s0d4z3r0.github.io/totem-react/",
    },
    {
      name: "Gerenciador de Projetos - Costs",
      description:
        "O Costs é uma ferramenta para gerenciamento de projetos e serviços, oferecendo detalhes como o custo total do projeto e a alocação de recursos para cada serviço. Desenvolvido utilizando React + Vite, este aplicativo possui um sistema de backend simulado usando o json server local para realizar requisições, simulando uma API com Banco de Dados. O fluxo de operações CRUD para os 'projetos' é feito através dessas requisições, e o roteamento é implementado com o React Router. Para aprimorar a experiência do usuário, foi adicionado um setTimeOut que simula um 'loader' de requisição. Isso é particularmente útil, dado que, com o backend local, as requisições são praticamente instantâneas. Além disso, o projeto foi estilizado e tornou-se responsivo utilizando SASS, proporcionando um aproveitamento mais eficiente do código. Para iniciar o backend, basta executar o seguinte script: 'npm run backend'.",
      html: true,
      sass: true,
      js: true,
      bs: false,
      react: true,
      thumb: thumbCosts,
      projectGit: "https://github.com/s0d4z3r0/costs",
      projectView: "https://s0d4z3r0.github.io/costs/",
    },
  ];

  return (
    <section className={styles.projects}>
      <h2>Projetos</h2>
      {widthScreen >= 768 ? (
        widthScreen >= 1024 ? (
          widthScreen >= 1440 ? (
            <div className={styles.projectsCards}>
              <Swiper
                cssMode={true}
                slidesPerView={4}
                keyboard={{ enabled: true }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Keyboard]}
                className={styles.mySwiper}
              >
                {projects.map((projectCard) => (
                  <SwiperSlide key={projectCard.name}>
                    <br />
                    <CardsProjects project={projectCard} />
                    <br />
                    <br />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className={styles.projectsCards}>
              <Swiper
                cssMode={true}
                slidesPerView={3}
                keyboard={{ enabled: true }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Keyboard]}
                className={styles.mySwiper}
              >
                {projects.map((projectCard) => (
                  <SwiperSlide key={projectCard.name}>
                    <br />
                    <CardsProjects project={projectCard} />
                    <br />
                    <br />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )
        ) : (
          <div className={styles.projectsCards}>
            <Swiper
              cssMode={true}
              slidesPerView={2}
              keyboard={{ enabled: true }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Keyboard]}
              className={styles.mySwiper}
            >
              {projects.map((projectCard) => (
                <SwiperSlide key={projectCard.name}>
                  <br />
                  <CardsProjects project={projectCard} />
                  <br />
                  <br />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
      ) : (
        <Swiper
          cssMode={true}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Keyboard]}
          className={styles.mySwiper}
        >
          {projects.map((projectCard) => (
            <SwiperSlide key={projectCard.name}>
              <br />
              <CardsProjects project={projectCard} />
              <br />
              <br />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Projects;
