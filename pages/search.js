import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../instance";

const Search = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    await axios
      .get(instance.fetchSearchMS(currentPage, search))
      .then((res) => {
        {
          setSearchResults(res.data.results);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleMore = async () => {
    await axios
      .get(instance.fetchSearchMS(currentPage + 1, search))
      .then((res) => {
        {
          setSearchResults([...searchResults, ...res.data.results]);
        }
      })
      .catch((error) => console.log(error));
  };

  console.log(searchResults);

  return (
    <Wrapper>
      <div className="container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="button-search"
            disabled={!search}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  color: white;

  .container {
    max-width: 1234px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-container {
    margin: 100px 0 10px 0;
  }

  .search-input {
    outline: none;
    border: none;
    margin-right: 10px;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: "Poppins";
    color: #2547fc;
    font-weight: 400;
    transition: all 0.25s ease-in-out;
  }

  .button-search {
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Poppins";
    background: #2547fc;
    color: white;
    transition: all 0.35s ease-in-out;

    &:hover {
      box-shadow: 0px 5px 60px 11px rgba(37, 71, 252, 0.58);
      transform: translate(0, -5px);
    }
  }

  .button-search:disabled {
    background: transparent;
    color: white;
    cursor: no-drop;
    border: 1px solid white;

    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
`;
