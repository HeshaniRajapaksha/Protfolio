import Image from "next/image";
import { LinkedinIcon, MailIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import styles from "./Hero.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const COMPETENCIES = [
  "Test Automation",
  "API Validation",
  "Manual QA",
  "Regression Testing",
  "Quality Gates",
];

const HIGHLIGHTS = [
  {
    title: "Full-Cycle QA & Testing",
    desc: "Rigorous end-to-end manual and automated testing across complex web, mobile, and enterprise applications.",
  },
  {
    title: "API & Integration Verification",
    desc: "Deep REST API contract validation, response schema checks, and backend reliability testing.",
  },
  {
    title: "Zero-Defect Quality Gates",
    desc: "Implementing automated quality checks in continuous delivery pipelines to eliminate release defects.",
  },
];

export default function Hero() {
  return (
    <section className={styles.heroSection} id="about">
      {/* Ambient background glows */}
      <div className={styles.ambientCyan} aria-hidden="true" />
      <div className={styles.ambientEmerald} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Left Column: Bio & Value Proposition */}
          <div className={styles.contentLeft}>
            <div className={styles.statusPill}>
              <span className={styles.statusDot} />
              <span>Available for QA & Test Engineering Roles</span>
            </div>

            <h1 className={styles.headline}>
              Delivering <span className={styles.gradientText}>Software Excellence</span> Through Precision & Quality Engineering
            </h1>

            <p className={styles.subheadline}>
              Hi, I am <span className={styles.nameHighlight}>Heshani Rajapaksha</span> — a dedicated{" "}
              <span className={styles.roleHighlight}>Quality Assurance Engineer</span> focused on software reliability, robust test strategies, and zero-defect releases.
            </p>

            <p className={styles.description}>
              I partner with product and development teams to build thorough test frameworks, 
              validate mission-critical APIs, and safeguard software quality so users experience flawless, high-performing applications.
            </p>

            {/* Competency Pills */}
            <div className={styles.tagsRow}>
              {COMPETENCIES.map((item) => (
                <span key={item} className={styles.tagPill}>
                  {item}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className={styles.actionsRow}>
              <a
                href="mailto:heshanitharushika123@gmail.com"
                className={styles.primaryCta}
              >
                <span>Get in Touch</span>
                <ArrowUpRightIcon size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/heshani-rajapaksha"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinBtn}
                title="Connect on LinkedIn"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:heshanitharushika123@gmail.com"
                className={styles.emailDirect}
                title="Send an email to Heshani"
              >
                <MailIcon size={16} />
                <span>heshanitharushika123@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Res Portrait Visual */}
          <div className={styles.visualRight}>
            <div className={styles.imageFrameOuter}>
              <div className={styles.imageContainer}>
                <Image
                  src={`${basePath}/images/heshani.jpg`}
                  alt="Heshani Rajapaksha - Quality Assurance Engineer"
                  width={360}
                  height={360}
                  priority
                  className={styles.heroPhoto}
                />
              </div>

              {/* Floating QA Badge */}
              <div className={styles.floatingBadge}>
                <span className={styles.badgeCheck}>✓</span>
                <span>Quality Assurance & Automation Specialist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Banner - Bridges naturally to upcoming Experience section */}
        <div className={styles.highlightsBanner} id="skills">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className={styles.highlightCard}>
              <h3 className={styles.highlightTitle}>{h.title}</h3>
              <p className={styles.highlightDesc}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
