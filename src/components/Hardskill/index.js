import autocad from "../../assets/img/Hardskill/icons8-autocad.svg";
import solidworks from "../../assets/img/Hardskill/icons8-solidworks.svg";
import inventor from "../../assets/img/Hardskill/icons8-inventor.svg";
// import revit from "../../assets/img/Hardskill/icons8-revit.svg";
import powerbi from "../../assets/img/Hardskill/icons8-powerbi.svg";
import excel from "../../assets/img/Hardskill/icons8-excel.svg";
import "./style.scss";

const Hardskill = () => {


  return (
    <>
      <div id="hardskill" className="container-hardskill ">
      <h1 className="headingHardH1">Hard Skills</h1>
      <div className=" ">
        <ul>
          <li className="icon-hardskill"><img className="icon-img-hard" src={autocad} alt="Autodesk Autocad" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src={inventor} alt="Autodesk Inventor" /></li>
          {/* <li className="icon-hardskill"><img className="icon-img-hard" src={revit} alt="Autodesk Revit"/></li> */}
          <li className="icon-hardskill"><img className="icon-img-hard" src={solidworks} alt="SolidWorks"/></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src={powerbi} alt="Power BI"/></li>

          <li className="icon-hardskill"><img className="icon-img-hard" src={excel} alt="Excel" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="SpringBoot" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="My SQL" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="Postgre SQL" /></li>

          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React JS" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg" alt="Angular JS" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML" /> </li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS" /></li>

          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain-wordmark.svg" alt="Filezilla" /></li>

          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" alt="Matlab" /></li>
          <li className="icon-hardskill"><img className="icon-img-hard" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-original-wordmark.svg" alt="Moodle" /></li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Hardskill;
