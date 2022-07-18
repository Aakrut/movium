import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { instance } from "../instance";
import { coverImage } from "../utils/image";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

const Search = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchResults, setSearchResults] = useState([]);

  const [totalPages, setTotalPages] = useState(0);

  const router = useRouter();

  const handleSearch = async () => {
    await axios
      .get(instance.fetchSearchMS(currentPage, search))
      .then((res) => {
        {
          setTotalPages(res.data.total_pages);
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
          setCurrentPage(currentPage + 1);
          setSearchResults([...searchResults, ...res.data.results]);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <Head>
        <title>Movium - Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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

        <div className="result-container">
          {!search ? (
            <div className="mock-text">
              Please use the search bar to find the movie or show you want.
            </div>
          ) : (
            <>
              {!searchResults ? (
                <div>No Results</div>
              ) : (
                <div className="main">
                  <h1 className="keyword">Search Related To {search}</h1>
                  <div className="results-main-grid">
                    {searchResults?.map((res) => {
                      return (
                        <div
                          key={res.id}
                          className="data__container"
                          onClick={() => {
                            if (res.media_type === "tv") {
                              router.push(`/show/${res.id}`);
                            } else {
                              router.push(`/movies/${res.id}`);
                            }
                          }}
                        >
                          <Image
                            src={coverImage + res.poster_path}
                            alt={res.title || res.original_title}
                            layout="intrinsic"
                            height="350px"
                            width="250px"
                            className="container-image"
                          />
                          <div className="overlay">
                            <p className="rating">
                              {res.vote_average?.toFixed(1)}
                            </p>
                          </div>
                          <h3 className="name">
                            {res.title?.length > 30 ||
                            res.original_title?.length > 30 ||
                            res.name?.length > 30 ||
                            res.original_name?.length > 30
                              ? res.title?.slice(0, 30) + "..." ||
                                res.original_title?.slice(0, 30) + "..." ||
                                res.name?.slice(0, 30) + "..." ||
                                res.original_name?.slice(0, 30) + "..."
                              : res.title ||
                                res.original_title ||
                                res.name ||
                                res.original_name}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                  {totalPages > 1 && currentPage < totalPages && (
                    <button className="load-more-button" onClick={handleMore}>
                      Load More...
                    </button>
                  )}
                </div>
              )}
            </>
          )}
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
    flex-direction: column;
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

  .mock-text {
    color: white;
    font-family: "Poppins";
    font-weight: 500;
    margin-top: 100px;
    text-align: center;
    font-size: 60px;

    @media (max-width: 768px) {
      font-size: 45px;
    }

    @media (max-width: 640px) {
      font-size: 30px;
    }

    @media (max-width: 412px) {
      font-size: 15px;
    }
  }

  .keyword {
    text-align: center;
    font-family: "Poppins";
  }

  .main {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
  }

  .results-main-grid {
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      margin: 30px 10px;
    }
  }

  .data__container {
    width: 100%;
    height: max-content;
    margin: 0 10px 0 0;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
  }

  .container-image {
    border-radius: 5px;
    transition: all 0.35s ease-in-out;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.35s ease-in-out;
    border-radius: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  }

  .rating {
    color: #fff500;
    font-family: "Poppins";
  }

  .name {
    color: white;
    font-family: "Poppins";
    margin: 0 10px 0 0;
  }

  .load-more-button {
    width: max-content;
    align-self: center;
    outline: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 10px;
    font-family: "Poppins";
    margin-top: 10px;
    border-radius: 6px;
    width: max-content;
    font-weight: 600;
    font-size: 25px;
    background: #2547fc;
    color: white;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
