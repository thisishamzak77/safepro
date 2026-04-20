import React from "react";
import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";
import Link from "next/link";
import TrainingCardGrid from "@/components/shared/TrainingCardGrid";
import ServiceCard from "@/components/shared/ServiceCard";
import CTASection from "@/components/shared/CTASection";
import TestimonialSlider from "@/components/shared/TestimonialSlider";
import { 
  ShieldAlert, 
  Flame, 
  HardHat, 
  Search, 
  ClipboardCheck, 
  Stethoscope,
  ArrowRight
} from "lucide-react";
import styles from "./page.module.css";

const featuredPrograms = [
  {
    title: "Defensive Driving",
    description: "Professional training to minimize road risks and ensure vehicle safety for corporate teams.",
    category: "HSE Training",
    slug: "defensive-driving",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Basic & Advance Fire Fighting",
    description: "Master fire dynamics, prevention methods, and life safety systems in industrial environments.",
    category: "HSE Training",
    slug: "fire-safety",
    image: "/fire.jpg"
  },
  {
    title: "Risk Based Process Safety",
    description: "Deep dive into RBPSM frameworks to manage complex industrial process risks.",
    category: "Process Safety",
    slug: "rbpsm",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

const homeServices = [
  {
    title: "Risk Assessment & JSA",
    description: "Identify potential hazards and implement Job Safety Analysis protocols to mitigate risks.",
    icon: ShieldAlert
  },
  {
    title: "Safety Audits & Inspections",
    description: "Thorough evaluation of your facilities to ensure compliance with safety standards.",
    icon: ClipboardCheck
  },
  {
    title: "Incident Investigation",
    description: "Expert analysis of workplace accidents to identify root causes and prevent recurrence.",
    icon: Search
  }
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Training Programs</h2>
          <p className="section-subtitle">
            Get certified and advance your career with our specialized HSE training modules.
          </p>
          <TrainingCardGrid programs={featuredPrograms} />
        </div>
      </section>

      <section className={`${styles.whyChoose} section`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <h2 className={styles.whyTitle}>Why Choose SAFEPRO?</h2>
              <p className={styles.whyText}>
                At SAFEPRO, we combine industry expertise with modern teaching methodologies to deliver 
                results-oriented HSE solutions. Our consultants are certified professionals with 
                decades of field experience.
              </p>
              <ul className={styles.benefits}>
                <li>Expert Trainers with Global Exposure</li>
                <li>Standard Methodologies</li>
                <li>Industry-Recognized Certifications</li>
                <li>Comprehensive Post-Training Support</li>
              </ul>
            </div>
            <div className={styles.whyImage}>
              <Image 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1000" 
                alt="Safety Training" 
                width={500}
                height={600}
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Consultancy Excellence</h2>
          <p className="section-subtitle">
            We provide strategic HSE consultancy to help organizations build a culture of safety and operational excellence.
          </p>
          <div className={styles.servicesGrid}>
            {homeServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.equipmentSection} section`}>
        <div className="container">
          <div className={styles.equipmentGrid}>
            <div className={styles.equipmentImage}>
              <Image 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" 
                alt="Safety Equipment" 
                width={600}
                height={400}
                className={styles.img}
              />
            </div>
            <div className={styles.equipmentContent}>
              <h2 className="section-title" style={{textAlign: 'left', margin: '0 0 1.5rem 0'}}>Safety Equipment Supply</h2>
              <p className={styles.whyText}>
                We provide a comprehensive range of high-quality safety equipment to ensure your workforce 
                is protected at all times. All our products comply with safety standards.
              </p>
              <ul className={styles.benefits}>
                <li>Fire Extinguishers & Fire Systems</li>
                <li>Premium PPE (Helmets, Gloves, Boots)</li>
                <li>Safety Signage & Compliance Material</li>
                <li>First Aid Kits & Emergency Supplies</li>
              </ul>
              <Link href="/consultancy" className={styles.equipmentLink}>
                View All Equipment <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <CTASection 
        title="Ready to Start Your Career in HSE?"
        subtitle="Join thousands of professionals who have transformed their careers with SAFEPRO certifications."
      />
    </div>
  );
}
