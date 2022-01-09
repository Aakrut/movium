import Head from 'next/head'
import Image from 'next/image'
import HomeHero from './components/sections/homeHero'


export default function Home({ nowPlaying }) {

  return (
    <>
      <HomeHero results={ nowPlaying }/>
    </>
  );
}


export async function getServerSideProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();

  return {
    props: {
      nowPlaying: data,
    },
  };
}
