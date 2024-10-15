import MoviePosterImage from "./MoviePosterImage";
import OfficialTrailer from "./OfficialTrailer";
import Genres from "./Genres";
import Title from "@/ui/Title";
import useImagePath from "@/hooks/useImagePath";
import MovieDeepDetails from "./MovieDeepDetails";

export default function Overview({ movie, trailer }) {
  const { imgPath } = useImagePath(movie?.poster_path || movie?.backdrop_path);
  const officialTrailer = trailer?.find(
    (video) => video.type === "Trailer" || video.name === "Official Trailer",
  );

  return (
    <div className="flexBetween h-auto w-full flex-col gap-5 py-0 pt-5 sm:h-[calc(100dvh-80px)] sm:flex-row sm:py-5">
      {/* MOVIE IMAGE */}
      <MoviePosterImage
        imgPath={imgPath}
        name={movie?.name}
        title={movie?.title}
      />
      <div className="w-full space-y-3 text-center sm:basis-[60%] sm:text-start">
        {/* MOVIE TITLE */}
        <Title
          text={movie?.title || movie?.name}
          Styles="!text-orange !font-black"
        />
        {/* MOVIE OVERVIEW */}
        {movie?.overview && <p className="text-sm">{movie.overview}</p>}

        {/* MOVIE DEEP DETAILS */}
        <MovieDeepDetails
          releaseDate={movie?.release_date}
          runTime={movie?.runtime}
          voteAverage={movie?.vote_average}
        />

        {/* MOVIE GENRES */}
        <Genres genres={movie?.genres} />

        {/* OFFICIAL TRAILER */}
        <OfficialTrailer officialTrailer={officialTrailer} />
      </div>
    </div>
  );
}
