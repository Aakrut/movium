import React from "react";
import { HeroSection, Row } from "../../components";

const movies = ({ getNowPlaying, getTopRatedMovies, getUpComingMovies }) => {
  return (
    <div>
      <HeroSection res={getNowPlaying} />
      <Row data={getUpComingMovies} title="Upcoming Movies" />
      <Row data={getTopRatedMovies} title="Top Rated Movies" />
    </div>
  );
};

export default movies;

export async function getServerSideProps() {
  const [getNowPlayingRes, getUpComingMoviesRes, getTopRatedMoviesRes] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1
      `),
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
    ]);

  const [getNowPlaying, getUpComingMovies, getTopRatedMovies] =
    await Promise.all([
      getNowPlayingRes.json(),
      getUpComingMoviesRes.json(),
      getTopRatedMoviesRes.json(),
    ]);

  return {
    props: {
      getNowPlaying: getNowPlaying,
      getUpComingMovies: getUpComingMovies,
      getTopRatedMovies: getTopRatedMovies,
    },
  };
}
