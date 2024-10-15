import GridContainer from "@/ui/GridContainer";
import Spinner from "@/ui/spinner/Spinner";

export default function AllGenres({
  genres,
  loading,
  selectedGenres,
  setSelectedGenres,
}) {
  if (loading) return <Spinner />;

  // Function to handle selection/deselection of a genre
  const toggleGenre = (genreId) => {
    setSelectedGenres((prev) => {
      if (prev.includes(genreId)) {
        return prev.filter((id) => id !== genreId);
      } else {
        return [...prev, genreId];
      }
    });
  };

  return (
    <GridContainer Styles="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      <div
        className={`flexCenter cursor-pointer rounded-full bg-orange p-2 transition-all 
          ${selectedGenres.length === 0 ? "bg-primary" : "hover:bg-primary/70"}`}
        onClick={() => setSelectedGenres([])}
      >
        <span>All</span>
      </div>

      {genres?.genres?.map((genre) => (
        <div
          key={genre.id}
          className={`flexCenter cursor-pointer rounded-full bg-orange p-2 transition-all
            ${selectedGenres.includes(genre.id) ? "bg-primary" : "hover:bg-primary/70"}`}
          onClick={() => toggleGenre(genre.id)}
        >
          <span>{genre.name}</span>
        </div>
      ))}
    </GridContainer>
  );
}
