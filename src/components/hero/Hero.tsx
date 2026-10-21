import Image from "next/image";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      {/* Subtle ambient lighting */}
      <div className={styles.ambientGlowPrimary} aria-hidden="true" />
      <div className={styles.ambientGlowSecondary} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroCard}>
          {/* Bio / Info */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              <span>Available for QA Roles</span>
            </div>

            <div className={styles.nameBlock}>
              <h1 className={styles.name}>Heshani Rajapaksha</h1>
              <span className={styles.role}>QA Engineer</span>
            </div>

            <p className={styles.description}>
              Dedicated Quality Assurance Engineer focused on automated testing, 
              API validation, and delivering reliable, zero-defect software experiences.
            </p>

            <div className={styles.actions}>
              <a
                href="mailto:heshanirajapaksha.qa@gmail.com"
                className={styles.primaryBtn}
              >
                <span>Get in Touch</span>
                <ArrowUpRightIcon size={16} />
              </a>

              <div className={styles.socialList}>
                <a
                  href="https://github.com/HeshaniRajapaksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/heshani-rajapaksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>

                <a
                  href="mailto:heshanirajapaksha.qa@gmail.com"
                  className={styles.socialBtn}
                  aria-label="Email Heshani"
                  title="Email"
                >
                  <MailIcon size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/heshani.jpg"
                alt="Heshani Rajapaksha - QA Engineer"
                width={400}
                height={500}
                priority
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
