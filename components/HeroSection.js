import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { bgImage, coverImage } from "../utils/image";

const HeroSection = ({ getTrending }) => {
  console.log(getTrending);

  return (
    <>
      <Wrapper>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
        >
          {getTrending.results.map((data) => {
            return (
              <BgContainer key={data.id} image={bgImage + data.backdrop_path}>
                <div className="overlay"></div>
                <div className="details-main">
                  <div className="details">
                    <h3 className="title">
                      {data.title || data.original_name}
                    </h3>
                    <h5 className="overview">
                      {data.overview.length > 120
                        ? data.overview.slice(0, 150) + "..."
                        : data.overview}
                    </h5>
                    <div className="buttons">
                      <Button primary>View Trailer</Button>
                      <Button>Details</Button>
                    </div>
                  </div>
                  <img
                    src={coverImage + data.poster_path}
                    alt={data.title || data.original_name}
                    className="image-cover"
                  />
                </div>
              </BgContainer>
            );
          })}
        </Carousel>
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
  background: url(${({ image }) => image}) no-repeat center center/cover;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  z-index: -2;
  position: relative;

  .overlay {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
  }

  .details-main {
    z-index: 1;
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
    @media (max-width: 768px) {
      font-size: 15px;
      text-align: center;
    }
  }

  .image-cover {
    width: 200px;
    height: 400px;
    max-width: fit-content;
    max-height: max-content;
    border-radius: 5px;
    
  }

  .buttons {
    @media (max-width: 768px) {
      align-self: center;
    }
  }
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "black" : "white")};
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
`;
