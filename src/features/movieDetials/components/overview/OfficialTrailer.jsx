import { Link } from "react-router-dom";

export default function OfficialTrailer({ officialTrailer }) {
  return (
    officialTrailer && (
      <Link
        title="official Trailer"
        to={`https://www.youtube.com/watch?v=${officialTrailer?.key}`}
        target="_blank"
        className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2 sm:mx-0 sm:justify-start"
      >
        <button className="btn">Watch Trailer</button>
      </Link>
    )
  );
}
