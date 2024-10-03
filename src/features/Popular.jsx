import { useParams } from "react-router-dom";
import useGetDataFromApi from "@/hooks/useGetDataFromApi";
import GridContainer from "@/ui/GridContainer";
import List from "@/ui/List";
import Spinner from "@/ui/spinner/Spinner";
import Pagination from "@/ui/Pagination";
import Title from "@/ui/Title";

export default function Popular() {
  const { category } = useParams();
  const { data, isLoading, updateParams } = useGetDataFromApi(
    `${category}/popular`,
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
      <Title text="Popular" />

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
  );
}
