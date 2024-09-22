import useCategoriesData from "../../../../hooks/useCategoriesData";
import Slider from "./Slider";
import CarouselHead from "./CarouselHead";

export default function Carousel({ categories, url, isTrending, title }) {
  const { selectedCategory, handleSelectNewCategory } =
    useCategoriesData(categories);

  return (
    <div className="w-full py-[10px]">
      <div className="mx-auto w-[90%] md:w-5/6">
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
      </div>
    </div>
  );
}
