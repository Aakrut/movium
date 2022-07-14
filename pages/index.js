import Head from "next/head";
import Image from "next/image";
import { HeroSection } from "../components";

export default function Home({ getTrending }) {
  return (
    <>
      <div>
        <HeroSection getTrending={getTrending} />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni asperiores quaerat totam illum facilis, amet cupiditate voluptatum voluptate saepe enim doloremque, fugiat beatae ullam unde quibusdam officiis! Voluptate in iste vero ut a! Voluptatem, sequi corrupti magnam a illum aut quaerat, aliquam magni velit doloremque iste nesciunt! Est vero voluptatum distinctio harum? Facilis hic accusantium repudiandae. Tempora iusto ad expedita id praesentium recusandae nihil. Temporibus corrupti ad velit repudiandae provident dicta sed aliquid! Ipsam molestias eaque veritatis quisquam nam atque quis a consectetur! Id officiis aut cupiditate illo perferendis consequuntur veniam aperiam quis commodi facere officia fugiat, reiciendis animi molestiae fuga odit dolorum, recusandae sit incidunt hic voluptatum accusamus maiores tempora! Exercitationem sunt ea ad inventore explicabo, dolorem in mollitia! Dolor autem asperiores unde animi suscipit reprehenderit vel odio nulla velit? In possimus, quis laborum minima sequi quo, culpa odio quisquam provident neque vel cum illum incidunt odit iure, quod ex! Modi perferendis dignissimos rem, laboriosam eligendi obcaecati. Veniam consectetur laboriosam voluptatum rem, sit sapiente ipsam laborum. Rem, beatae eum? Dolorum deserunt quia blanditiis corporis, aut repudiandae optio beatae. Autem laborum ab quae animi quidem explicabo nesciunt ad alias perspiciatis dignissimos a assumenda eum accusantium velit voluptatum, fugiat impedit enim quam possimus voluptates? Quae fuga, neque expedita magnam tenetur delectus minima veniam assumenda quibusdam a corporis accusamus odio praesentium omnis, eveniet deleniti. Quidem fugit in impedit qui commodi praesentium eligendi. Est libero reprehenderit ut molestiae delectus adipisci nobis asperiores dignissimos dolore! Voluptates quod vero eaque possimus repellendus quo saepe at ipsam quaerat, nulla necessitatibus! Perspiciatis, reiciendis quibusdam itaque aut sed soluta cum minima dolores blanditiis temporibus atque officiis quod quae placeat nulla numquam. Assumenda a commodi nulla ad nesciunt cum quaerat, autem animi adipisci in asperiores consectetur corporis dolor aut doloremque deserunt vero eos temporibus, sit architecto, magni deleniti.
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return {
    props: { getTrending: data },
  };
}
