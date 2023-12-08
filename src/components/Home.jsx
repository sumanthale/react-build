// import { useState } from "react";
import BgImg from "../assets/sanju.jpeg";
import UserImg from "../assets/image.png";
import CompanyImg from "../assets/company.png";
import DbImg from "../assets/db.png";
import FetImg from "../assets/fet.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Navigation module

// import required modules
import { Navigation } from "swiper/modules";

function Home() {
  const images = [UserImg, CompanyImg, FetImg, DbImg];
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
        className="h-[70vh] bg-cover bg-fixed pt-16 -mt-16"
      >
        <h1 className="text-center text-white font-bold text-3xl mb-4">
          SANJANA REDDY MANCHIKANTI
        </h1>
        <div className="Slider w-[600px] mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {images.map((img) => (
              <SwiperSlide key={img.id}>
                <img loading="lazy" src={img} alt="my imng" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Home;
