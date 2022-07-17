import { HeroSection, Row, RowShow } from "../components";

export default function Home({
  getTrending,
  getPopularMovies,
  getPopularShows,
  getTopRatedMovies,
  getTopRatedShows,
}) {
  return (
    <>
      <div>
        <HeroSection res={getTrending} />
        <Row data={getPopularMovies} title="Popular Movies" />
        <RowShow data={getPopularShows} title="Popular Shows" />
        <Row data={getTopRatedMovies} title="Top Rated Movies" />
        <RowShow data={getTopRatedShows} title="Most Watched Shows" />
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
  ]);

  const [
    getTrending,
    getPopularMovies,
    getPopularShows,
    getTopRatedMovies,
    getTopRatedShows,
  ] = await Promise.all([
    getTrendingRes.json(),
    getPopularMoviesRes.json(),
    getPopularShowsRes.json(),
    getTopRatedMoviesRes.json(),
    getTopRatedShowsRes.json(),
  ]);

  return {
    props: {
      getTrending: getTrending,
      getPopularMovies: getPopularMovies,
      getPopularShows: getPopularShows,
      getTopRatedMovies: getTopRatedMovies,
      getTopRatedShows: getTopRatedShows,
    },
  };
}
