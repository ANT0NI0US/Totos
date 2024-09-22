import { useState } from "react";

export default function useCategoriesData(categories = []) {
  const [selectedCategory, setSelectedCategory] = useState(categories?.[0]);

  const handleSelectNewCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return { selectedCategory, handleSelectNewCategory };
}
