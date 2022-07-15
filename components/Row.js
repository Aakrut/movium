import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { coverImage } from "../utils/image";

import { Swiper, SwiperSlide } from "swiper/react";

const Row = ({ data, title }) => {
  return (
    <Wrapper>
      <h2 className="title">{title}</h2>
      <div className="container">
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView="auto">
          {data.results.map((res) => {
            return (
              <SwiperSlide key={res.id}>
                <div key={res.id} className="data__container">
                  <Image
                    src={coverImage + res.poster_path}
                    alt={res.title || res.original_title}
                    layout="intrinsic"
                    height="350px"
                    width="250px"
                    className="container-image"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
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

  .swiper-slide {
    width: 18%;

    @media (max-width: 1280px) {
      width: 21%;
    }

    @media (max-width: 1024px) {
      width: 24%;
    }

    @media (max-width: 820px) {
      width: 34%;
    }

    @media (max-width: 768px) {
      width: 36%;
    }

    @media (max-width: 540px) {
      width: 50%;
    }

    @media (max-width: 420px) {
      width: 70%;
    }

    @media (max-width: 380px) {
      width: 75%;
    }

    @media (max-width: 280px) {
      width: 100%;
    }
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

    @media (max-width: 412px) {
    }
  }
`;
