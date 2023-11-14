import Styles from './AboutContent.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import programmingPic from '../assets/programming.svg';
import particles from '../assets/particles.png';
import Typewriter from 'typewriter-effect';
import { RiCodeSSlashFill, RiCss3Line, RiHtml5Line, RiJavascriptLine, RiReactjsLine } from "react-icons/ri";

export default function AboutContent() {

  return (
    <>
      <section className={`${Styles.content} ${Styles.aboutContent}`}>
        <div className={Styles.particles}>
          <img src={particles} alt="" />
        </div>
        <div className={Styles.textContainer}>
          <h2>Sobre mim</h2>
          <p>Meu nome é Víttor Franceschi, sou um desenvolvedor front end, terminando minha formação em análise e desenvolvimento de sistemas</p>
          <p>Meu objetivo é sempre criar o melhor para seu produto, sempre tentando evoluir cada vez mais, para virar o melhor profissional possível.</p>
        </div>
        <div className={Styles.imgContainer}>
          <img src={programmingPic} alt="" />
        </div>
      </section>
      <section className={`${Styles.content} ${Styles.skillsContent}`}>
        <h2>Habilidades</h2>
        <div className={Styles.skillsContainer}>
          <div className={Styles.skill}><RiHtml5Line  /></div>
          <div className={Styles.skill}><RiCss3Line  /></div>
          <div className={Styles.skill}><RiJavascriptLine  /></div>
          <div className={Styles.skill}><RiReactjsLine  /></div>
        </div>
      </section>
    </>
  );
}