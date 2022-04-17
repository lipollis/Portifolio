  
import React from "react";
import "./style.scss";
import Particles  from "react-tsparticles";



const Particulas = () => {
    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

  return (
<>
 
   <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 60,
        fullScreen:{
          enable: false,
          zIndex:	2
          },
        interactivity: {
          
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            // resize: true,
          },
          modes: {
            bubble: {
              // distance: 400,
              // duration: 2,
              opacity: 0.8,
              size: 10,
              "color": {"value": "#FF4A3B"}
            },
          //   push: {
          //     quantity: 4,
          //   },
          //   repulse: {
          //     distance: 200,
          //     duration: 0.4,
          //   },
          },
        },
        particles: {
          // color: {
          //   value: "#ffffff",
          // },
          // links: {
          //   color: "#ffffff",
          //   distance: 150,
          //   enable: true,
          //   opacity: 0.5,
          //   width: 1,
          // },
          collisions: {
            enable: true,
          },
          move: {
            // direction: "none",
            enable: true,
            // outMode: "bounce",
            // random: false,
            speed: 1,
            // straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          // shape: {
          //   type: "circle",
          // },
          // size: {
          //   random: true,
          //   value: 5,
          // },
        },
        detectRetina: true,
      }}
    />


</>
  )
}

export default Particulas;