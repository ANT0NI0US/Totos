import { useParams } from "react-router-dom";
import useGetDataFromApi from "@/hooks/useGetDataFromApi";
import MoviesList from "./components/MoviesList";
import Title from "@/ui/Title";

export default function Popular() {
  const { category } = useParams();
  const { data, isLoading, updateParams } = useGetDataFromApi(
    `${category}/popular`,
  );

  return (
    <div className="container space-y-4 py-[30px]">
      <Title text="Popular" />

      <MoviesList data={data} loading={isLoading} updateParams={updateParams} />
    </div>
  );
}
