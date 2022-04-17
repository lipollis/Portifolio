import checklist from "../../assets/img/Softskill/checklist.svg";
import decision from "../../assets/img/Softskill/decision.svg";
import chameleon from "../../assets/img/Softskill/chameleon.svg";
import stylist from "../../assets/img/Softskill/style.svg";
import preference from "../../assets/img/Softskill/preference.svg";
import meee from "../../assets/img/Softskill/me.svg";

const Softskill = () => {


    return (
  <>
      <div id="softskill" className="container-softskill">
        
<div>
    <div><img className="img-soft " src={checklist} alt=" "></img></div>
    <div><p></p></div>
</div>

<div>
    <div><img className="img-soft " src={decision} alt=" "></img></div>
    <div><p></p></div>
</div>

<div>
    <div><img className="img-soft " src={chameleon} alt=" "></img></div>
    <div><p></p></div>
</div>

<div>
    <div><img className="img-soft " src={stylist} alt=" "></img></div>
    <div><p></p></div>
</div>

<div>
    <div><img className="img-soft " src={preference} alt=" "></img></div>
    <div><p></p></div>
</div>

<div>
    <div><img className="img-soft " src={meee} alt=" "></img></div>
    <div><p></p></div>
</div>


      </div>
  </>
    )
  }
  
  export default Softskill;