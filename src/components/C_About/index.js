// eslint-disable-next-line

import "./style.scss";
import euAline from "../../assets/img/Me.JPG";

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="image-container col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={euAline} alt="Minha foto." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12 aboutme">
          <h1 className="heading">About Me</h1>
          <p className="textBody">
            Paulistana, filha de gaúcho com paulista, sou apaixonada por
            praticar corrida e por música. Possuo graduação em Engenharia de
            Automação e Controle, pela UFABC, gosto muito de robótica,
            instalações elétricas e o mundo da Industria 4.0.
          </p>

          <p className="textBody">
            Tenho experiência em projeto de produtos (estamparia, injeção
            plástica e prototipagem) utilizando ferramentas CAD 2D e 3D, com o
            AutoCAD, Inventor e SolidWorks. Participação na criação de novos
            produtos, simulações de aplicações, análises de soluções técnicas
            para redução de custos e melhorias de qualidade e elaboração de
            documentação com especificações de cada projeto. Participante membro
            da CIPA por um período na Tomax.
          </p>

          <p className="textBody">
            Atualmente tenho me dedicado no desenvolvimento de novas habilidades
            na área de TI, como Desenvolvedor Fullstack, trabalhando com
            linguagens: JAVA, SQL, PHP, JavaScript, e alguns frameworks como
            ReactJS, Angular e SpringBoot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
