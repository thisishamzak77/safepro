import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CTASection.module.css";

const CTASection = ({ title, subtitle, btnText = "Enroll Now", btnLink = "/contact" }) => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <Link href={btnLink} className={styles.btn}>
            {btnText} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
