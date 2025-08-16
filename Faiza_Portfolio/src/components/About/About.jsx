import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("/assets/About/AboutComp.gif")} alt= "Computer Image" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li >
                    <div >
                        <h3>Frontend Developer</h3>
                        <p>I am a frontend developer with experience in building responsive, user-friendly websites and creating clean, visually appealing designs.</p>
                    </div>
                </li>
                <li >
                    <div >
                        <h3>Backend Developer</h3>
                        <p>I have experience developing backend systems, working with databases, and building applications using server-side languages.</p>
                    </div>
                </li>
                <li >
                    <div >
                        <h3>Continuous Learner</h3>
                        <p>I am passionate about learning new technologies, improving my skills, and staying up-to-date with industry trends.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
