import styles from "./Projects.module.css";

// Component
import CardsProjects from "../CardsProjects/CardsProjects";

// Img
import thumbTodo from "../../assets/thumb-todo.jpg";
import thumbTotem from "../../assets/thumb-totem.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projects = [
    {
      name: "Lista de Tarefas - To-Do (React)",
      description:
        "Este projeto foi feito com React + Vite e BootStrap para compor seu estilo e responsividade. Foi feito com base nos conhecimentos aprendidos de React e JS como useState e useEffect, componentização e props, array de objetos, spread operator. Além da responsividade padrão do BootStrap, ainda foi feito alguns ajustes para telas menores com CSS Global e função com evento 'resize' para alterar placeholders de forma dinâmica.",
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
        "Este projeto foi realizado com HTML, CSS e JS (JSX - React + Vite), sendo idealizado um projeto de totem para fazer pedidos em estabelecimentos físicos. Conta com uma tela inicial (HOME), seguindo para uma tela de fazer o pedido (MENU). Foi utilizado vários conhecimentos aprendidos do framework React como componentização, router-dom, hooks, css modules, redux, criação e reaproveitamento de states e modais. Foi trabalhado a responsividade seguindo o princípio mobile first, com media querys mínima de 320px.",
      html: true,
      css: true,
      js: true,
      bs: false,
      react: true,
      thumb: thumbTotem,
      projectGit: "https://github.com/s0d4z3r0/totem-react",
      projectView: "https://s0d4z3r0.github.io/totem-react/",
    },
  ];

  return (
    <section className={styles.projects}>
      <h2>Projetos</h2>
      <Swiper
      cssMode={true}
      slidesPerView={1}
        keyboard={{enabled: true}}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Keyboard]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <br />
          <CardsProjects project={projects[0]} />
          <br/>
          <br/>
        </SwiperSlide>
        <SwiperSlide>
          <br />
          <CardsProjects project={projects[1]} />
          <br/>
          <br/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Projects;
