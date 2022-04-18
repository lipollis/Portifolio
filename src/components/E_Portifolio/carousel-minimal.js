/* eslint-disable jsx-a11y/anchor-is-valid */
import Movie      from "../../assets/img/Projetos/Movie.png";
import Helpdesk     from "../../assets/img/Projetos/Helpdesk.png";
import AppRH        from "../../assets/img/Projetos/AppRH.png";
import WebApp       from "../../assets/img/Projetos/WebApp.png";
import Vagas        from "../../assets/img/Projetos/Vagas.png";
import Pokedex      from "../../assets/img/Projetos/Pokedex.png";
import React from "react";
import "./style.scss";
import { Carousel } from 'react-carousel-minimal';

function Portifolio() {
    
    const data = [
        {
          image: Movie,
          caption: "JAVA + SpringBoot + React.JS",
          button: "Github",
          git: "https://github.com/lipollis"
        },
        {
          image: Helpdesk,
          caption: "JAVA + SpringBoot + Angular",
          button: "Github",
          git: "https://github.com/lipollis"
        },
        {
          image: AppRH,
          caption: "JAVA + SpringBoot + HTML",
          button: "Github",
          git: "https://github.com/lipollis"
        },
        {
          image: WebApp,
          caption: "JAVA + SpringBoot + JSP",
          button: "Github",
          git: "https://github.com/lipollis"
        },
        {
          image: Vagas,
          caption: "JSON + Angular",
          button: "Github",
          git: "https://github.com/lipollis"
        },
        {
          image: Pokedex,
          caption: "HTML + CSS",
          button: "Github",
          git: "https://github.com/lipollis"
        }
      ];

      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
<>

<div id="portfolio" className="portfolio">
  <div className="background album py-5 bg-light">
    <div className="text-center">
      <h1 className="portfolio-h1"> Portfólio </h1>
    </div>

    <div className="container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">

      <Carousel
            data={data}
            time={3000}
            width="100%"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="contain"
            //slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "600px",
              margin: "40px auto",
            }}
          />

      </div>
    </div>

  </div>
</div>
</>


    );
}
export default Portifolio;
