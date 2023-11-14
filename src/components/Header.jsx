import Styles from './Header.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [ active, setActive ] = useState(false);

  const handleMenuClick = () => {
    if(active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <>
     <header className={Styles.header}>
        <section className={Styles.menuContent}>
        <a href="/" className={Styles.link}>Víttor</a>
        <nav>
        <div className={Styles.navBarButton} onClick={handleMenuClick}>
            <span className={`${Styles.line} ${active ? Styles.line1 : null}`}></span>
            <span className={`${Styles.line} ${active ? Styles.line2: null}`}></span>
            <span className={`${Styles.line} ${active ? Styles.line3: null}`}></span>
          </div>
          <ul className={`${Styles.menuOptions} ${active ? Styles.active :null}`}>
            <li><Link to="/" className={Styles.link}>Ínicio</Link></li>
            <li><Link to="/sobre" className={Styles.link}>Sobre</Link></li>
            <li><Link to="/projetos" className={Styles.link}>Projetos</Link></li>   
            <li><Link to="/contato" className={Styles.link}>Contato</Link></li>
          </ul>
        </nav>
        </section>
     </header>
    </>
  )
}

export default Header;