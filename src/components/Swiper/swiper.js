

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SwiperComponent() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="../../assets/img/Projetos/Movie.png" alt="JAVA + SpringBoot + React.JS"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/Helpdesk.png" alt="JAVA + SpringBoot + Angular"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/AppRH.png" alt="JAVA + SpringBoot + HTML"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/WebApp.png" alt="JAVA + SpringBoot + JSP"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/Vagas.png" alt="JSON + Angular"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/Pokedex.png" alt="HTML + CSS"/>
        </SwiperSlide>
        
      </Swiper>
      
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="../../assets/img/Projetos/Movie.png" alt="JAVA + SpringBoot + React.JS"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/Helpdesk.png" alt="JAVA + SpringBoot + Angular"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/AppRH.png" alt="JAVA + SpringBoot + HTML"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/WebApp.png" alt="JAVA + SpringBoot + JSP"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/Vagas.png" alt="JSON + Angular"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/img/Projetos/Pokedex.png" alt="HTML + CSS"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
