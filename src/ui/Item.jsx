import { FaStar } from "react-icons/fa6";
import { getDetailsFromDate } from "../utils/getDetailsFromDate";
import Image from "./Image";
import useImagePath from "../hooks/useImagePath";
import { Link } from "react-router-dom";
import { roundToOneDecimal } from "../utils/roundToOneDecimal";

export default function Item({ movie, selectedCategory }) {
  const { imgPath } = useImagePath(movie?.poster_path);

  const mediaType = movie.media_type || selectedCategory || "movie";

  return (
    <Link to={`/${mediaType}/${movie.id}`}>
      <div className="h-[300px] xl:h-[400px]">
        <Image
          src={imgPath}
          alt={movie.name || movie.title}
          styles="h-full w-full object-fill align-middle rounded-tr-md rounded-tl-md"
        />
      </div>

      <div className="flex h-[95px] flex-col justify-between bg-primary p-2 pt-1 text-light">
        <p className="text-center font-extrabold">
          {movie.name || movie.title}
        </p>
        <div className="flexBetween">
          <span>
            {getDetailsFromDate(movie?.first_air_date) ||
              getDetailsFromDate(movie?.release_date)}
          </span>
          <div className="flexCenter gap-1">
            <FaStar className="text-orange" />
            <span>{roundToOneDecimal(movie.vote_average)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
