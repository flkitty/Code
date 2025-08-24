import React from 'react'
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>
            Skills
        </h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skills, id) => {
                        return <div key = {id} className={styles.skill}>
                            <div className={styles.skillImageBox}>
                                <img src={getImageUrl(skills.imageSrc)} alt={skills.title} className={styles.skillImage} />
                            </div>
                            <p>{skills.title}</p> 
                        </div>
                    })
                }      
             </div>       
        </div>
    </section>
  )
}
