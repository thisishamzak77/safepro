"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "HSE Manager, Oil & Gas",
    content: "The Fire Safety certification from SAFEPRO was a game-changer for my career. The instructors are top-notch and the curriculum is very practical.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Process Safety Engineer",
    content: "MASTERING HAZOP leadership with SAFEPRO gave me the confidence to lead multi-million dollar safety reviews. Highly recommended!",
    rating: 5
  },
  {
    name: "Mohammad Raza",
    role: "Safety Consultant",
    content: "Modern, professional, and efficient. SAFEPRO's consultancy services helped our firm achieve safety certification in record time.",
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <div className={styles.sliderWrapper}>
          <div className={styles.controls}>
            <button onClick={prev} className={styles.controlBtn}><ChevronLeft /></button>
            <button onClick={next} className={styles.controlBtn}><ChevronRight /></button>
          </div>

          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className={styles.testimonial}
              >
                <Quote size={48} className={styles.quoteIcon} />
                <div className={styles.rating}>
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                  ))}
                </div>
                <p className={styles.text}>&quot;{testimonials[current].content}&quot;</p>
                <div className={styles.author}>
                  <p className={styles.name}>{testimonials[current].name}</p>
                  <p className={styles.role}>{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
