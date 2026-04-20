import React from "react";
import ServiceCard from "@/components/shared/ServiceCard";
import styles from "./Consultancy.module.css";
import CTASection from "@/components/shared/CTASection";
import { 
  ShieldCheck, 
  Flame, 
  AlertTriangle, 
  Box, 
  FileText, 
  Activity, 
  Settings, 
  Drill,
  HardHat,
  Search,
  BookOpen,
  ArrowRight,
  ClipboardCheck
} from "lucide-react";

const services = [
  { 
    title: "Risk Assessment & JSA", 
    description: "Comprehensive identification of workplace hazards and implementation of Job Safety Analysis (JSA) protocols.", 
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "HSE Management Systems", 
    description: "Design and implementation of standard HSE management systems tailored to your industry.", 
    icon: Settings,
    image: "https://images.unsplash.com/photo-1454165833767-02654e59b21d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Safety Audits & Inspections", 
    description: "Thorough evaluation of your facilities and processes to ensure full compliance with safety regulations.", 
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Incident Investigation", 
    description: "Expert analysis of workplace accidents to identify root causes and prevent recurrence.", 
    icon: Search,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Emergency Response Planning", 
    description: "Development of robust emergency procedures and evacuation plans to protect your workforce.", 
    icon: Activity,
    image: "https://images.unsplash.com/photo-1599700403969-f77b3ea7480b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Safety Equipment Supply", 
    description: "Reliable supply of fire extinguishers, PPE, and safety signage compliant with industry standards.", 
    icon: Box,
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Consultancy() {
  return (
    <div className={styles.consultancyPage}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Consultancy Services</h1>
          <p className={styles.subtitle}>Strategic safety solutions for complex industrial challenges.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.useCaseSection} section`}>
        <div className="container">
          <h2 className="section-title">Real-World Impact</h2>
          <div className={styles.useCaseGrid}>
            <div className={styles.useCase}>
              <div className={styles.useCaseContent}>
                <h3>Industrial Plant Optimization</h3>
                <p>Reduced workplace incidents by 45% through a comprehensive HAZOP study and revised safety protocols.</p>
                <span className={styles.tag}>Case Study: Manufacturing</span>
              </div>
            </div>
            <div className={styles.useCase}>
              <div className={styles.useCaseContent}>
                <h3>Oil & Gas Sector</h3>
                <p>Achieved 100% compliance with safety standards for a major offshore drilling operation.</p>
                <span className={styles.tag}>Case Study: Energy Sector</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need a Custom Consultation?"
        subtitle="Our experts are ready to analyze your specific operational risks and provide actionable solutions."
        btnText="Request Consultation"
      />
    </div>
  );
}
