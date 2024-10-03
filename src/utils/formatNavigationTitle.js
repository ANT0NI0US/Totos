export const formatNavigationTitle = (title) => {
  if (!title) return "";
  const words = title.split(" ");
  return words
    .map(
      (word, index) =>
        index === 0
          ? word.toLowerCase() // Make the first letter of the first word lowercase
          : word.charAt(0).toUpperCase() + word.slice(1), // Capitalize the first letter of subsequent words
    )
    .join("");
};
