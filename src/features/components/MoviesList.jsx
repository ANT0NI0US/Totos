import GridContainer from "@/ui/GridContainer";
import List from "@/ui/List";
import Pagination from "@/ui/Pagination";
import Spinner from "@/ui/spinner/Spinner";

export default function MoviesList({ data, loading, updateParams }) {
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

  if (loading) return <Spinner />;

  if (data?.results?.length === 0)
    return (
      <p className="!mt-10 text-center text-2xl font-extrabold text-orange">
        No results found.
      </p>
    );

  return (
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
  );
}
