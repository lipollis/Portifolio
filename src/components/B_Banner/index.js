/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./style.scss";
import Typed from "react-typed";
import Particulas from "../Particles";



const Banner = () => {


  return (
<>
{/* <div class="parallax"></div> */}
    <div id="banner" className="header-wraper parallax">
      <Particulas />
      <div className="main-info">
        <h1 className="titulo">ALINE POLLIS</h1>

        <Typed
          className="typed-text"
          strings={["Engenheira", "FullStack"]}
          typeSpeed={60}
          backspeed={60}
          loop
        />

        <a href="#footer" ><button className="btn-main-offer"> Contato </button></a>

      </div>
    </div>

</>
  )
}

export default Banner;