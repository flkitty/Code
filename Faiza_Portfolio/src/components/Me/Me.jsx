import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Me.module.css";

export const  Me  = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className= {styles.title}>
          Greetings, my name is Faiza!
        </h1>
        <p className= {styles.description}>
          I am a senior majoring in Computer Science at Wayne State University with a strong interest in full-stack development. I am seeking an internship where I can apply my skills, continue learning, and gain valuable hands-on experience in real-world projects.
        </p>
        <a href="mailto:faizaklaskar@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src= {getImageUrl("/rose.ico")} alt="Rose image" className= {styles.MeImg}/>
    </section>
  )
}
