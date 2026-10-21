export interface ExperienceDuration {
  years: number;
  months: number;
  formattedYears: string;
  detailedText: string;
}

/**
 * Dynamically calculates total professional QA experience from career start date.
 * Career started in September 2022 (Lithium Technology).
 * Automatically updates every month/year without hardcoding.
 */
export function calculateTotalExperience(
  startDateStr: string = "2022-09-01"
): ExperienceDuration {
  const start = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const decimalYears = (years + months / 12).toFixed(1);
  const formattedYears = `${decimalYears}+ Years`;
  const detailedText =
    months > 0
      ? `${years} Years, ${months} Months of Experience`
      : `${years} Years of Experience`;

  return {
    years,
    months,
    formattedYears,
    detailedText,
  };
}
