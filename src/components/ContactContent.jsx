import Styles from './ContactContent.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiGithubLine, RiLinkedinLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";
import particles from '../assets/particles.png';

export default function ContactContent() {

  return (
    <>
      <section className={Styles.content}>
      <div className={Styles.particles}>
          <img src={particles} alt="" />
        </div>
        <div className={Styles.textContainer}>
          <h2>Contate-me</h2>
          <ul className={Styles.contactContainer}>
            <li><a href="https://github.com/Vacf04/" target="_blank"><RiGithubLine /></a></li>
            <li><a href="https://www.linkedin.com/in/vittor-franceschi/" target="_blank"><RiLinkedinLine /></a></li>
            <li><a href="https://web.whatsapp.com/send?phone=5522996070911" target="_blank"><RiWhatsappLine /></a></li>
            <li><a href="mailto:vittorfranceschi04@gmail.com" target="_blank"><RiMailLine /></a></li>
          </ul>
        </div>
        </section>
    </>
  );
}