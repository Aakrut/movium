import { HeroSection } from "../components";

export default function Home({ getTrending }) {
  return (
    <>
      <div>
        <HeroSection getTrending={getTrending} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return {
    props: { getTrending: data },
  };
}
