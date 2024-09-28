import { useParams } from "react-router-dom";
import Overview from "./components/Overview";
import Videos from "./components/Videos";
import Recommendations from "./components/Recommendations";
import Similar from "./components/Similar";
import useGetDataFromApi from "../../hooks/useGetDataFromApi";
import Spinner from "../../ui/loader/Spinner";
import Actors from "./components/Actors";

export default function MovieDetails() {
  const { movieType, movieId } = useParams();

  const { data: movie, isLoading: isMovieLoading } = useGetDataFromApi(
    `${movieType}/${movieId}`,
  );

  const { data: actors, isLoading: isActorsLoading } = useGetDataFromApi(
    `${movieType}/${movieId}/credits`,
  );

  const { data: videos, isLoading: isVideosLoading } = useGetDataFromApi(
    `${movieType}/${movieId}/videos`,
  );

  const { data: recommendations, isRecommendationsLoading } = useGetDataFromApi(
    `${movieType}/${movieId}/recommendations`,
  );

  const { data: similar, isSimilarLoading } = useGetDataFromApi(
    `${movieType}/${movieId}/similar`,
  );

  if (
    isMovieLoading ||
    isActorsLoading ||
    isVideosLoading ||
    isRecommendationsLoading ||
    isSimilarLoading
  )
    return <Spinner />;

  return (
    <>
      <Overview movie={movie} trailer={videos?.results} />
      <div className="container text-light">
        {actors?.cast?.length > 0 && <Actors actors={actors?.cast} />}
        {videos?.results?.length > 0 && <Videos videos={videos?.results} />}
        {recommendations?.results?.length > 0 && (
          <Recommendations recommendations={recommendations?.results} />
        )}
        {similar?.results?.length > 0 && <Similar similar={similar?.results} />}
      </div>
    </>
  );
}
