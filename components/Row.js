import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { coverImage } from "../utils/image";

const Row = ({ data, title }) => {
  return (
    <Wrapper>
      <h2 className="title">{title}</h2>
      <div className="container">
        {data.results.map((res) => {
          return (
            <div key={res.id} className="data__container">
              <Image
                src={coverImage + res.poster_path}
                alt={res.title || res.original_title}
                layout="fixed"
                height="350px"
                width="250px"
                className="container-image"
              />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Row;

const Wrapper = styled.div`
  margin: 10px 0;
  overflow: hidden;
  width: 100%;
  .title {
    padding: 0 0 0 30px;
    color: white;
    font-size: 30px;
    font-family: "Poppins";
    margin: 20px 0;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 0 0 0 30px;
  }

  .container::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .container::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .container::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  .data__container {
    width: 280px;
    height: max-content;
    margin: 0 10px 0 0;
    border-radius: 12px;
  }

  .container-image {
    border-radius: 5px;
  }
`;
