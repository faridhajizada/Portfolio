import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      <span className="number-text">+994 77 388 42 42</span>
        <span className="mail-text">Farid0558475484@gmail.com</span>
     
        {/* <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div> */}
                <div className="i-icons">
          <a href="https://github.com/Farid0558475484"><img src={Github} alt="" /></a>
           <a href="https://www.linkedin.com/in/farid-hacizade-bab228167/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/farid_hajizade/"><img src={Instagram} alt="" /></a>
      
 
        </div>
      </div>
    </div>
  );
};

export default Footer;
