import React from "react";
import styled from "styled-components";
import { bgImage, coverImage } from "../../utils/image";
import { Back, VideoCircle } from "iconsax-react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Cast, Row, RowShow } from "../../components";

const Series = ({ showDetails, similarShow, castMember }) => {
  const router = useRouter();

  console.log(showDetails);

  return (
    <>
      <Wrapper>
        <div
          className="bg_container"
          style={{
            background: `url(${
              bgImage + showDetails.backdrop_path
            }) no-repeat center center/cover `,
          }}
        >
          <div onClick={() => router.back()} className="return-page">
            <Back size="32" color="#d9e3f0" className="return-icon" />
          </div>
        </div>

        <div className="container">
          <div className="movie-main-details">
            <div className="details-2">
              <Image
                src={coverImage + showDetails.poster_path}
                alt={showDetails.name || showDetails.original_name}
                layout="intrinsic"
                height="350px"
                width="250px"
                className="container-image"
              />
            </div>

            <div className="details-1">
              <h1 className="title">
                {showDetails.name || showDetails.original_name}
              </h1>

              <div className="details-3">
                <p className="det lang">{showDetails.original_language}</p>
                <p className="det rate">
                  Rating - {showDetails.vote_average?.toFixed(1)}/10
                </p>
                <p className="det">Seasons - {showDetails?.seasons?.length} </p>
              </div>

              <div className="genres-container">
                {showDetails.genres?.slice(0, 3).map((data) => (
                  <p key={data.id} className="genres">
                    {data.name}
                  </p>
                ))}
              </div>

              <div>
                <button className="trailer-button">
                  <VideoCircle size="32" color="#d9e3f0" variant="Bold" />
                  Watch Trailer
                </button>
              </div>

              <div className="overview-container">
                <h3 className="story-line">Story Line</h3>
                <h4 className="overview">{showDetails.overview}</h4>
              </div>

              {showDetails.tagline ? (
                <p className="tagline">
                  Tag Line :{" "}
                  <span className="tag"> {showDetails.tagline} </span>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Wrapper>
      <Cast data={castMember} title="Cast & Crew" />
      <RowShow data={similarShow} title="Similar Shows" />
    </>
  );
};

export default Series;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((response) => response.json());

  const requestSimilar = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());

  const requestCast = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      showDetails: request,
      similarShow: requestSimilar,
      castMember: requestCast,
    },
  };
}

const Wrapper = styled.div`
  transition: all 0.35s ease-in-out;
  color: white;
  .bg_container {
    width: 100%;
    height: 60vh;
    position: relative;
  }

  .return-page {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 80px;
    left: 150px;
    column-gap: 10px;
    background: rgba(0, 0, 0, 0.5);
    width: max-content;
    border-radius: 12px;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid white;

    @media (max-width: 768px) {
      left: 20px;
    }
  }

  .return-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
  }

  .container {
    max-width: 1234px;
    margin: 20px auto;
  }

  .container-image {
    border-radius: 5px;
    height: 350px;
    width: 250px;
  }

  .movie-main-details {
    display: grid;
    grid-template-columns: 260px auto;
    gap: 10px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .title {
    font-family: "Poppins";
    font-size: 60px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 40px;
      margin: 15px 0;
      text-align: center;
    }

    @media (max-width: 412px) {
      font-size: 25px;
    }

    @media (max-width: 400px) {
      font-size: 15px;
    }
  }

  .genres-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: fit-content;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    margin: 5px;
    text-align: center;
    @media (max-width: 640px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 412px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .genres {
    background: rgba(255, 255, 255, 0.1);
    color: #9a9a9a;
    backdrop-filter: blur(120px);
    font-family: "Poppins";
    border-radius: 15px;
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);

    @media (max-width: 412px) {
      padding: 5px 10px;
    }
  }

  .trailer-button {
    padding: 10px 20px;
    border: none;
    outline: none;
    border-radius: 30px;
    font-family: "Poppins";
    font-size: 20px;
    margin: 20px 0;
    background: #2547fc;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  }

  .story-line {
    font-family: "Poppins";
    font-size: 30px;
    font-weight: 600;
  }

  .tagline {
    font-family: "Poppins";
    font-size: 20px;
    margin: 10px 0;
    background: rgba(255, 255, 255, 0.1);
    width: max-content;
    padding: 5px 10px;
    border-radius: 12px;

    @media (max-width: 912px) {
      inline-size: auto;
      overflow-wrap: break-word;
    }

    @media (max-width: 820px) {
      inline-size: auto;
      overflow-wrap: break-word;
    }

    @media (max-width: 640px) {
      font-size: 15px;
      inline-size: 100%;
      overflow-wrap: break-word;
    }

    @media (max-width: 375px) {
      font-size: 11px;
      inline-size: 100%;
      overflow-wrap: break-word;
    }

    @media (max-width: 280px) {
      font-size: 10px;
    }
  }

  .tag {
    color: #2547fc;
    overflow-wrap: break-word;

    @media (max-width: 640px) {
      inline-size: 100%;
      overflow-wrap: break-word;
    }

    @media (max-width: 375px) {
      inline-size: 100%;
      overflow-wrap: break-word;
    }
  }

  .details-2 {
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .details-1 {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 12px;
    }
  }

  .details-3 {
    font-family: "Poppins";
    display: flex;
    gap: 10px;
  }

  .det {
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 10px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    margin-bottom: 10px;

    @media (max-width: 640px) {
      font-size: 12px;
    }
  }

  .rate {
    color: #fff500;
  }

  .lang {
    color: #2547fc;
  }

  .overview-container {
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
    }
  }

  .overview {
    font-family: "Poppins";
    color: #9a9a9a;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
