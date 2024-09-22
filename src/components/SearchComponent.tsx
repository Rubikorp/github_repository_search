import React, { useState, useEffect } from "react";

import { useAppDispatch } from "../redux/hooks";
import { fetchRepositories } from "../features/repoSlice";

import { TextField, Button } from "@mui/material";

import "../styles/SearchComponents.scss";

/*---------------import/\---------------*/

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onCLickSearch = (): void => {
    dispatch(fetchRepositories(searchTerm));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      onCLickSearch();
    }
  };

  return (
    <div className="header">
      <div className="header__container">
        <TextField
          id="fullWidth"
          fullWidth
          variant="outlined"
          placeholder="Поиск по названию..."
          onChange={handleSearch}
          size="small"
          className="textField"
          onKeyDown={(e)=>handleKeyPress(e)} 
        />
        <Button variant="contained" onClick={onCLickSearch} className="search-btn">
          ИСКАТЬ
        </Button>
      </div>
    </div>
  );
};

export default SearchComponent;
