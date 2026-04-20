import React from "react";
import TrainingCardGrid from "@/components/shared/TrainingCardGrid";
import styles from "./Training.module.css";
import CTASection from "@/components/shared/CTASection";

const allPrograms = [
  {
    title: "Basic & Advance Fire Fighting",
    description: "Master fire dynamics, prevention methods, and life safety systems in industrial environments.",
    category: "HSE Training",
    slug: "fire-safety",
    image: "/fire.jpg"
  },
  {
    title: "Safe Chemical Handling & Storage",
    description: "Comprehensive guide to managing hazardous chemicals, spill control, and safe storage practices.",
    category: "HSE Training",
    slug: "chemical-safety",
    image: "/chemical.jpg"
  },
  {
    title: "Crane Operator",
    description: "Technical training for safe crane operations, load management, and signaling protocols.",
    category: "HSE Training",
    slug: "crane-operator",
    image: "/crane.jpg"
  },
  {
    title: "Rigger",
    description: "Essential skills for safe rigging, slinging techniques, and lifting equipment inspection.",
    category: "HSE Training",
    slug: "rigger",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Fire Audits & Gap Analysis",
    description: "Professional evaluation of fire safety systems and identification of compliance gaps.",
    category: "HSE Training",
    slug: "fire-audit",
    image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Heat Stress Awareness",
    description: "Managing workplace health risks associated with high temperatures and thermal environments.",
    category: "HSE Training",
    slug: "heat-stress",
    image: "/heatstress.png"
  },
  {
    title: "Defensive Driving",
    description: "Professional training to minimize road risks and ensure vehicle safety for corporate teams.",
    category: "HSE Training",
    slug: "defensive-driving",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Working Safely at Height",
    description: "Essential training for safely managing operations at height, including fall protection and rescue.",
    category: "HSE Training",
    slug: "work-at-height",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Basic & Advance First Aid",
    description: "Life-saving skills for emergency response, stabilization, and trauma care in the workplace.",
    category: "HSE Training",
    slug: "first-aid",
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Risk Based Process Safety Management",
    description: "Deep dive into RBPSM frameworks to manage complex industrial process risks.",
    category: "Process Safety",
    slug: "rbpsm",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mechanical Integrity",
    description: "Ensuring equipment reliability and safety through rigorous maintenance and inspection standards.",
    category: "Process Safety",
    slug: "mechanical-integrity",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Safe Operation of Boilers & Furnaces",
    description: "Technical training for the safe management and maintenance of high-pressure boiler systems.",
    category: "Ops & Maintenance",
    slug: "boiler-safety",
    image: "/boiler.png"
  },
  {
    title: "Vibration Analysis",
    description: "Predictive maintenance techniques to identify machinery faults before they lead to failure.",
    category: "Ops & Maintenance",
    slug: "vibration-analysis",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Permit to Work",
    description: "Professional training and certification for permit to work.",
    category: "HSE Training",
    slug: "permit-to-work",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Risk Assessment & Controls / Job Hazard Analysis",
    description: "Professional training and certification for risk assessment & controls / job hazard analysis.",
    category: "HSE Training",
    slug: "risk-assessment-jha",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Forklift Inspection & Safety",
    description: "Professional training and certification for forklift inspection & safety.",
    category: "HSE Training",
    slug: "forklift-safety",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Scaffolding Safety",
    description: "Professional training and certification for scaffolding safety.",
    category: "HSE Training",
    slug: "scaffolding-safety",
    image: "/scaffolding.jpg"
  },
  {
    title: "Working in Confined Space",
    description: "Professional training and certification for working in confined space.",
    category: "HSE Training",
    slug: "confined-space",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ergonomics",
    description: "Professional training and certification for ergonomics.",
    category: "HSE Training",
    slug: "ergonomics",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Behavior Based Safety",
    description: "Professional training and certification for behavior based safety.",
    category: "HSE Training",
    slug: "behavior-based-safety",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Safety Inspections & Audits",
    description: "Professional training and certification for safety inspections & audits.",
    category: "HSE Training",
    slug: "safety-inspections",
    image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Incident Investigation",
    description: "Professional training and certification for incident investigation.",
    category: "HSE Training",
    slug: "incident-investigation",
    image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Dangerous Good Handling",
    description: "Professional training and certification for dangerous good handling.",
    category: "HSE Training",
    slug: "dangerous-goods",
    image: "/goodhandling.jpg"
  },
  {
    title: "Emergency Response Plan",
    description: "Professional training and certification for emergency response plan.",
    category: "HSE Training",
    slug: "emergency-response",
    image: "/emergency.jpg"
  },
  {
    title: "Energy Isolation",
    description: "Professional training and certification for energy isolation.",
    category: "HSE Training",
    slug: "energy-isolation",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Authorize Gas Tester",
    description: "Professional training and certification for authorize gas tester.",
    category: "HSE Training",
    slug: "gas-tester",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Drop Object Awareness",
    description: "Professional training and certification for drop object awareness.",
    category: "HSE Training",
    slug: "drop-object",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Oil Spillage Response",
    description: "Professional training and certification for oil spillage response.",
    category: "HSE Training",
    slug: "oil-spillage",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Welder, Cutting & Grinding Safety",
    description: "Professional training and certification for welder, cutting & grinding safety.",
    category: "HSE Training",
    slug: "welder-safety",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "H2S & SCBA",
    description: "Professional training and certification for h2s & scba.",
    category: "HSE Training",
    slug: "h2s-scba",
    image: "/H2S.jpg"
  },
  {
    title: "Construction Safety",
    description: "Professional training and certification for construction safety.",
    category: "HSE Training",
    slug: "construction-safety",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
  },
];

export default function Training() {
  return (
    <div className={styles.trainingPage}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Training Programs</h1>
          <p className={styles.subtitle}>Unlock your potential with world-class safety certifications.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.filterRow}>
            <p>Showing <strong>{allPrograms.length}</strong> intensive programs</p>
          </div>
          <TrainingCardGrid programs={allPrograms} />
        </div>
      </section>

      <CTASection 
        title="Can't find what you're looking for?"
        subtitle="Contact our experts for customized training solutions tailored to your specific needs."
        btnText="Inquire Now"
      />
    </div>
  );
}
