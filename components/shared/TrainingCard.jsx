import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award } from "lucide-react";
import styles from "./TrainingCard.module.css";

const TrainingCard = ({ title, description, duration, category, slug, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          className={styles.image} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.categoryBadge}>{category}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Award size={14} /> <span>Certificate</span>
          </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TrainingCard;
