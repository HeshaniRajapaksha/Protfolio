import { LinkedinIcon, MailIcon } from "@/components/ui/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.brandGroup}>
          <div className={styles.brandName}>Heshani Rajapaksha</div>
          <div className={styles.brandRole}>
            Quality Assurance Engineer • Test Automation & Quality Engineering
          </div>
        </div>

        <div className={styles.contactRow}>
          <a
            href="mailto:heshanitharushika123@gmail.com"
            className={styles.contactLink}
          >
            <MailIcon size={16} />
            <span>heshanitharushika123@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/heshani-rajapaksha"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className={styles.copyright}>
          <div>© {new Date().getFullYear()} Heshani Rajapaksha. All rights reserved.</div>
          <div className={styles.liveTag}>
            <span className={styles.tagDot} />
            <span>Quality-Driven Software Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
