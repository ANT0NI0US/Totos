import Carousel from "react-multi-carousel";
import useGetDataFromApi from "../../../../hooks/useGetDataFromApi";
import Spinner from "../../../../ui/loader/Spinner";
import Item from "../../../../ui/Item";
import { responsive } from "../../../../utils/data";
import NoDataToDisplay from "../../../../ui/NoDataToDisplay";

export default function Slider({ selectedCategory, url, isTrending }) {
  const ApiUrl = isTrending
    ? `${url}/${selectedCategory}`
    : `${selectedCategory}/${url}`;
  const FinalApiQuest = selectedCategory ? ApiUrl : url;
  const { data, isLoading, error } = useGetDataFromApi(FinalApiQuest);

  if (isLoading || !data) return <Spinner Styles="h-[50vh]" />;

  if (error) return <NoDataToDisplay text={error} />;

  if (!isLoading && data?.results?.length === 0) {
    return <NoDataToDisplay text="No Data To Display" />;
  }
  return (
    <Carousel
      responsive={responsive}
      partialVisible={false}
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      draggable
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      shouldResetAutoplay
      slidesToSlide={1}
      swipeable
    >
      {data?.results?.map((movie) => (
        <div
          className="mx-1 mb-[30px] overflow-hidden rounded-md shadow-md drop-shadow-xl transition-all duration-[1s] hover:shadow-light"
          key={movie.id}
        >
          <Item movie={movie} />
        </div>
      ))}
    </Carousel>
  );
}
