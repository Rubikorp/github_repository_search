import * as React from "react";
import {
  DataGrid,
  GridCell,
  GridColDef,
} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Repository } from "../types/repoSliceTypes";

const columns: GridColDef[] = [
  { 
    field: "name", 
    headerName: "Название",
    flex: 1,
  },
  { 
    field: "language", 
    headerName: "Язык",
    flex: 1
  },
  {
    field: "forks_count",
    headerName: "Число форков",
    flex: 1
  },
  {
    field: "stargazers_count",
    headerName: "Число звезд",
    flex: 1,
  },
  {
    field: "updated_at",
    headerName: "Дата обновления",
    type: "date",
    valueGetter: (date: string): Date => {
      return new Date(date)
    },
    flex: 1
  },
];

const paginationModel = { page: 0, pageSize: 5 };

interface IRepositoryTableProps {
  repositories: Repository[];
  onSelect: React.Dispatch<React.SetStateAction<Repository | null>>;
}

const RepositoryTable: React.FC<IRepositoryTableProps> = ({
  repositories,
  onSelect,
}) => {
  return (
    <Paper sx={{ height: "86.7vh", flex: 2}}>
      <DataGrid
        rows={repositories}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: "none" }}
        disableColumnMenu={true}
        disableColumnResize={true}
        disableRowSelectionOnClick={true}
        onCellClick={(e)=> onSelect(e.row)}
      />
    </Paper>
  );
};

export default RepositoryTable;
