import Actor from "./Actor";
import { smallScreenResponsive } from "@/utils/data";
import CarouselContainer from "@/ui/CarouselContainer";
import Title from "@/ui/Title";

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
