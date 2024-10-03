import Carousel from "./carousel/Carousel";

const categories = ["day", "week"];

export default function Trending() {
  return (
    <div className="mt-[30px]">
      <Carousel
        categories={categories}
        url="trending/all"
        isTrending={true}
        title="trending"
      />
    </div>
  );
}
