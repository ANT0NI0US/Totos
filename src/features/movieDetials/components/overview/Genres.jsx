export default function Genres({ genres }) {
  return (
    genres && (
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        {genres.map((type) => (
          <span className="rounded-full bg-primary/70 p-3" key={type.id}>
            {type.name}
          </span>
        ))}
      </div>
    )
  );
}
