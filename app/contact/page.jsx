"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // We let FormSubmit handle the submission, but we can add logic here if needed
    // For a simple setup, we'll use a direct form action.
  };

  return (
    <div className={styles.contactPage}>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>Have a question? Our safety experts are ready to assist you.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <h3>Contact Information</h3>
                <p>Reach out to us via any of these channels for immediate assistance.</p>
                
                <div className={styles.contactItems}>
                  <div className={styles.item}>
                    <div className={styles.iconWrapper}><Phone size={20} /></div>
                    <div>
                      <p className={styles.label}>Call Us / WhatsApp</p>
                      <p className={styles.value}>0302-2711005</p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.iconWrapper}><Mail size={20} /></div>
                    <div>
                      <p className={styles.label}>Email Us</p>
                      <p className={styles.value}>info@safepropk.com</p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.iconWrapper}><MapPin size={20} /></div>
                    <div>
                      <p className={styles.label}>Visit Us</p>
                      <p className={styles.value}>Plot # A- 94, BL-C, Gulshan-e- Jamal Karachi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.success}>
                  <CheckCircle size={64} className={styles.successIcon} />
                  <h2>Request Received!</h2>
                  <p>Thank you for your interest. One of our experts will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>Send Another Message</button>
                </div>
              ) : (
                <form 
                  className={styles.form} 
                  action="https://formsubmit.co/info@safepropk.com" 
                  method="POST"
                >
                  {/* Honeypot */}
                  <input type="text" name="_honey" style={{display: 'none'}} />
                  {/* Disable Captcha */}
                  <input type="hidden" name="_captcha" value="false" />
                  {/* Success Page */}
                  <input type="hidden" name="_next" value="https://safepropk.com/contact?submitted=true" />

                  <h3>Inquiry Form</h3>
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label>Full Name</label>
                      <input type="text" name="name" placeholder="John Doe" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Phone Number</label>
                      <input type="tel" name="phone" placeholder="0302-2711005" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Email Address</label>
                      <input type="email" name="email" placeholder="john@example.com" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Interested In</label>
                      <select name="service" required>
                        <option value="">Select Service</option>
                        <option value="training">Training Program</option>
                        <option value="consultancy">Consultancy Service</option>
                        <option value="audit">Safety Audit</option>
                        <option value="equipment">Safety Equipment</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                      <label>Message</label>
                      <textarea name="message" placeholder="Tell us more about your requirements..." rows={5}></textarea>
                    </div>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Send Inquiry <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
