import useGetDataFromApi from "../../hooks/useGetDataFromApi";
import GridContainer from "../../ui/GridContainer";
import List from "../../ui/List";
import Spinner from "../../ui/loader/Spinner";
import Pagination from "../../ui/Pagination";

export default function Trending() {
  const { data, isLoading, updateParams, error } =
    useGetDataFromApi(`trending/all/day`);

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
    <div className="w-full py-[10px]">
      <div className="mx-auto w-[90%] md:w-5/6">
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
      </div>
    </div>
  );
}
