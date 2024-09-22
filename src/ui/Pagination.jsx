import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination({
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
  totalResults,
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-around gap-x-[10px] gap-y-[20px] rounded-md bg-primary/70 p-[10px] text-light sm:flex-nowrap sm:justify-between">
      <p>Total Pages: ({totalPages})</p>
      <div className="flex items-center gap-[5px]">
        <p className="flex gap-[4px]">
          Showing <span>{(currentPage - 1) * 20 + 1}</span> to{" "}
          <span>
            {currentPage === totalPages ? totalPages * 20 : currentPage * 20}
          </span>{" "}
          of <span>{totalResults}</span> results
        </p>
      </div>

      <div className="flexBetween gap-[20px]">
        <button
          className={`flex items-center gap-1 rounded-md p-[3px] ${currentPage === 1 ? "cursor-not-allowed" : ""}`}
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft className="text-2xl" />
          <span>Previous</span>
        </button>

        <button
          className={`flex items-center gap-1 rounded-md p-[3px] ${currentPage === totalPages ? "cursor-not-allowed" : ""}`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <span>Next</span>
          <MdKeyboardArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
