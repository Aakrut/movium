import "../styles/globals.css";
import { Header } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
