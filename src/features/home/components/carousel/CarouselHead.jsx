import { Link } from "react-router-dom";
import Title from "@/ui/Title";
import ToggleCategories from "@/ui/ToggleCategories";
import { formatNavigationTitle } from "@/utils/formatNavigationTitle";

export default function CarouselHead({
  categories,
  selectedCategory,
  handleSelectNewCategory,
  title,
}) {
  const formattedTitle = formatNavigationTitle(title);

  return (
    <div className="flexBetween mb-5 flex-col gap-3 xs:flex-row">
      <Title text={title} />
      <div className="flexBetween flex-col gap-3 xs:flex-row">
        {categories && (
          <ToggleCategories
            categories={categories}
            selectedCategory={selectedCategory}
            handleSelectNewCategory={handleSelectNewCategory}
          />
        )}
        <Link
          className="mx-auto w-fit sm:mx-0"
          to={`/${formattedTitle}${selectedCategory ? `/${selectedCategory}` : ""}`}
        >
          <button className="btn" aria-label="Load-more">
            Load More
          </button>
        </Link>
      </div>
    </div>
  );
}
