export function getDetailsFromDate(dateString) {
  // Check if dateString is undefined or invalid
  if (!dateString) {
    return null; // or you can return a default value
  }

  const date = new Date(dateString);

  // Check if date is invalid
  if (isNaN(date)) {
    return null; // Handle invalid date
  }

  // Extract the day
  const day = date.getDate();

  // Extract the year
  const year = date.getFullYear();

  // Format the month based on language
  const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short" });
  const month = monthFormatter?.format(date);

  // Combine day, month, and year
  const dayMonthYear = `${month} ${day}, ${year}`;

  return dayMonthYear;
}
