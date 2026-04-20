import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brand}>
            <Image
              src="/logo.png"
              alt="SAFEPRO Logo"
              width={150}
              height={50}
              className={styles.footerLogo}
            />
            <p className={styles.description}>
              SAFEPRO is a premier HSE training and consultancy agency dedicated to building safer working environments and advancing careers in health, safety, and environment.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <h4 className={styles.title}>Quick Links</h4>
            <ul className={styles.list}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/training">Training Programs</Link></li>
              <li><Link href="/consultancy">Consultancy Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h4 className={styles.title}>Programs</h4>
            <ul className={styles.list}>
              <li><Link href="/training/fire-safety">Fire Safety</Link></li>
              <li><Link href="/training/hazop">HAZOP Study</Link></li>
              <li><Link href="/training/ppe">PPE Advisory</Link></li>
              <li><Link href="/training/work-at-height">Work at Height</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.title}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <Phone size={18} className={styles.icon} />
                <span>0302-2711005</span>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <span>info@safepropk.com</span>
              </li>
              <li>
                <MapPin size={18} className={styles.icon} />
                <span>Plot # A- 94, BL-C, Gulshan-e- Jamal Karachi.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} SAFEPRO. All Rights Reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
