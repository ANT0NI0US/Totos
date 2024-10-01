import { Link } from "react-router-dom";
import useImagePath from "@/hooks/useImagePath";
import { FaStar } from "react-icons/fa6";
import { getDetailsFromDate } from "@/utils/getDetailsFromDate";
import { roundToOneDecimal } from "@/utils/roundToOneDecimal";
import Image from "./Image";

export default function Item({ movie, selectedCategory }) {
  const { imgPath } = useImagePath(movie?.poster_path);

  const mediaType = movie.media_type || selectedCategory || "movie";

  const detailsFromFirstAirDate = getDetailsFromDate(movie?.first_air_date);
  const detailsFromReleaseDate = getDetailsFromDate(movie?.release_date);

  const year =
    detailsFromFirstAirDate?.year || detailsFromReleaseDate?.year || "N/A";

  return (
    <Link
      className="block h-full overflow-hidden rounded-md border-2 border-light"
      to={`/${mediaType}/${movie.id}`}
    >
      <div className="relative h-full">
        <Image
          src={imgPath}
          alt={movie.name || movie.title}
          styles="h-full w-full"
        />

        <div className="absolute bottom-0 h-0 w-full bg-black/50 transition-all duration-300 group-hover:h-full"></div>

        <div className="absolute -bottom-[1000px] flex w-full flex-col justify-between bg-primary p-2 pt-1 text-light transition-all delay-500 duration-300 group-hover:bottom-0">
          <p className="text-center text-sm font-bold">
            {movie.name || movie.title}
          </p>
        </div>

        <div className="absolute -left-[1000px] top-2 flex justify-between gap-1 text-light transition-all delay-500 duration-300 group-hover:left-2">
          {year && (
            <span className="rounded-full bg-orange px-2 py-1">{year}</span>
          )}
          <div className="flex items-center gap-1 rounded-full bg-primary px-2 py-1">
            <span>{roundToOneDecimal(movie.vote_average)}</span>
            <FaStar className="text-orange" />
          </div>
        </div>
      </div>
    </Link>
  );
}
