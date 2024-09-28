import CarouselContainer from "@/ui/CarouselContainer";
import Item from "@/ui/Item";
import Title from "@/ui/Title";
import { responsive } from "@/utils/data";

export default function Similar({ similar }) {
  console.log(similar);
  return (
    <div className="space-y-3 py-[30px]">
      <Title text="similar" />
      <CarouselContainer screens={responsive}>
        {similar?.map((movie) => (
          <div
            className="mx-1 mb-[30px] overflow-hidden rounded-md shadow-md drop-shadow-xl transition-all duration-[1s] hover:shadow-light"
            key={movie.id}
          >
            <Item movie={movie} />
          </div>
        ))}
      </CarouselContainer>
    </div>
  );
}
