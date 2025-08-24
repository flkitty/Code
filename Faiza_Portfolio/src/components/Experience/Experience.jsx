import React from 'react'
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id = "experience">
        <h2 className={styles.title}>
                    Experience
        </h2>
        <div className={styles.content}>
          {history.map((historyItem, id) => {
            return (
              <li key={id}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation}`} className={styles.ExperienceImage}
                />
                <div className={styles.contentItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>
                    {historyItem.experiences.map((experience, id) => {
                      return <div key={id}>{experience}</div>;
                    })}
                  </p>
                </div>
              </li>
            );
          })}
        </div>
    
    </section>
  )
}
