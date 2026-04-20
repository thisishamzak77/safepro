const fs = require('fs');

const missingPrograms = [
  { title: "Permit to Work", slug: "permit-to-work", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  { title: "Risk Assessment & Controls / Job Hazard Analysis", slug: "risk-assessment-jha", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" },
  { title: "Forklift Inspection & Safety", slug: "forklift-safety", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  { title: "Scaffolding Safety", slug: "scaffolding-safety", img: "https://images.unsplash.com/photo-1541888941259-7724fd20c4a1?auto=format&fit=crop&q=80&w=800" },
  { title: "Working in Confined Space", slug: "confined-space", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
  { title: "Ergonomics", slug: "ergonomics", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" },
  { title: "Behavior Based Safety", slug: "behavior-based-safety", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" },
  { title: "Safety Inspections & Audits", slug: "safety-inspections", img: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&q=80&w=800" },
  { title: "Incident Investigation", slug: "incident-investigation", img: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&q=80&w=800" },
  { title: "Dangerous Good Handling", slug: "dangerous-goods", img: "https://images.unsplash.com/photo-1603554471924-f7b578c77395?auto=format&fit=crop&q=80&w=800" },
  { title: "Emergency Response Plan", slug: "emergency-response", img: "https://images.unsplash.com/photo-1566861295982-628d02f5aae0?auto=format&fit=crop&q=80&w=800" },
  { title: "Energy Isolation", slug: "energy-isolation", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" },
  { title: "Authorize Gas Tester", slug: "gas-tester", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" },
  { title: "Drop Object Awareness", slug: "drop-object", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800" },
  { title: "Oil Spillage Response", slug: "oil-spillage", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" },
  { title: "Welder, Cutting & Grinding Safety", slug: "welder-safety", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
  { title: "H2S & SCBA", slug: "h2s-scba", img: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=80&w=800" },
  { title: "Construction Safety", slug: "construction-safety", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" }
];

let pageJsx = fs.readFileSync('app/training/page.jsx', 'utf8');
let slugPageJsx = fs.readFileSync('app/training/[slug]/page.jsx', 'utf8');

let newAllPrograms = '';
let newProgramsData = '';

missingPrograms.forEach(p => {
  // Check if it already exists in app/training/page.jsx to prevent dupes
  if (!pageJsx.includes(p.title)) {
    newAllPrograms += `  {
    title: "${p.title}",
    description: "Professional training and certification for ${p.title.toLowerCase()}.",
    category: "HSE Training",
    slug: "${p.slug}",
    image: "${p.img}"
  },
`;
  }
  
  if (!slugPageJsx.includes(p.title)) {
    newProgramsData += `  "${p.slug}": {
    title: "${p.title}",
    image: "${p.img}",
    certification: "HSE Standards",
    outcomes: ["Safety Officer", "HSE Lead", "Supervisor"],
    overview: "Comprehensive guide to ${p.title.toLowerCase()} ensuring workplace safety and compliance.",
    modules: [
      "Introduction & Definitions",
      "Hazard Identification",
      "Control Measures",
      "Emergency Procedures",
      "Reporting & Audits"
    ]
  },
`;
  }
});

// Update app/training/page.jsx
if (newAllPrograms) {
  // insert before the closing bracket of allPrograms
  pageJsx = pageJsx.replace(/\];\s*export default function Training/m, newAllPrograms + '];\n\nexport default function Training');
  fs.writeFileSync('app/training/page.jsx', pageJsx);
}

// Update app/training/[slug]/page.jsx
if (newProgramsData) {
  slugPageJsx = slugPageJsx.replace(/};\s*export default function ProgramDetail/m, newProgramsData + '};\n\nexport default function ProgramDetail');
}

// Remove "International" from certification in slugPageJsx
slugPageJsx = slugPageJsx.replace(/certification:\s*"[^"]*International[^"]*"/gi, 'certification: "HSE Standards"');
slugPageJsx = slugPageJsx.replace(/certification:\s*"NFPA \/ International Standards"/gi, 'certification: "NFPA Standards"');

fs.writeFileSync('app/training/[slug]/page.jsx', slugPageJsx);
console.log('Update script completed successfully.');
