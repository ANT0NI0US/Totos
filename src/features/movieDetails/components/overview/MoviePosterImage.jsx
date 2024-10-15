import Image from "@/ui/Image";

export default function MoviePosterImage({ imgPath, name, title }) {
  return (
    <div className="relative h-full rounded-lg shadow-md shadow-light sm:basis-[40%] sm:overflow-hidden">
      <Image
        src={imgPath}
        alt={name || title}
        styles="h-[500px] sm:w-full rounded-lg sm:h-full object-cover object-center"
      />
      <div className="absolute inset-0 rounded-md bg-black/30"></div>
    </div>
  );
}
