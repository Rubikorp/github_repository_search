import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";

interface SortProps {
  sortColumn: string;
  onSortColumnChange: (event: SelectChangeEvent<string>) => void;
  sortDirection: "asc" | "desc";
  onSortDirectionChange: (event: SelectChangeEvent<"asc" | "desc">) => void;
}

const Sort: React.FC<SortProps> = ({
  sortColumn,
  onSortColumnChange,
  sortDirection,
  onSortDirectionChange,
}) => {
  return (
    <div>
      <FormControl variant="outlined" style={{ margin: "16px" }}>
        <InputLabel id="sort-label">Сортировка по</InputLabel>
        <Select
          labelId="sort-label"
          value={sortColumn}
          onChange={onSortColumnChange}
        >
          <MenuItem value="stargazers_count">Число звёзд</MenuItem>
          <MenuItem value="forks_count">Число форков</MenuItem>
          <MenuItem value="updated_at">Дата обновления</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{ margin: "16px" }}>
        <InputLabel id="direction-label">Направление</InputLabel>
        <Select
          labelId="direction-label"
          value={sortDirection}
          onChange={onSortDirectionChange}
        >
          <MenuItem value="asc">По возрастанию</MenuItem>
          <MenuItem value="desc">По убыванию</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
