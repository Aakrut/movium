import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



const HomeHero = ({results}) => {

  return (
    <>
      <Carousel
        autoPlay={true}
        centerSlidePercentage={100}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        swipeable={true}
        interval="3000"
        stopOnHover={true}
        transitionTime="500"
      >
        
        {
          results.results.map((item) => {
            return (
              <div key={item.id} >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt="venom"
                  layout="responsive"
                  width={1000}
                  height={400}
                >
                </Image>
              </div>
            );
          })
       }
      </Carousel>
    </>
  );
};

export default HomeHero;

