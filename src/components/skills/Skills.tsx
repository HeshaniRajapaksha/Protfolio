import styles from "./Skills.module.css";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Test Automation",
    icon: "⚡",
    skills: ["Playwright", "Cypress", "Selenium", "mabl", "Katalon Studio"],
  },
  {
    title: "AI-Powered QA",
    icon: "🤖",
    skills: ["Cursor AI with Playwright", "AI Script Generation", "Test Optimization"],
  },
  {
    title: "API & Performance",
    icon: "🔄",
    skills: ["Postman", "Swagger", "JMeter", "REST API Testing", "Load Testing"],
  },
  {
    title: "Mobile & Cross-Browser",
    icon: "📱",
    skills: ["Appium", "Android & iOS Testing", "BrowserStack", "Cross-Platform QA"],
  },
  {
    title: "Manual & Exploratory QA",
    icon: "🔍",
    skills: [
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Exploratory Testing",
      "User Acceptance (UAT)",
    ],
  },
  {
    title: "Programming & DevOps",
    icon: "💻",
    skills: ["JavaScript (JS)", "Java", "Git", "GitHub Actions CI/CD"],
  },
  {
    title: "Management & Tracking",
    icon: "📊",
    skills: ["Jira", "ClickUp", "Zoho", "Excel", "Agile / Scrum"],
  },
  {
    title: "QA Documentation",
    icon: "📝",
    skills: ["Test Plans", "Test Cases", "Bug Reports", "SRS Analysis", "UAD"],
  },
];

export default function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Technical Expertise</span>
          <h2 className={styles.title}>Skills & Capabilities</h2>
          <p className={styles.subtitle}>
            Comprehensive QA arsenal covering test automation frameworks, API validation, 
            performance analysis, mobile testing, and agile delivery.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3 className={styles.categoryName}>{category.title}</h3>
              </div>

              <div className={styles.itemsContainer}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.itemBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
