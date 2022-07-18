import React from "react";
import { HeroSectionShow, RowShow } from "../../components";
import Head from "next/head";

const show = ({
  getOnTheAir,
  getTodaysSpecial,
  getTopRatedShows,
  getActionShow,
  getComedyShow,
  getMysteryShow,
  getSciFiFantasyShow,
}) => {
  return (
    <div>
      <Head>
        <title>Movium - Show</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroSectionShow res={getOnTheAir} />
      <RowShow data={getTopRatedShows} title="Top Rated Show" />
      <RowShow data={getTodaysSpecial} title="Today's Special" />
      <RowShow data={getActionShow} title="Action & Adventure" />
      <RowShow data={getComedyShow} title="Comedy" />
      <RowShow data={getMysteryShow} title="Mystery" />
      <RowShow data={getSciFiFantasyShow} title="Sci-Fi" />
    </div>
  );
};

export default show;

export async function getServerSideProps() {
  const [
    getOnTheAirRes,
    getTodaysSpecialRes,
    getTopRatedShowsRes,
    getActionShowRes,
    getComedyShowRes,
    getMysteryShowRes,
    getSciFiFantasyShowRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=10759`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=35`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=9648`
    ),
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_genres=10765`
    ),
  ]);

  const [
    getOnTheAir,
    getTodaysSpecial,
    getTopRatedShows,
    getActionShow,
    getComedyShow,
    getMysteryShow,
    getSciFiFantasyShow,
  ] = await Promise.all([
    getOnTheAirRes.json(),
    getTodaysSpecialRes.json(),
    getTopRatedShowsRes.json(),
    getActionShowRes.json(),
    getComedyShowRes.json(),
    getMysteryShowRes.json(),
    getSciFiFantasyShowRes.json(),
  ]);

  return {
    props: {
      getOnTheAir: getOnTheAir,
      getTodaysSpecial: getTodaysSpecial,
      getTopRatedShows: getTopRatedShows,
      getActionShow: getActionShow,
      getComedyShow: getComedyShow,
      getMysteryShow: getMysteryShow,
      getSciFiFantasyShow: getSciFiFantasyShow,
    },
  };
}
