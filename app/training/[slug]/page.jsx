"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, Award, Briefcase, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./ProgramDetail.module.css";
import CTASection from "@/components/shared/CTASection";

const programsData = {
  "fire-safety": {
    title: "Fire Safety & Prevention",
    image: "/fire.jpg",
    certification: "HSE Standards",
    outcomes: ["Certified Fire Warden", "Safety Consultant", "Facility Manager"],
    overview: "This intensive program provides a deep understanding of fire dynamics, risk assessment, and prevention. Participants will learn how to design and implement effective fire safety plans in complex industrial and commercial environments.",
    modules: [
      "Fundamentals of Fire Science",
      "Fire Risk Assessment Methodologies",
      "Fire Detection & Suppression Systems",
      "Emergency Evacuation Planning",
      "Regulatory Compliance & Auditing"
    ]
  },
  "chemical-safety": {
    title: "Safe Chemical Handling & Storage",
    image: "/chemical.jpg",
    certification: "HSE Standards",
    outcomes: ["Chemical Safety Officer", "Laboratory Manager", "HSE Specialist"],
    overview: "Learn best practices for handling, storing, and transporting hazardous chemicals. This course covers MSDS interpretation, spill response, and personal protective equipment specifically for chemical hazards.",
    modules: [
      "Hazard Communication & Labeling",
      "Understanding SDS/MSDS",
      "Chemical Compatibility & Storage",
      "Spill Containment & Emergency Response",
      "Respiratory Protection & PPE"
    ]
  },
  "crane-operator": {
    title: "Crane Operator Safety",
    image: "/crane.jpg",
    certification: "Industrial Lifting Standards",
    outcomes: ["Certified Crane Operator", "Lifting Supervisor", "Safety Inspector"],
    overview: "Professional training for safe crane operation. Covers various crane types, load charts, safety devices, and communication protocols between operators and signalers.",
    modules: [
      "Introduction to Crane Types",
      "Load Charts & Weight Calculations",
      "Safety Devices & Inspections",
      "Rigging & Signaling Basics",
      "Safe Operating Practices"
    ]
  },
  "rigger": {
    title: "Rigger & Slinger Safety",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200",
    certification: "Rigging Competency Cert",
    outcomes: ["Qualified Rigger", "Lifting Technician", "Site Safety Lead"],
    overview: "Focused on the mechanical and physical aspects of rigging and slinging. Learn to select, inspect, and use lifting gear correctly to ensure safe load movement.",
    modules: [
      "Rigging Hardware & Gear",
      "Slinging Techniques & Angles",
      "Center of Gravity & Load Balance",
      "Inspection & Maintenance of Gear",
      "Lifting Plans & Communication"
    ]
  },
  "fire-audit": {
    title: "Fire Audits & Gap Analysis",
    image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=1200",
    certification: "Professional Auditor Cert",
    outcomes: ["Fire Safety Auditor", "Compliance Manager", "HSE Consultant"],
    overview: "Learn to conduct thorough fire safety audits and gap analyses. Identify deficiencies in existing fire protection systems and develop actionable roadmaps for compliance.",
    modules: [
      "Audit Scoping & Preparation",
      "Fire Safety Management Systems",
      "Evaluating Physical Protections",
      "Life Safety & Evacuation Audits",
      "Reporting & Recommendations"
    ]
  },
  "heat-stress": {
    title: "Heat Stress Awareness",
    image: "/heatstress.png",
    certification: "Occupational Health Cert",
    outcomes: ["HSE Officer", "Workplace Wellness Lead", "First Aid Responder"],
    overview: "Managing health risks in high-temperature environments. Covers recognition of heat-related illnesses, preventative measures, and emergency response protocols.",
    modules: [
      "Physiology of Heat Stress",
      "Monitoring Environmental Conditions",
      "Acclimatization & Work Cycles",
      "Recognition of Heat Illness",
      "Controls & Emergency Actions"
    ]
  },
  "hazop": {
    title: "HAZOP Study Leadership",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    certification: "IEC 61882 Compliance",
    outcomes: ["HAZOP Leader", "Process Safety Engineer", "Risk Analyst"],
    overview: "Master the art of Hazard and Operability studies. This course focuses on leading multi-disciplinary teams through process safety reviews, identifying potential hazards, and proposing effective mitigation strategies.",
    modules: [
      "Introduction to Process Safety",
      "HAZOP Methodology & Node Selection",
      "Facilitation Techniques & Team Dynamics",
      "Recording & Reporting Findings",
      "Advanced Case Studies & Simulation"
    ]
  },
  "boiler-safety": {
    title: "Safe Operation of Boilers & Furnaces",
    image: "/boiler.png",
    certification: "Technical Certification",
    outcomes: ["Boiler Operator", "Maintenance Supervisor", "Energy Auditor"],
    overview: "This course covers the essential safety and operational requirements for high-pressure boiler systems and furnaces, focusing on preventing accidents and improving efficiency.",
    modules: [
      "Boiler Fundamentals & Heat Transfer",
      "Safety Controls & Instrumentation",
      "Fuel & Combustion Management",
      "Water Treatment & Corrosion Control",
      "Emergency Shutdown Procedures"
    ]
  },
  "permit-to-work": {
    title: "Permit to Work",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to permit to work ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "risk-assessment-jha": {
    title: "Risk Assessment & Controls / Job Hazard Analysis",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to risk assessment & controls / job hazard analysis ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "forklift-safety": {
    title: "Forklift Inspection & Safety",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to forklift inspection & safety ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "scaffolding-safety": {
    title: "Scaffolding Safety",
    image: "/scaffolding.jpg",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to scaffolding safety ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "confined-space": {
    title: "Working in Confined Space",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to working in confined space ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "ergonomics": {
    title: "Ergonomics",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to ergonomics ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "behavior-based-safety": {
    title: "Behavior Based Safety",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to behavior based safety ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "safety-inspections": {
    title: "Safety Inspections & Audits",
    image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to safety inspections & audits ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "incident-investigation": {
    title: "Incident Investigation",
    image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to incident investigation ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "dangerous-goods": {
    title: "Dangerous Good Handling",
    image: "/goodhandling.jpg",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to dangerous good handling ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "emergency-response": {
    title: "Emergency Response Plan",
    image: "/emergency.jpg",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to emergency response plan ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "energy-isolation": {
    title: "Energy Isolation",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to energy isolation ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "gas-tester": {
    title: "Authorize Gas Tester",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to authorize gas tester ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "drop-object": {
    title: "Drop Object Awareness",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to drop object awareness ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "oil-spillage": {
    title: "Oil Spillage Response",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to oil spillage response ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "welder-safety": {
    title: "Welder, Cutting & Grinding Safety",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to welder, cutting & grinding safety ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "h2s-scba": {
    title: "H2S & SCBA",
    image: "/H2S.jpg",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to h2s & scba ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
  "construction-safety": {
    title: "Construction Safety",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to construction safety ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
};

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = programsData[slug] || programsData["fire-safety"]; // Fallback for demo

  return (
    <div className={styles.detailPage}>
      <header className={styles.header}>
        <div className="container">
          <Link href="/training" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Training
          </Link>
          <h1 className={styles.title}>{program.title}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <Award size={20} /> <span>{program.certification}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.main}>
              <div className={styles.heroImgWrapper}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className={styles.heroImg}
                />
              </div>

              <div className={styles.sectionBlock}>
                <h2>Overview</h2>
                <p>{program.overview}</p>
              </div>

              <div className={styles.sectionBlock}>
                <h2>Course Modules</h2>
                <ul className={styles.moduleList}>
                  {program.modules.map((m, i) => (
                    <li key={i}>
                      <CheckCircle size={18} className={styles.check} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.stickyBox}>
                <div className={styles.boxHeader}>
                  <h3>Career Outcomes</h3>
                  <Briefcase size={20} />
                </div>
                <ul className={styles.outcomeList}>
                  {program.outcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
                <div className={styles.ctaWrapper}>
                  <p className={styles.note}>Ready to advance your career?</p>
                  <Link href="/contact" className={styles.applyBtn}>
                    Apply Now <ArrowRight size={20} />
                  </Link>
                  <p className={styles.disclaimer}>No upfront payment required. Enroll today and our experts will contact you with full details.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title="Custom Corporate Training"
        subtitle="Looking to train your entire team? We offer customized group packages and on-site training sessions."
        btnText="Request Quote"
      />
    </div>
  );
}
