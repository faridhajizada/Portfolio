import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
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
import akbagro from "../../img/akbagro.png";
import jpvins from "../../img/jpvins.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>My Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://flejob.az/">
            <img src={Flejob} alt="Flejob" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://kidmapa.com/">
            <img src={Kidmapa} alt="Kidmapa" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://merit-brand.com/">
            <img src={Merit} alt="Merit" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://unitedsport.uz/index.php?route=common/home">
            <img src={Panattasport} alt="Panattasport" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="megafruit.az">
            <img src={Megafruit} alt="Megafruit" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://haksan.com.az/">
            <img src={Haksan} alt="Haksan" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://flejob.az/">
            <img src={Flegri} alt="Flegri" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://akbagro.az/">
            <img src={akbagro} alt="Ferid Hacizade feridhacizade.com" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://jpvins.com/">
            <img src={jpvins} alt="Ferid Hacizade feridhacizade.com" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://feridhacizade.com/">
            <img src={Fiorello} alt="Fiorello" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://feridhacizade.com/">
            <img src={feridhacizade} alt="Ferid Hacizade feridhacizade.com" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://feridhacizade.com/">
            <img src={zadas} alt="Ferid Hacizade feridhacizade.com" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://feridhacizade.com/">
            <img src={lookbook} alt="Ferid Hacizade feridhacizade.com" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
