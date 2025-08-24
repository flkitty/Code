import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Card.module.css";

export const Card = ({project}) => {
    return <div className={styles.container}>
    <img src={getImageUrl(project.imageSrc)} alt={`Image of ${project.title}`} className={styles.image}/>
    <h3 className={styles.title}>{project.title}</h3>
    <p className={styles.description}>{project.description}</p>
    <ul className={styles.skills}>
        {project.skills.map((skill, id)=>{
            return <li key={id} className={styles.skill}>{skill}</li>;
        })}
    </ul>
    <div className={styles.links}>
        <a href={project.View} className={styles.link}>Website</a>
        <a href={project.Code} className={styles.link}>Github</a>
    </div>
</div>
}
