import useCategoriesData from "@/hooks/useCategoriesData";
import Slider from "./Slider";
import CarouselHead from "./CarouselHead";

export default function Carousel({ categories, url, isTrending, title }) {
  const { selectedCategory, handleSelectNewCategory } =
    useCategoriesData(categories);

  return (
    <div className="my-[30px]">
      {/* MOVIES HEAD */}
      <CarouselHead
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelectNewCategory={handleSelectNewCategory}
        title={title}
      />
      {/* SLIDER FOR THE MOVIE CATEGORIES */}
      <Slider
        selectedCategory={selectedCategory}
        url={url}
        isTrending={isTrending}
      />
    </div>
  );
}
