import { Flex, Text, Button, Box, Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { ReactNode, useState } from "react";

export function TablePagination() {
  const [activePage, setPage] = useState(1);
  const pagination = usePagination({ total: 10, initialPage: 1 });

  const handlePrevPage = () => {
    setPage(activePage - 1);
  };

  const handleNextPage = () => {
    setPage(activePage + 1);
  };

  const itemsPerPage = 5; // Number of items to display per page
  return (
    <div className="flex justify-between items-center py-[20px]">
      <button
        className="border border-[#E5E6E8] bg-white rounded-lg items-center p-2 flex itmes-center gap-[7px]"
        onClick={handlePrevPage}
        disabled={activePage === 1}
      >
        <ArrowLeft2 size="16" color="#514747" variant="Outline" />
        <span className="text-[#514747] text-[14px] ">Previous</span>
      </button>
      <Pagination
        value={activePage}
        onChange={setPage}
        total={Math.ceil(40 / itemsPerPage)}
        styles={(theme) => ({
          control: {
            "&[data-active]": {
              backgroundImage: theme.fn.gradient({
                from: "#3851DD",
                to: "#3851DD",
              }),
              border: 0,
            },

            "&:first-of-type": {
              display: "none !important",
            },
            "&:last-child": {
              display: "none !important",
            },
          },
        })}
      />
      <button
        className="p-2 flex border border-[#DBD9D9] gap-[7px] rounded-lg items-center"
        onClick={handleNextPage}
        disabled={activePage === 40 / itemsPerPage}
      >
        <span className="text-[#514747] text-[14px] ">Next</span>
        <ArrowRight2 size="16" color="#514747" variant="Outline" />
      </button>
    </div>
  );
}
