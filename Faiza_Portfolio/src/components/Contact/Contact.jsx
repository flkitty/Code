import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h1>Contact Me</h1>
        </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("/assets/Contact/emailIcon.png")} alt="Email Icon" className={styles.image}/>
                    <a href="mailto:faizaklaskar@gmail.com">faizaklaskar@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("/assets/Contact/linkedinIcon.png")} alt="Linkedin Icon" className={styles.image}/>
                    <a href="https://www.linkedin.com/in/faiza-laskar/">Linkedin</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("/assets/Contact/githubIcon.png")} alt="Github Icon" className={styles.image}/>
                    <a href="https://github.com/flkitty">Github</a>
                </li>
            </ul>
    </footer>
  )
}
