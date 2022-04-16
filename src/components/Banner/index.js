/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import './style.sass';
import Typed from "react-typed";


const Banner = () => {

  return (
<>
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1 className="titulo">ALINE POLLIS</h1>

        <Typed
          className="typed-text"
          strings={["Engenheira", "FullStack"]}
          typeSpeed={60}
          backspeed={60}
          loop
        />

        <a href="#contacts" ><button className="btn-main-offer"> Contato </button></a>

      </div>
    </div>
</>
  )
}

export default Banner;