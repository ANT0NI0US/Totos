import { FaStar } from "react-icons/fa6";
import { convertMinutesToHours } from "@/utils/convertMinutesToHours";
import { getDetailsFromDate } from "@/utils/getDetailsFromDate";
import { roundToOneDecimal } from "@/utils/roundToOneDecimal";

export default function MovieDeepDetails({
  releaseDate,
  runTime,
  voteAverage,
}) {
  const { month, day, year } = getDetailsFromDate(releaseDate) || {};

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
      {/* MOVIE RELEASE DATE */}
      {releaseDate && month && day && year && (
        <p className="border-r-2 pr-2">{`${month} ${day}, ${year}`}</p>
      )}
      {/* MOVIE RUNTIME */}
      {runTime && <p>{convertMinutesToHours(runTime)}</p>}
      {/* MOVIE VOTE AVERAGE */}
      {voteAverage !== 0 && (
        <div className="flexCenter gap-1 border-l-2 pl-2">
          <FaStar className="text-orange" />
          <p>{roundToOneDecimal(voteAverage)}</p>
        </div>
      )}
    </div>
  );
}
