import Styles from './ProjectsContent.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { RiCodeSSlashFill, RiGitBranchFill, RiComputerLine } from "react-icons/ri";
import particles from '../assets/particles.png';
import rapproducts from '../assets/rapproducts.png';
import todolist from '../assets/todolist.png';
import wheater from '../assets/wheater.png';
import clock from '../assets/clock.png';

export default function ProjectsContent() {
  return (
    <>
    
      <header className={Styles.header}>
            <h2>Alguns Projetos Meus</h2>
      </header>
      <section className={Styles.content}>
        <div className={Styles.particles}>
            <img src={particles} alt="" />
        </div>
        <div className={Styles.projects}>
          
        <div className={Styles.projectsContainer}>
          <div className={Styles.project}>
              <img src={wheater} alt="" />
              <h3>Wheater</h3>
              <span>
                Um simples app para verificar a temperatura em alguma cidade do mundo, é integrado com uma api aberta bem famosa, foi programado com html, css e javascript puro, sem nenhum uso de framework, pode ser utilizado em qualquer dispositivo.
              </span>
              <div className={Styles.projectButtons}>
                <a href="https://github.com/Vacf04/weatherappjs" target='_blank'><button><RiGitBranchFill />GitHub</button></a>
                <a href="https://weatherappbyvacf.netlify.app/" target='_blank'><button><RiComputerLine />Demo</button></a>
              </div>
            </div>
            <div className={Styles.project}>
              <img src={clock} alt="" />
              <h3>StopWatch and Pomodoro</h3>
              <span>
                Um simples app de cronômetro pomodoro, programado em html, css e javascript puro, sem utilização de framework, possui uma navbar responsiva onde é possível trocar entre o pomodoro ou o cronômetro, pode ser utilizado em qualquer dispositivo.
              </span>
              <div className={Styles.projectButtons}>
                <a href="https://github.com/Vacf04/stopwatch-and-pomodoro" target='_blank'><button><RiGitBranchFill />GitHub</button></a>
                <a href="https://stopwatch-and-pomodoro-by-vacf.netlify.app/" target='_blank'><button><RiComputerLine />Demo</button></a>
              </div>
            </div>
            <div className={Styles.project}>
              <img src={rapproducts} alt="" /> 
              <h3>Rap Products</h3>
              <span>
              Rap Products é um mini projeto de um e-commerce, onde você pode comprar albuns de rap, o projeto é apenas a parte do front-end, nenhuma implementação com back, progamado em react, pode ser utilizado em qualquer dispositivo.
              </span>
              <div className={Styles.projectButtons}>
                <a href="https://github.com/Vacf04/rap-products" target='_blank'><button><RiGitBranchFill />GitHub</button></a>
                <a href="https://rap-products-vacf.vercel.app/" target='_blank'><button><RiComputerLine />Demo</button></a>
            </div>
            
            </div>
            <div className={Styles.project}>
              <img src={todolist} alt="" /> 
              <h3>To Do List</h3>
              <span>
                Como o proprio nome já diz, esse projeto é uma lista de tarefas, programada em react, com um visual simples porém muito agradável, podendo ser usado em qualquer dispositivo.
              </span>
              <div className={Styles.projectButtons}>
                <a href="https://github.com/Vacf04/todolist" target='_blank'><button><RiGitBranchFill />GitHub</button></a>
                <a href="https://todolist-vacf.vercel.app/" target='_blank'><button><RiComputerLine />Demo</button></a>
            </div>
            
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}