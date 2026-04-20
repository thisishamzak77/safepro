"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Training", href: "/training" },
    { name: "Consultancy", href: "/consultancy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="SAFEPRO Logo" 
              width={240} 
              height={80} 
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className={styles.ctaButton}>
              Apply Now <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.active : ""}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/contact" 
          className={styles.mobileCtaButton}
          onClick={() => setIsOpen(false)}
        >
          Apply Now <ArrowRight size={18} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
