import Carousel from "./carousel/Carousel";

const categories = ["movie", "tv"];

export default function TopRated() {
  return <Carousel categories={categories} url="top_rated" title="Top Rated" />;
}
