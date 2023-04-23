import React, { useContext } from "react";
import "./Works.css";
import Js from "../../img/js1.png";
import React1 from "../../img/react.png";
import c1 from "../../img/c1.png";
import a1 from "../../img/a1.png";
import s1 from "../../img/s1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
            My favorite technologies
          </span>
          <span>technologies</span>

          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">contact Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Js} alt="" width={100} />
          </div>
          <div className="w-secCircle">
            <img src={React1} alt="" width={100} />
          </div>
          <div className="w-secCircle">
            <img src={s1} alt="" width={100} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={a1} alt="" width={100} />
          </div>
          <div className="w-secCircle">
            <img src={c1} alt="" width={100} />
          </div>
        </motion.div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
