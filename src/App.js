// eslint-disable-next-line

import { Component } from 'react';
import Navbar from "./components/A_Navbar/index";
import Banner from "./components/B_Banner/index";
import About from "./components/C_About/index";
import LinhaTempo from "./components/D_LinhaTempo/index";
// import MapCards from "./components/E_Portifolio/MapCard";
import Footer from "./components/G_Footer/index";
import './App.scss';
import Softskill from './components/Softskill';
import Hardskill from './components/Hardskill';
import Portifolio from './components/E_Portifolio/carousel-minimal';
// import SwiperComponent from './components/Swiper/SwiperComponent';

export default class App extends Component {

  constructor() {
    super( );
  

 this.user = 'Aline Pollis';
  }
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <About />
        <Softskill />
        <Hardskill />
        <LinhaTempo />
        {/* <MapCards /> */}
        <Portifolio />
        {/* <SwiperComponent /> */}
        <Footer owner={this.user} />
      </>
    );
  }

}
