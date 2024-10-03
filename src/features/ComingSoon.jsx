import useGetDataFromApi from "@/hooks/useGetDataFromApi";
import MoviesList from "./components/MoviesList";
import Title from "@/ui/Title";

export default function ComingSoon() {
  const { data, isLoading, updateParams } = useGetDataFromApi(`movie/upcoming`);

  return (
    <div className="container space-y-4 py-[30px]">
      <Title text="Coming soon" />
      <MoviesList data={data} loading={isLoading} updateParams={updateParams} />
    </div>
  );
}
