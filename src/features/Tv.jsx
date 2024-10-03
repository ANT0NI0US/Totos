import { useState } from "react";
import useGetDataFromApi from "@/hooks/useGetDataFromApi";
import MoviesList from "./components/MoviesList";
import AllGenres from "./components/AllGenres";
import Spinner from "@/ui/spinner/Spinner";
import Title from "@/ui/Title";

export default function Tv() {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreQuery =
    selectedGenres.length > 0
      ? `with_genres=${selectedGenres.join("%2C")}`
      : "";
  const { data, isLoading, updateParams } = useGetDataFromApi(
    `discover/tv?${genreQuery}include_adult=true`,
  );
  const { data: genres, isLoading: isGenresLoading } =
    useGetDataFromApi(`genre/tv/list`);

  if (isGenresLoading) return <Spinner />;

  return (
    <div className="container space-y-4 py-[30px]">
      <Title text="tv" />

      {/* FILTERD BY GENRES */}
      <AllGenres
        genres={genres}
        loading={isGenresLoading}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />

      {/* MOVIES LIST */}
      <MoviesList data={data} loading={isLoading} updateParams={updateParams} />
    </div>
  );
}
