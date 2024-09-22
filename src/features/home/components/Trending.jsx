import Carousel from "./carousel/Carousel";

const categories = ["day", "week"];

export default function Trending() {
  return (
    <Carousel
      categories={categories}
      url="trending/all"
      isTrending={true}
      title="Trending"
    />
  );
}
