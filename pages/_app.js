import "../styles/globals.css";
import { Header ,Sidebar} from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import { useState } from "react";


function MyApp({ Component, pageProps }) {

   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
