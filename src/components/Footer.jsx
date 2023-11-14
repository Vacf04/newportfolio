import Styles from './Footer.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCodeSSlashFill, RiGithubLine, RiLinkedinLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";

export default function Footer() {

  return (
    <>
      <footer>
        <section  className={Styles.footerContent}>
        <h3>by Víttor Franceschi</h3>
        <h3>Copyright © 2023</h3>
        <ul className={Styles.footerContact}>
          <li><a href="https://github.com/Vacf04/" target="_blank"><RiGithubLine /></a></li>
          <li><a href="https://www.linkedin.com/in/vittor-franceschi/" target="_blank"><RiLinkedinLine /></a></li>
          <li><a href="https://web.whatsapp.com/send?phone=5522996070911" target="_blank"><RiWhatsappLine /></a></li>
          <li><a href="mailto:vittorfranceschi04@gmail.com" target="_blank"><RiMailLine /></a></li>
        </ul>
        </section>
      </footer>
    </>
  );

  }