import React, {useState} from 'react'
import styles from "./Navbar.module.css";
import {getImageUrl} from '../../utils.js';
//import xyz from '../public/menuIcon.png'

console.log("Calling getImageUrl with:", "nav/menuIcon.png");

console.log(getImageUrl("nav/menuIcon.png"));
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href ="/">Portfolio</a>
        <div className={styles.menu}>
            <img
                className={styles.menuBtn}
                src={menuOpen ? getImageUrl("/assets/Nav/closeIcon.png") : getImageUrl("/assets/Nav/menuIcon.png")}
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />

            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
                <li>
                    <a href ="#about">About</a>
                </li>
                <li>
                    <a href ="#experience">Experience</a>
                </li>
                <li>
                    <a href ="#projects">Projects</a>
                </li>
                <li>
                    <a href ="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
