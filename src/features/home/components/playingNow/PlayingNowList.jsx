import CertainPlayingNowDetails from "./CertainPlayingNowDetails";
import CarouselContainer from "@/ui/CarouselContainer";
import Spinner from "@/ui/spinner/Spinner";
import { singleItemResponsive } from "@/utils/data";
import useGetDataFromApi from "@/hooks/useGetDataFromApi";

export default function PlayingNowList() {
  const { data: nowPlaying, isNowPlayingLoading } =
    useGetDataFromApi(`movie/now_playing`);

  if (isNowPlayingLoading) return <Spinner />;

  return (
    nowPlaying?.results?.length > 0 && (
      <CarouselContainer screens={singleItemResponsive}>
        {nowPlaying?.results?.map((movie) => (
          <CertainPlayingNowDetails movie={movie} key={movie?.id} />
        ))}
      </CarouselContainer>
    )
  );
}
