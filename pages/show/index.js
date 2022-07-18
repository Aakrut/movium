import React from "react";
import { HeroSectionShow, RowShow } from "../../components";

const show = ({ getOnTheAir, getTodaysSpecial, getTopRatedShows }) => {
  return (
    <div>
      <HeroSectionShow res={getOnTheAir} />
      <RowShow data={getTopRatedShows} title="Top Rated Show" />
      <RowShow data={getTodaysSpecial} title="Today's Special" />
    </div>
  );
};

export default show;

export async function getServerSideProps() {
  const [getOnTheAirRes, getTodaysSpecialRes, getTopRatedShowsRes] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
    ]);

  const [getOnTheAir, getTodaysSpecial, getTopRatedShows] = await Promise.all([
    getOnTheAirRes.json(),
    getTodaysSpecialRes.json(),
    getTopRatedShowsRes.json(),
  ]);

  return {
    props: {
      getOnTheAir: getOnTheAir,
      getTodaysSpecial: getTodaysSpecial,
      getTopRatedShows: getTopRatedShows,
    },
  };
}
