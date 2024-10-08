import useGetDataFromApi from "@/hooks/useGetDataFromApi";
import Spinner from "@/ui/spinner/Spinner";
import Item from "@/ui/Item";
import { responsive } from "@/utils/data";
import NoDataToDisplay from "@/ui/NoDataToDisplay";
import CarouselContainer from "@/ui/CarouselContainer";

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
    <CarouselContainer screens={responsive}>
      {data?.results?.map((movie) => (
        <div
          className="group mx-1 h-full rounded-md shadow-md drop-shadow-xl transition-all duration-[1s] hover:shadow-orange"
          key={movie.id}
        >
          <Item movie={movie} selectedCategory={selectedCategory} />
        </div>
      ))}
    </CarouselContainer>
  );
}
