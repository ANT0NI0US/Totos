import CarouselContainer from "@/ui/CarouselContainer";
import Title from "@/ui/Title";
import { responsive } from "@/utils/data";
import Video from "./Video";

export default function Videos({ videos }) {
  return (
    <div className="space-y-3 py-[30px]">
      <Title text="videos" />
      <CarouselContainer screens={responsive}>
        {videos?.map(
          (video) =>
            video.site === "YouTube" &&
            video.type !== "Trailer" && <Video key={video.id} video={video} />,
        )}
      </CarouselContainer>
    </div>
  );
}
