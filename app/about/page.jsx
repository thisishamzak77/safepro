import React from "react";
import Image from "next/image";
import styles from "./About.module.css";
import CTASection from "@/components/shared/CTASection";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>About SAFEPRO</h1>
          <p className={styles.subtitle}>Building a safer tomorrow through excellence in training and consultancy.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <p>
                Safepro Training & Consultancy is a professional and dedicated organization specializing in 
                comprehensive Health, Safety, and Environmental (HSE) training and consultancy services. 
                With a strong commitment to excellence, we provide industry-focused solutions designed 
                to meet the evolving safety needs of businesses, organizations, and individuals across 
                various sectors. Our services are built on practical knowledge, real-world application, and 
                alignment with recognized safety standards.
              </p>
              <p>
                We take pride in delivering high-quality training programs and consultancy services that 
                not only enhance awareness but also empower individuals and teams to implement 
                effective safety practices in their workplaces. Our expert team ensures that every solution 
                is tailored, result-driven, and compliant with both local regulations and best 
                practices.
              </p>
            </div>
            <div className={styles.imageContent}>
              <Image 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
                alt="Team" 
                width={600}
                height={400}
                className={styles.aboutImg} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.visionSection} section`}>
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <h3>Our Mission</h3>
              <p>Safepro Training & Consultancy is committed to providing professional, reliable, and cost-effective Health, Safety, and Environmental (HSE) training and consultancy services to a wide range of industries and organizations.</p>
            </div>
            <div className={styles.visionCard}>
              <h3>Our Vision</h3>
              <p>To foster a culture of safety by promoting proactive risk management, minimizing workplace hazards, and improving overall operational efficiency while protecting their most valuable assets—their people.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <h4>12+</h4>
              <p>Years of Experience</p>
            </div>
            <div className={styles.stat}>
              <h4>500+</h4>
              <p>Corporate Clients</p>
            </div>
            <div className={styles.stat}>
              <h4>100%</h4>
              <p>Commitment to Quality</p>
            </div>
            <div className={styles.stat}>
              <h4>24/7</h4>
              <p>Support & Advisory</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Join the SAFEPRO Community"
        subtitle="Experience the most modern and career-focused HSE training in the industry."
      />
    </div>
  );
}
