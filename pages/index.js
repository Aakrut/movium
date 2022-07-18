import { HeroSection, Row, RowShow } from "../components";
import Head from "next/head";

export default function Home({
  getTrending,
  getPopularMovies,
  getPopularShows,
  getTopRatedMovies,
  getTopRatedShows,
  getActionMovies,
  getFamilyShows,
  getDocumentaryMovies,
}) {
  return (
    <>
      <Head>
        <title>Movium</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <HeroSection res={getTrending} />
        <Row data={getPopularMovies} title="Popular Movies" />
        <RowShow data={getPopularShows} title="Popular Shows" />
        <Row data={getTopRatedMovies} title="Top Rated Movies" />
        <RowShow data={getTopRatedShows} title="Most Watched Shows" />
        <Row data={getActionMovies} title="Action Movies" />
        <RowShow data={getFamilyShows} title="Family Shows" />
        <Row data={getDocumentaryMovies} title="Documentaries" />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const [
    getTrendingRes,
    getPopularMoviesRes,
    getPopularShowsRes,
    getTopRatedMoviesRes,
    getTopRatedShowsRes,
    getActionMoviesRes,
    getFamilyShowRes,
    getDocumentaryMoviesRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(`
      https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1
      `),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=10751`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`
    ),
  ]);

  const [
    getTrending,
    getPopularMovies,
    getPopularShows,
    getTopRatedMovies,
    getTopRatedShows,
    getActionMovies,
    getFamilyShows,
    getDocumentaryMovies,
  ] = await Promise.all([
    getTrendingRes.json(),
    getPopularMoviesRes.json(),
    getPopularShowsRes.json(),
    getTopRatedMoviesRes.json(),
    getTopRatedShowsRes.json(),
    getActionMoviesRes.json(),
    getFamilyShowRes.json(),
    getDocumentaryMoviesRes.json(),
  ]);

  return {
    props: {
      getTrending: getTrending,
      getPopularMovies: getPopularMovies,
      getPopularShows: getPopularShows,
      getTopRatedMovies: getTopRatedMovies,
      getTopRatedShows: getTopRatedShows,
      getActionMovies: getActionMovies,
      getFamilyShows: getFamilyShows,
      getDocumentaryMovies: getDocumentaryMovies,
    },
  };
}
