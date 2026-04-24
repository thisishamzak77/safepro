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


          <div className={styles.contact}>
            <h4 className={styles.title}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <Phone size={18} className={styles.icon} />
                <span>0302-2711005</span>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <Link href="/contact" className={styles.contactLink}>info@sphse.com</Link>
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
