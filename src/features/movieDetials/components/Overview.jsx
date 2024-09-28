import { FaStar, FaYoutube } from "react-icons/fa6";
import useImagePath from "@/hooks/useImagePath";
import Image from "@/ui/Image";
import Title from "@/ui/Title";
import { getDetailsFromDate } from "@/utils/getDetailsFromDate";
import { roundToOneDecimal } from "@/utils/roundToOneDecimal";
import { convertMinutesToHours } from "@/utils/convertMinutesToHours";
import { Link } from "react-router-dom";

export default function Overview({ movie, trailer }) {
  const { imgPath } = useImagePath(movie?.backdrop_path || movie?.poster_path);
  const officialTrailer = trailer?.find(
    (video) => video.type === "Trailer" && video.name === "Official Trailer",
  );
  return (
    <div className="relative h-auto w-full sm:h-[100vdh-80px]">
      {/* MOVIE IMAGE */}
      <Image
        src={imgPath}
        alt={movie?.name || movie?.title}
        styles="h-[200px] xs:h-[400px] sm:h-screen w-full object-cover"
      />
      {/* OVERLAY */}
      <div className="absolute inset-0 h-[200px] w-full bg-black/40 bg-gradient-to-t from-black xs:h-[400px] sm:h-screen"></div>

      <div className="w-full space-y-3 p-4 text-center sm:absolute sm:top-[50%] sm:-translate-y-1/2 sm:text-start md:p-8">
        {/* MOVIE TITILE */}
        <Title text={movie?.title || movie?.name} />
        {/* MOVIEW OVERVIEW */}
        {movie?.overview && (
          <p className="w-full text-sm sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {movie.overview}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          {/* MOVIE RELEASE DATE */}
          {movie?.release_date && (
            <p className="border-r-2 pr-2">
              {getDetailsFromDate(movie.release_date)}
            </p>
          )}
          {/* MOVIE RUNTIME */}
          {movie?.runtime && <p>{convertMinutesToHours(movie?.runtime)}</p>}
          {/* MOVIE VOTE AVERAGE */}
          {movie?.vote_average !== 0 && (
            <div className="flexCenter gap-1 border-l-2 pl-2">
              <FaStar className="text-orange" />
              <p>{roundToOneDecimal(movie?.vote_average)}</p>
            </div>
          )}
        </div>

        {/* MOVIE GENRES */}
        {movie?.genres && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {movie.genres.map((type) => (
              <span className="rounded-full bg-primary/70 p-3" key={type.id}>
                {type.name}
              </span>
            ))}
          </div>
        )}

        {/* OFFICIAL TRAILER */}
        {officialTrailer && (
          <Link
            title="official Trailer"
            to={`https://www.youtube.com/watch?v=${officialTrailer?.key}`}
            target="_blank"
            className="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
          >
            <FaYoutube
              size={60}
              className="transition-all duration-200 hover:text-red-600"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
