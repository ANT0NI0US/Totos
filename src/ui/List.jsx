import Item from "./Item";

export default function List({ movies }) {
  return movies?.map((movie) => (
    <div
      className="overflow-hidden rounded-md shadow-md drop-shadow-xl transition-all duration-[1s] hover:shadow-light"
      key={movie.id}
    >
      <Item movie={movie} />
    </div>
  ));
}
