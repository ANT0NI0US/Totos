import Carousel from "./carousel/Carousel";

const categories = ["movie", "tv"];

export default function Popular() {
  return <Carousel categories={categories} url="popular" title="Popular" />;
}
