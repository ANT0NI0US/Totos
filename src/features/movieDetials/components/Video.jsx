import { Link } from "react-router-dom";
import Image from "@/ui/Image";
import { FaYoutube } from "react-icons/fa";

export default function Video({ video }) {
  const youtubeThumbnailUrl = `http://i3.ytimg.com/vi/${video?.key}/maxresdefault.jpg`;
  return (
    <div className="mx-auto w-full px-2">
      <div className="group relative h-[300px] w-full overflow-hidden rounded-md  shadow shadow-light/50">
        <Image
          src={youtubeThumbnailUrl}
          alt={video?.name}
          styles="h-full w-full object-cover object-center rounded-md"
        />
        <div className="flexCenter absolute -bottom-[1000px] h-full w-full rounded-md bg-black/50 transition-all duration-500 group-hover:bottom-0">
          <Link
            to={`https://www.youtube.com/watch?v=${video?.key}`}
            target="_blank"
            className="block"
          >
            <FaYoutube
              size={60}
              className="transition-all duration-200 hover:text-red-600"
            />
          </Link>
        </div>
      </div>
      <p className="mt-2 text-center text-sm">{video?.name}</p>
    </div>
  );
}
