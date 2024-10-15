import Actor from "./Actor";
import CarouselContainer from "@/ui/CarouselContainer";
import Title from "@/ui/Title";
import { smallScreenResponsive } from "@/utils/data";

export default function Actors({ actors }) {
  return (
    <div className="space-y-3 py-[30px]">
      <Title text="Actors" />
      <CarouselContainer screens={smallScreenResponsive}>
        {actors?.map((actor) => (
          <Actor actor={actor} key={actor.id} />
        ))}
      </CarouselContainer>
    </div>
  );
}
