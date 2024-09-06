import React, { useState, useEffect } from "react";
import { Repository } from "../types/repoSliceTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import Pagination from "./Pagination";
import Sort from "./Sort";
import { sortRepositories } from "../utils/sortRepositories";
import style from "../styles/RepositoryTable.module.scss";
import { fetchRepositories } from "../features/repoSlice";
import { useAppDispatch } from "../redux/hooks";
import RepositoryMoreDetails from "./RepositoryMoreDetails";

interface RepositoryTableProps {
  repositories: Repository[];
  onSelect: (repo: Repository) => void;
}

const RepositoryTable: React.FC<RepositoryTableProps> = ({
  repositories,
  onSelect,
}) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<
    "stargazers_count" | "forks_count" | "updated_at" | "name"
  >("stargazers_count");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRepositories(searchTerm));
  }, [searchTerm]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleRowsPerPageChange = (event: SelectChangeEvent<number>) => {
    setRowsPerPage(parseInt(event.target.value as string, 10));
    setPage(1);
  };

  const handleSortColumnChange = (event: SelectChangeEvent<string>) => {
    setSortColumn(
      event.target.value as
        | "stargazers_count"
        | "forks_count"
        | "updated_at"
        | "name"
    );
  };

  const handleSortDirectionChange = (
    event: SelectChangeEvent<"asc" | "desc">
  ) => {
    setSortDirection(event.target.value as "asc" | "desc");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Фильтрация репозиториев по имени
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Сортировка и пагинация
  const sortedRepositories = sortRepositories(
    filteredRepositories,
    sortColumn,
    sortDirection
  );
  const paginatedRepos = sortedRepositories.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleRowClick = (repo: Repository) => {
    setSelectedRepo(repo);
    onSelect(repo);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div className={style.searchContainer}>
          <TextField
            variant="outlined"
            placeholder="Поиск по названию"
            onChange={handleSearch}
            style={{ margin: "16px" }}
          />
          <Sort
            sortColumn={sortColumn}
            onSortColumnChange={handleSortColumnChange}
            sortDirection={sortDirection}
            onSortDirectionChange={handleSortDirectionChange}
          />
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Язык</TableCell>
                <TableCell>Число форков</TableCell>
                <TableCell>Число звёзд</TableCell>
                <TableCell>Дата обновления</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRepos.map((repo) => (
                <TableRow key={repo.id} onClick={() => handleRowClick(repo)}>
                  <TableCell>{repo.name}</TableCell>
                  <TableCell>{repo.language}</TableCell>
                  <TableCell>{repo.forks_count}</TableCell>
                  <TableCell>{repo.stargazers_count}</TableCell>
                  <TableCell>
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            page={page}
            rowsPerPage={rowsPerPage}
            totalItems={filteredRepositories.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </TableContainer>
      </div>
      <div
        style={{
          width: "300px",
          padding: "16px",
          borderLeft: "1px solid #ccc",
        }}
      >
        {selectedRepo ? (
          <div>
            <RepositoryMoreDetails selectedRepo={selectedRepo} />
          </div>
        ) : (
          <p>Выберите репозиторий для отображения деталей.</p>
        )}
      </div>
    </div>
  );
};

export default RepositoryTable;
