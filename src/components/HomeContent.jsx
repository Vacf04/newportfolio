import Styles from './HomeContent.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { RiCodeSSlashFill } from "react-icons/ri";
import particles from '../assets/particles.png';

export default function HomeContent() {

  return (
    <>
      <section className={Styles.content}>
      <div className={Styles.particles}>
          <img src={particles} alt="" />
        </div>
        <div className={Styles.textContainer}>
          <p>Olá, sou o Víttor!</p>
          <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString("Desenvolvedor Front-End")
            .start();
            }}
          />
          <Link to="/contato">
            <button className={Styles.contactButton}>Entre em Contato</button>
          </Link>
        </div>
        <div className={Styles.imgContainer}>
          <RiCodeSSlashFill className={Styles.code}></RiCodeSSlashFill>
        </div>
        </section>
    </>
  );
}
