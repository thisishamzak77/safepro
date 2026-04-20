"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Play } from "lucide-react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.badge}
          >
            <Shield size={16} className={styles.badgeIcon} />
            <span>Leading Safety Training Center</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.title}
          >
            Access Our Services. <br />
            <span className={styles.highlight}>Get Certified. Get Hired.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.subtitle}
          >
            Master the skills needed for high-demand HSE roles worldwide. Professional 
            standard certifications in Fire Safety, HAZOP, and Risk Management.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.actions}
          >
            <Link href="/training" className={styles.primaryBtn}>
              Explore Programs <ArrowRight size={20} />
            </Link>
            <Link href="/consultancy" className={styles.secondaryBtn}>
              <div className={styles.playCircle}><Play size={16} fill="currentColor" /></div>
              Our Services
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={styles.stats}
          >
            <div className={styles.statItem}>
              <h3>10k+</h3>
              <p>Students Trained</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h3>95%</h3>
              <p>Hire Rate</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Expert Consultants</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
