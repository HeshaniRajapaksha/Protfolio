"use client";

import { useState, useEffect } from "react";
import { calculateTotalExperience } from "@/utils/experience";
import styles from "./Experience.module.css";

interface JobExperience {
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  skills: string[];
}

const EXPERIENCES: JobExperience[] = [
  {
    role: "Quality Assurance Engineer",
    company: "Overleap",
    period: "January 2026 – Present",
    isCurrent: true,
    responsibilities: [
      "Developed automation test scripts using Playwright and Cypress with JavaScript.",
      "Leveraged Cursor AI with Playwright for automation script generation, debugging, and test suite optimization.",
      "Created and executed manual test cases for functional, regression, and smoke testing.",
      "Performed API testing using Postman and Swagger, and conducted load and performance testing with JMeter.",
      "Used Jira for defect tracking and test management, aligning with agile sprints.",
      "Managed version control with Git and supported CI/CD test automation processes using GitHub Actions.",
      "Conducted mobile testing using Appium for functional and UI/UX validation.",
      "Collaborated closely with cross-functional teams and clients to ensure timely, high-quality software releases.",
    ],
    skills: [
      "Playwright",
      "Cypress",
      "JavaScript",
      "Cursor AI",
      "Postman",
      "Swagger",
      "JMeter",
      "Appium",
      "GitHub Actions",
      "Git",
      "Jira",
    ],
  },
  {
    role: "Associate QA",
    company: "Overleap",
    period: "October 2024 – January 2026",
    isCurrent: false,
    responsibilities: [
      "Developed Cypress automation scripts using JavaScript and created detailed manual test cases for functional, regression, and smoke testing.",
      "Performed API testing with Postman & Swagger, and executed load testing using JMeter.",
      "Conducted cross-platform mobile testing using Appium focusing on functional, UI/UX, and exploratory testing.",
      "Implemented CI/CD test execution with GitHub Actions and maintained version control with Git.",
      "Used Excel and Jira for test management, sprint planning, and defect lifecycle tracking.",
      "Documented test results, defect metrics, and SRS for both functional and non-functional requirements.",
    ],
    skills: [
      "Cypress",
      "JavaScript",
      "Postman",
      "Swagger",
      "JMeter",
      "Appium",
      "GitHub Actions",
      "Git",
      "Jira",
    ],
  },
  {
    role: "Junior QA",
    company: "Creative Software — Creative eLearning",
    period: "June 2023 – February 2024",
    isCurrent: false,
    responsibilities: [
      "Executed load and performance testing using JMeter.",
      "Developed automation test scripts using Selenium (Java).",
      "Created and executed comprehensive manual test cases, including functional, regression, and smoke testing.",
      "Performed API testing and payload validation using Postman.",
      "Conducted cross-browser compatibility testing across multiple OS/browser platforms using BrowserStack.",
      "Managed test documentation, test coverage tracking, and defect reporting in Jira.",
      "Participated in requirement gathering and collaborated in client meetings to clarify business expectations.",
    ],
    skills: [
      "Selenium",
      "Java",
      "JMeter",
      "Postman",
      "BrowserStack",
      "Cross-Browser Testing",
      "Jira",
    ],
  },
  {
    role: "Trainee QA",
    company: "Lithium Technology",
    period: "September 2022 – June 2023",
    isCurrent: false,
    responsibilities: [
      "Executed manual testing for web applications and user journeys.",
      "Worked actively within an Agile/Scrum team environment.",
      "Created User Acceptance Documents (UAD) and test procedure specifications.",
      "Gained hands-on automation experience with the Katalon Studio testing tool.",
    ],
    skills: [
      "Manual Testing",
      "Agile/Scrum",
      "User Acceptance Testing (UAT)",
      "UAD",
      "Katalon Studio",
    ],
  },
];

export default function Experience() {
  const [experienceText, setExperienceText] = useState("4+ Years of Professional QA Experience");

  useEffect(() => {
    // Dynamic calculation from career start: September 2022 (Lithium Technology)
    const exp = calculateTotalExperience("2022-09-01");
    setExperienceText(`${exp.formattedYears} of Professional QA Experience`);
  }, []);

  return (
    <section className={styles.experienceSection} id="experience">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Career Pathway</span>
          <h2 className={styles.title}>Work Experience</h2>
          <div className={styles.experienceBadge}>
            <span className={styles.pulseDot} />
            <span>{experienceText}</span>
          </div>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, idx) => (
            <div key={`${exp.company}-${idx}`} className={styles.timelineItem}>
              <div
                className={`${styles.timelineDot} ${
                  exp.isCurrent ? styles.currentDot : ""
                }`}
              />

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    <div className={styles.companyName}>{exp.company}</div>
                  </div>

                  <span
                    className={`${styles.dateBadge} ${
                      exp.isCurrent ? styles.activeDate : ""
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className={styles.bulletPoint}>
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className={styles.skillsRow}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className={styles.skillPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
