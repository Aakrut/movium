import React from "react";
import { HeroSection, Row } from "../../components";
import Head from "next/head";

const movies = ({
  getNowPlaying,
  getTopRatedMovies,
  getUpComingMovies,
  getHorrorMovies,
  getSciFiMovies,
  getFantasyMovie,
  getComedyMovie,
}) => {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroSection res={getNowPlaying} />
      <Row data={getUpComingMovies} title="Upcoming Movies" />
      <Row data={getTopRatedMovies} title="Top Rated Movies" />
      <Row data={getHorrorMovies} title="Horror" />
      <Row data={getSciFiMovies} title="Sci-Fi" />
      <Row data={getFantasyMovie} title="Fantasy" />
      <Row data={getComedyMovie} title="Comedy" />
    </div>
  );
};

export default movies;

export async function getServerSideProps() {
  const [
    getNowPlayingRes,
    getUpComingMoviesRes,
    getTopRatedMoviesRes,
    getHorrorMoviesRes,
    getSciFiMoviesRes,
    getFantasyMovieRes,
    getComedyMovieRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1
      `),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=878`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=14`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`
    ),
  ]);

  const [
    getNowPlaying,
    getUpComingMovies,
    getTopRatedMovies,
    getHorrorMovies,
    getSciFiMovies,
    getFantasyMovie,
    getComedyMovie,
  ] = await Promise.all([
    getNowPlayingRes.json(),
    getUpComingMoviesRes.json(),
    getTopRatedMoviesRes.json(),
    getHorrorMoviesRes.json(),
    getSciFiMoviesRes.json(),
    getFantasyMovieRes.json(),
    getComedyMovieRes.json(),
  ]);

  return {
    props: {
      getNowPlaying: getNowPlaying,
      getUpComingMovies: getUpComingMovies,
      getTopRatedMovies: getTopRatedMovies,
      getHorrorMovies: getHorrorMovies,
      getSciFiMovies: getSciFiMovies,
      getFantasyMovie: getFantasyMovie,
      getComedyMovie: getComedyMovie,
    },
  };
}
