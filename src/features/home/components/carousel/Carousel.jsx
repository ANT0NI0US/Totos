import useCategoriesData from "../../../../hooks/useCategoriesData";
import Slider from "./Slider";
import CarouselHead from "./CarouselHead";

export default function Carousel({ categories, url, isTrending, title }) {
  const { selectedCategory, handleSelectNewCategory } =
    useCategoriesData(categories);

  return (
    <>
      {/* HEAD OF THE COMPONENT */}
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
    </>
  );
}
