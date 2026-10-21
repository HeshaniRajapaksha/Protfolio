import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoDot} />
          <span>Heshani</span>
          <span className={styles.roleTag}>QA</span>
        </Link>

        <nav aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            <li>
              <a href="#about" className={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className={styles.navLink}>
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.navLink}>
                Skills
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="mailto:heshanitharushika123@gmail.com"
          className={styles.contactBtn}
        >
          <span>Get in Touch</span>
          <ArrowUpRightIcon size={14} />
        </a>
      </div>
    </header>
  );
}
