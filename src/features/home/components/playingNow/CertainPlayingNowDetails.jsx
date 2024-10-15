import { Link } from "react-router-dom";
import useImagePath from "@/hooks/useImagePath";
import Title from "@/ui/Title";
import { getDetailsFromDate } from "@/utils/getDetailsFromDate";

const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export default function CertainPlayingNowDetails({ movie }) {
  const { imgPath } = useImagePath(movie?.backdrop_path || movie?.poster_path);
  const { month, day, year } = getDetailsFromDate(movie?.release_date) || {};

  return (
    <div className="relative h-[calc(100dvh-80px)] w-full">
      {/* MOVIE IMAGE */}
      <img
        src={imgPath}
        alt={movie?.name || movie?.title}
        className="h-[calc(100dvh-80px)] w-full object-cover"
      />
      {/* OVERLAY */}
      <div className="absolute inset-0 h-[calc(100dvh-80px)] w-full bg-black/15 bg-gradient-to-t from-black"></div>

      <div className="absolute top-[50%] w-full -translate-y-1/2 space-y-3 p-4 text-center sm:text-start md:p-8">
        {/* MOVIE TITLE */}
        <Title text={movie?.title || movie?.name} />
        {/* MOVIE OVERVIEW */}
        {movie?.overview && (
          <p className="w-full text-sm sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {truncateString(movie.overview, 150)}
          </p>
        )}
        <div className="gap flex flex-col justify-center gap-3 sm:justify-start">
          {/* MOVIE RELEASE DATE */}
          {movie?.release_date && month && day && year && (
            <p className="font-bold">{`${month} ${day}, ${year}`}</p>
          )}
          {/* MOVIE DETAILS NAVIGATION */}
          <Link className="mx-auto w-fit sm:mx-0" to={`/movie/${movie.id}`}>
            <button className="btn" aria-label="More-details">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
