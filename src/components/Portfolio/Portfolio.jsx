import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import Flejob from "../../img/flejob.az-min.png";
import Kidmapa from "../../img/kidmapa-min.png";
import Merit from "../../img/merit-brand-min.png";
import Panattasport from "../../img/panattasport-min.png";
import Megafruit from "../../img/megafruit-min.png";
import Haksan from "../../img/haksan-min.png";
import Flegri from "../../img/flegri-min.png";
import Fiorello from "../../img/fiorello.png";
import feridhacizade from "../../img/qqq.png";
import zadas from "../../img/zadas-min.png";
import lookbook from "../../img/lookbook-min.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
   
        <SwiperSlide>
          <img src={Flejob} alt="Flejob" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Kidmapa} alt="Kidmapa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Merit} alt="Merit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Panattasport} alt="Panattasport" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Megafruit} alt="Megafruit" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Haksan} alt="Haksan" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Flegri} alt="Flegri" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fiorello} alt="Fiorello" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={feridhacizade} alt="Ferid Hacizade feridhacizade.com" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={zadas} alt="Ferid Hacizade feridhacizade.com" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lookbook} alt="Ferid Hacizade feridhacizade.com" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
