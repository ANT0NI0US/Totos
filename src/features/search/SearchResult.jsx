import { useParams } from "react-router-dom";
import useGetDataFromApi from "../../hooks/useGetDataFromApi";
import GridContainer from "../../ui/GridContainer";
import List from "../../ui/List";
import Spinner from "../../ui/loader/Spinner";
import Pagination from "../../ui/Pagination";
import Title from "@/ui/Title";

export default function SearchResult() {
  const { searchTitle, movieType } = useParams();
  const { data, isLoading, updateParams } = useGetDataFromApi(
    `search/${movieType}?query=${searchTitle}&include_adult=true`,
  );

  const totalPages = data?.total_pages || 1;
  const currentPage = data?.page || 1;

  const handleNextPage = () => {
    if (currentPage) {
      updateParams({ page: Number(currentPage) + 1 });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage && currentPage > 1) {
      updateParams({ page: Number(currentPage) - 1 });
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="container space-y-4 py-[30px]">
      <Title text={`Results For ${searchTitle}`} />
      {!data?.results?.length ? (
        <p className="text-center text-2xl font-extrabold text-orange">
          No results found.
        </p>
      ) : (
        <>
          <GridContainer>
            <List movies={data?.results} />
          </GridContainer>

          {/* PAGINATION */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={data?.total_results}
            goToNextPage={handleNextPage}
            goToPreviousPage={handlePreviousPage}
          />
        </>
      )}
    </div>
  );
}
