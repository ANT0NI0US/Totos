import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCategoriesData from "@/hooks/useCategoriesData";
import ToggleCategories from "@/ui/ToggleCategories";

const categories = ["movie", "tv"];

export default function Search({ Styles, inputStyles }) {
  const { searchTitle, movieType } = useParams();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { selectedCategory, handleSelectNewCategory } =
    useCategoriesData(categories);

  useEffect(() => {
    if (movieType) {
      handleSelectNewCategory(movieType);
    }
  }, [movieType, handleSelectNewCategory]);

  useEffect(() => {
    if (searchTitle) {
      setQuery(searchTitle);
    } else {
      setQuery("");
    }
  }, [searchTitle]);

  const searchQueryHandler = () => {
    if (query.length > 2) {
      navigate(`/search/${selectedCategory}/${query}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchQueryHandler();
    }
  };

  return (
    <div className={`flexBetween gap-3 ${Styles}`}>
      <input
        placeholder="Search..."
        type="text"
        className={`h-full border-b border-orange bg-transparent text-light outline-none placeholder:text-light focus:border-secondary ${inputStyles}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={searchQueryHandler}
        onKeyDown={handleKeyDown}
      />
      <ToggleCategories
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelectNewCategory={handleSelectNewCategory}
      />
    </div>
  );
}
