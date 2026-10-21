import { Mail, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandGroup}>
            <div className={styles.brandTitle}>Heshani Rajapaksha</div>
            <p className={styles.brandDesc}>
              Quality Assurance Engineer • Test Automation • Continuous Quality
            </p>
          </div>

          <div className={styles.contactLinks}>
            <a
              href="mailto:heshanirajapaksha.qa@gmail.com"
              className={styles.contactItem}
            >
              <Mail size={16} />
              <span>heshanirajapaksha.qa@gmail.com</span>
            </a>

            <a
              href="https://github.com/HeshaniRajapaksha"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/heshani-rajapaksha"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div>
            © {new Date().getFullYear()} Heshani Rajapaksha. Hosted on GitHub Pages.
          </div>
          <div className={styles.statusIndicatorSmall}>
            <span className={styles.dot} />
            <span>Automated Testing Ready • Zero Bugs Target</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
