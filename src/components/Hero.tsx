"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  Play,
  RotateCcw,
  Download,
  ArrowRight,
  Mail,
  Bug,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import styles from "./Hero.module.css";

const ARSENAL_ITEMS = [
  { name: "Cypress", category: "E2E" },
  { name: "Playwright", category: "Automation" },
  { name: "Selenium", category: "Web" },
  { name: "Postman", category: "API" },
  { name: "Jest", category: "Unit" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "JIRA", category: "Agile" },
  { name: "REST APIs", category: "Integration" },
  { name: "Performance QA", category: "Metrics" },
];

export default function Hero() {
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testStep, setTestStep] = useState(3); // Start with full pass preview
  const [testTime, setTestTime] = useState("0.34s");

  const runSimulation = () => {
    if (isRunningTests) return;
    setIsRunningTests(true);
    setTestStep(0);

    const step1 = setTimeout(() => setTestStep(1), 400);
    const step2 = setTimeout(() => setTestStep(2), 900);
    const step3 = setTimeout(() => {
      setTestStep(3);
      setTestTime((0.25 + Math.random() * 0.15).toFixed(2) + "s");
      setIsRunningTests(false);
    }, 1500);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
    };
  };

  return (
    <section className={styles.heroSection} id="about">
      {/* Ambient background glows */}
      <div className={styles.glowCyan} aria-hidden="true" />
      <div className={styles.glowEmerald} aria-hidden="true" />
      <div className={styles.glowViolet} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* Left Column: Bio & Value Proposition */}
          <div className={styles.contentLeft}>
            {/* Status Pill */}
            <div className={styles.statusPill}>
              <span className={styles.statusPing} />
              <span>Available for QA & Test Automation Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className={styles.headline}>
              Engineering{" "}
              <span className={styles.gradientText}>Zero-Defect</span> Software
              Through Precision & Automation
            </h1>

            {/* Subtitle */}
            <p className={styles.subtitle}>
              Hello, I am <span className={styles.highlightName}>Heshani Rajapaksha</span> — a dedicated{" "}
              <strong style={{ color: "#38bdf8", fontWeight: 600 }}>Quality Assurance Engineer</strong>. 
              I design resilient automated test suites, validate mission-critical APIs, and enforce rigorous quality gates so your software launches flawlessly every single time.
            </p>

            {/* Tech Arsenal Chips */}
            <div className={styles.arsenalSection}>
              <span className={styles.arsenalLabel}>
                Core Testing Stack & Frameworks
              </span>
              <div className={styles.chipsContainer}>
                {ARSENAL_ITEMS.map((item) => (
                  <div key={item.name} className={styles.chip}>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className={styles.ctaGroup}>
              <a href="#specializations" className={styles.primaryCta}>
                <span>Explore Quality Suite</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className={styles.secondaryCta}
                title="Download Heshani Rajapaksha QA Resume"
              >
                <Download size={17} />
                <span>Resume / CV</span>
              </a>

              <div className={styles.socialRow}>
                <a
                  href="https://github.com/HeshaniRajapaksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconBtn}
                  aria-label="GitHub Profile"
                  title="GitHub - HeshaniRajapaksha"
                >
                  <GithubIcon size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/heshani-rajapaksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconBtn}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>

                <a
                  href="mailto:heshanirajapaksha.qa@gmail.com"
                  className={styles.socialIconBtn}
                  aria-label="Send Email"
                  title="Email Heshani"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>

            {/* Interactive Live QA Test Runner Simulator */}
            <div className={styles.testTerminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <div className={styles.terminalTitle}>
                  <Terminal size={13} />
                  <span>qa-pipeline.spec.ts</span>
                </div>
                <button
                  type="button"
                  className={styles.runBtn}
                  onClick={runSimulation}
                  disabled={isRunningTests}
                  title="Simulate automated test execution"
                >
                  {isRunningTests ? (
                    <>
                      <RotateCcw size={13} />
                      <span>Testing...</span>
                    </>
                  ) : (
                    <>
                      <Play size={13} />
                      <span>Run Quality Check</span>
                    </>
                  )}
                </button>
              </div>

              <div className={styles.terminalBody}>
                <div className={styles.terminalPrompt}>
                  $ test-runner --target=production --coverage=strict
                </div>

                {testStep >= 1 && (
                  <div className={styles.testLinePass}>
                    <CheckCircle2 size={14} />
                    <span>✓ 48 API Endpoints & Auth Contracts Validated [200 OK]</span>
                  </div>
                )}

                {testStep >= 2 && (
                  <div className={styles.testLinePass}>
                    <CheckCircle2 size={14} />
                    <span>✓ Cypress & Playwright E2E UI User Journeys [Zero Regression]</span>
                  </div>
                )}

                {testStep >= 3 && (
                  <>
                    <div className={styles.testLinePass}>
                      <CheckCircle2 size={14} />
                      <span>✓ Cross-Browser (Chrome, Safari, Firefox) & Mobile Matrix Verified</span>
                    </div>
                    <div className={styles.testStatusReady}>
                      <ShieldCheck size={16} />
                      <span>ALL 142 TESTS PASSED ({testTime}) • READY FOR PRODUCTION</span>
                    </div>
                  </>
                )}

                {testStep === 0 && (
                  <div className={styles.testLineInfo}>
                    ⠋ Initializing headless browsers & running test assertions...
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: User Portrait & High-Tech Floating QA Badges */}
          <div className={styles.visualRight}>
            <div className={styles.imageOuterFrame}>
              {/* Precision QA corner bracket markers */}
              <span className={styles.bracketTL} />
              <span className={styles.bracketTR} />
              <span className={styles.bracketBL} />
              <span className={styles.bracketBR} />

              {/* Floating Badge 1: Top Right */}
              <div className={styles.badgeTopRight}>
                <div className={styles.badgeIconBoxSuccess}>
                  <CheckCircle2 size={20} />
                </div>
                <div className={styles.badgeText}>
                  <span className={styles.badgeTitle}>Test Suite: PASS</span>
                  <span className={styles.badgeDesc}>99.8% Test Coverage</span>
                </div>
              </div>

              {/* Main Image Container */}
              <div className={styles.imageCard}>
                <Image
                  src="/images/heshani-hero.jpg"
                  alt="Heshani Rajapaksha - QA Engineer"
                  width={500}
                  height={620}
                  priority
                  className={styles.heroImage}
                />
                <div className={styles.imageOverlayGlow} />

                {/* Floating Bio footer on image */}
                <div className={styles.cardFooterBio}>
                  <div>
                    <div className={styles.bioName}>Heshani Rajapaksha</div>
                    <div className={styles.bioRole}>QA Engineer</div>
                  </div>
                  <div className={styles.verifiedBadge}>
                    <ShieldCheck size={13} />
                    <span>QA Verified</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className={styles.badgeBottomLeft}>
                <div className={styles.badgeIconBoxCyan}>
                  <Bug size={20} />
                </div>
                <div className={styles.badgeText}>
                  <span className={styles.badgeTitle}>Zero Critical Bugs</span>
                  <span className={styles.badgeDesc}>Production Quality Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Ribbon */}
        <div className={styles.statsRibbon} id="specializations">
          <div className={styles.statCard}>
            <div className={styles.statValue}>
              <span>100</span>
              <span className={styles.statAccent}>%</span>
            </div>
            <span className={styles.statLabel}>Quality Commitment</span>
            <span className={styles.statSub}>
              Deep manual & automated validation rigor
            </span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>
              <span>99.9</span>
              <span className={styles.statAccent}>%</span>
            </div>
            <span className={styles.statLabel}>Pre-Release Detection</span>
            <span className={styles.statSub}>
              Catching defects before end-users do
            </span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>
              <span>E2E</span>
              <span className={styles.statAccent}>+API</span>
            </div>
            <span className={styles.statLabel}>Full-Stack Testing</span>
            <span className={styles.statSub}>
              Web, mobile, API, and regression suites
            </span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>
              <span>CI/CD</span>
              <span className={styles.statAccent}>Gates</span>
            </div>
            <span className={styles.statLabel}>DevOps Integration</span>
            <span className={styles.statSub}>
              Automated testing on every pull request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
