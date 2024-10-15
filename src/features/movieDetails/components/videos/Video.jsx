import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import Image from "@/ui/Image";

export default function Video({ video }) {
  const youtubeThumbnailUrl = `http://i3.ytimg.com/vi/${video?.key}/maxresdefault.jpg`;
  return (
    <div className="mx-auto w-full cursor-pointer px-2">
      <div className="group relative w-full overflow-hidden rounded-md  shadow shadow-light/50">
        {/* IMAGE FOR VIDEO */}
        <Image
          src={youtubeThumbnailUrl}
          alt={video?.name}
          styles="h-full w-full object-cover object-center rounded-md"
        />
        {/* LINK THAT WILL NAVIGATE TO THE YOUTUBE VIDEO FOR THE MOVIE */}
        <div className="flexCenter absolute -bottom-[1000px] h-full w-full rounded-md bg-black/50 transition-all duration-500 group-hover:bottom-0">
          <Link
            to={`https://www.youtube.com/watch?v=${video?.key}`}
            target="_blank"
            className="block"
          >
            <FaYoutube
              size={40}
              className="transition-all duration-200 hover:text-red-600"
            />
          </Link>
        </div>
      </div>
      {/* MOVIE TITLE */}
      <p className="mt-2 text-center text-sm">{video?.name}</p>
    </div>
  );
}
