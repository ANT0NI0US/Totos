import useImagePath from "@/hooks/useImagePath";
import Image from "@/ui/Image";
import noPerson from "@/assets/noPerson.png";

export default function Actor({ actor }) {
  const { imgPath } = useImagePath(actor?.profile_path, noPerson);
  return (
    <div className="mx-auto w-[150px] xl:w-[180px]">
      <div className="h-[150px] w-full overflow-hidden rounded-full border-[0.5px] border-light xl:h-[180px]">
        <Image
          src={imgPath}
          alt={actor?.original_name}
          styles="h-full w-full object-cover object-center rounded-full"
        />
      </div>
      <p className="mt-2 text-center text-sm">{actor?.original_name}</p>
      <p className="mt-1 text-center text-[10px]">{actor?.character}</p>
    </div>
  );
}
