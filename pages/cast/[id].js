import React from "react";
import styled from "styled-components";
import { coverImage } from "../../utils/image";
import { Back } from "iconsax-react";
import { useRouter } from "next/router";
import Image from "next/image";
import { CastCredit } from "../../components";
import Head from "next/head";

const CastM = ({ castDetails, castCredits }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{castDetails.name || castDetails.original_name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper>
        <div className="bg_container">
          <div onClick={() => router.back()} className="return-page">
            <Back size="32" color="#d9e3f0" className="return-icon" />
          </div>
        </div>

        <div className="container">
          <div className="movie-main-details">
            <div className="details-2">
              <Image
                src={coverImage + castDetails.profile_path}
                alt={castDetails.name || castDetails.original_name}
                layout="intrinsic"
                height="350px"
                width="250px"
                className="container-image"
              />
            </div>

            <div className="details-1">
              <h1 className="title">
                {castDetails.name || castDetails.original_name}
              </h1>

              <div className="details-3">
                <p className="det lang">{castDetails.birthday}</p>
                <p className="det rate">
                  Popularity - {castDetails?.popularity}
                </p>
                <p className="det">
                  Birth Place - {castDetails.place_of_birth} minutes
                </p>
              </div>

              <div>
                <button className="trailer-button">
                  {castDetails.known_for_department}
                </button>
              </div>

              <div className="overview-container">
                <h3 className="story-line">Biography</h3>
                <h4 className="overview">{castDetails.biography}</h4>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <CastCredit data={castCredits} title="Filmography" />
    </>
  );
};

export default CastM;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  ).then((response) => response.json());

  const requestBoth = await fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      castDetails: request,
      castCredits: requestBoth,
    },
  };
}

const Wrapper = styled.div`
  transition: all 0.35s ease-in-out;
  color: white;
  .bg_container {
    width: 100%;
    height: 20vh;
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
    font-family: "Manrope", sans-serif;
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
    grid-template-columns: repeat(4, auto);
    width: fit-content;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    margin: 5px;
    text-align: center;
    @media (max-width: 640px) {
      grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 412px) {
      grid-template-columns: repeat(2, auto);
    }
  }

  .genres {
    background: rgba(255, 255, 255, 0.1);
    color: #9a9a9a;
    backdrop-filter: blur(120px);
    font-family: "Manrope", sans-serif;
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
    font-family: "Manrope", sans-serif;
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
    font-family: "Manrope", sans-serif;
    font-size: 30px;
    font-weight: 600;
  }

  .tagline {
    font-family: "Manrope", sans-serif;
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
    font-family: "Manrope", sans-serif;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 10px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, max-content);
    }
  }

  .det {
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 10px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    margin-bottom: 10px;
    text-align: center;

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
    font-family: "Manrope", sans-serif;
    color: #9a9a9a;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
