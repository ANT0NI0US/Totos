import Item from "./Item";

export default function List({ movies }) {
  return movies?.map((movie) => (
    <div
      className="group m-1 rounded-md shadow-md drop-shadow-xl transition-all duration-[1s] hover:shadow-orange"
      key={movie.id}
    >
      <Item movie={movie} />
    </div>
  ));
}
