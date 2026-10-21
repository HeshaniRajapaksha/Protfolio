"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoBadge}>
            <ShieldCheck size={18} />
          </div>
          <div className={styles.logoText}>
            <span>Heshani</span>
            <span className={styles.roleTag}>QA</span>
          </div>
        </Link>

        <nav aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            <li>
              <a href="#about" className={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <a href="#specializations" className={styles.navLink}>
                Specializations
              </a>
            </li>
            <li>
              <a href="#test-arsenal" className={styles.navLink}>
                Test Arsenal
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.statusIndicator}>
            <span className={styles.statusDot}></span>
            <span>Quality Gate: Active</span>
          </div>

          <a href="#contact" className={styles.contactBtn}>
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <a
            href="#about"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#specializations"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Specializations
          </a>
          <a
            href="#test-arsenal"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Test Arsenal
          </a>
          <a
            href="#contact"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#contact"
            className={styles.contactBtn}
            style={{ justifyContent: "center", marginTop: "0.5rem" }}
            onClick={() => setIsOpen(false)}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
