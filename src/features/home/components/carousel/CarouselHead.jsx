import Title from "../../../../ui/Title";
import ToggleCategories from "../../../../ui/ToggleCategories";

export default function CarouselHead({
  categories,
  selectedCategory,
  handleSelectNewCategory,
  title,
}) {
  return (
    <div className="flexBetween mb-5 flex-col gap-3 sm:flex-row">
      <Title text={title} />
      {categories && (
        <ToggleCategories
          categories={categories}
          selectedCategory={selectedCategory}
          handleSelectNewCategory={handleSelectNewCategory}
        />
      )}
    </div>
  );
}
