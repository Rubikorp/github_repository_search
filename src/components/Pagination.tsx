import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";

interface SortAndPaginationProps {
  page: number;
  rowsPerPage: number;
  totalItems: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const SortAndPagination: React.FC<SortAndPaginationProps> = ({
  page,
  rowsPerPage,
  totalItems,
  setPage,
  setRowsPerPage
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TablePagination
      component="div"
      count={totalItems}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default SortAndPagination;
