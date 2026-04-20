import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href="/contact" className={styles.link}>
        Request Details <ArrowUpRight size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
