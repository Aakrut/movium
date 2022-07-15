import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { bgImage, coverImage } from "../utils/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { AutoPlay } from "swiper";
import { useRouter } from "next/router";

const HeroSection = ({ getTrending }) => {
  const router = useRouter();

  SwiperCore.use([AutoPlay]);

  return (
    <>
      <Wrapper>
        <Swiper grabCursor={true}>
          {getTrending.results.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <BgContainer
                  key={data.id}
                  style={{
                    background: `url(${
                      bgImage + data.backdrop_path
                    }) no-repeat center center/cover`,
                  }}
                >
                  <div className="overlay"></div>
                  <div className="details-main">
                    <div className="details">
                      <h3 className="title">
                        {data.title || data.original_name}
                      </h3>
                      <h5 className="overview">
                        {data.overview.length > 120
                          ? data.overview.slice(0, 200) + "..."
                          : data.overview}
                      </h5>
                      <div className="buttons">
                        <Button
                          primary
                          onClick={() => router.push(`/movies/${data.id}`)}
                        >
                          Details
                        </Button>
                        <Button>Trailer</Button>
                      </div>
                    </div>
                    <img
                      src={coverImage + data.poster_path}
                      alt={data.title || data.original_name}
                      className="image-cover"
                    />
                  </div>
                </BgContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Wrapper>
    </>
  );
};

export default HeroSection;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 100%;
  transition: all 0.35s ease-in-out;
`;

const BgContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  z-index: 1;
  position: relative;
  cursor: pointer;

  .overlay {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
  }

  .details-main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    max-width: 1234px;
    margin: 0 auto;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      padding: 20px;
    }
  }

  .details {
    z-index: 4;
    text-align: left;
    font-family: "Poppins";
    display: flex;
    flex-direction: column;
  }

  .title {
    color: white;
    text-align: left;
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 30px;
      text-align: center;
    }
  }
  .overview {
    color: white;
    font-size: 25px;
    color: #969696;
    @media (max-width: 768px) {
      font-size: 15px;
      text-align: center;
    }
  }

  .image-cover {
    z-index: 4;
    width: 250px;
    height: 400px;
    max-width: fit-content;
    max-height: max-content;
    border-radius: 5px;

    @media (max-width: 768px) {
      width: 200px;
      height: 300px;
    }
  }

  .buttons {
    @media (max-width: 768px) {
      align-self: center;
    }
  }
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? " #2547FC;" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
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

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
