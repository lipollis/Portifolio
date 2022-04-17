import checklist from "../../assets/img/Softskill/checklist.svg";
import decision from "../../assets/img/Softskill/decision.svg";
import chameleon from "../../assets/img/Softskill/chameleon.svg";
import stylist from "../../assets/img/Softskill/style.svg";
import preference from "../../assets/img/Softskill/preference.svg";
import sketch from "../../assets/img/Softskill/sketch.svg";
import spirit from "../../assets/img/Softskill/spirit.svg";
import "./style.scss";

const Softskill = () => {
  return (
    <>

      <div id="softskill" className="container-softskill">
      <h3>Análise de perfil realizada pela plum.io</h3>
        <div className="card-soft ">
          <div className="wrap-img-soft ">
            <img className="img-soft" src={checklist} alt=" "></img>
          </div>
          <div  className="card-text">
            <h4 className="titleSoft">Tomada de decisões</h4>
            <p className="pSoft">
              Capacidade de tomar decisões de alta qualidade com base em
              informações limitadas.
            </p>
            <ul>
              <li className="liSoft">
                Altamente capaz de prever problemas e escolher soluções
                inovadoras.
              </li>
              <li className="liSoft">
                Altamente capaz de ser minuciosa, deliberada e identificar
                possíveis problemas com a respectiva solução.
              </li>
              <li className="liSoft">
                Ótimo em aceitar críticas e comentários, bem como em assumir a
                responsabilidade pelas decisões.
              </li>
              <li className="liSoft">
                Capaz de avaliar informações de maneira crítica, gerar soluções
                sar fatos, lógica e experiência para fundamentar decisões.
              </li>
              <li className="liSoft">
                Boa para expressar opiniões, crenças e em assumir o controle de
                uma situação.
              </li>
            </ul>
          </div>
        </div>

        <div className="card-soft ">
          <div className="wrap-img-soft ">
            <img className="img-soft " src={decision} alt=" "></img>
          </div>
          <div  className="card-text">
            <h4 className="titleSoft">Execução</h4>
            <p className="pSoft">
              Capacidade de definir metas, monitorar o progresso e tomar
              iniciativas para melhorar meu trabalho.
            </p>
            <ul>
              <li className="liSoft">
                Ótima em entender novos procedimentos e aprender como realizar o
                trabalho corretamente.
              </li>
              <li className="liSoft">
                Capaz de estabelecer e cumprir metas desafiadoras e persistir,
                mesmo quando inicialmente não for bem-sucedida.
              </li>
              <li className="liSoft">
                Ótimo em aceitar críticas e comentários, bem como em assumir a
                responsabilidade pelas decisões.
              </li>
              <li className="liSoft">
                Altamente capaz de ser precisa e atenta aos detalhes, aos
                relatórios e à manutenção de registros, criar planos para
                executar o trabalho e monitorar os recursos.
              </li>
            </ul>
          </div>
        </div>

        <div className="card-soft ">
          <div className="wrap-img-soft ">
            <img className="img-soft " src={chameleon} alt=" "></img>
          </div>
          <div  className="card-text">
            <h4 className="titleSoft">Competências de adaptação</h4>
            <p className="pSoft">
              Capacidade de me adaptar às mudanças no local de trabalho,
              mantendo um comportamento positivo.
            </p>
            <ul>
              <li className="liSoft">
                Boa em superar obstáculos e persistir diante de ambiguidades e
                mudanças.
              </li>
              <li className="liSoft">
                Ótima em lidar positivamente com obstáculos, falhas e desafios
                associados a mudanças.
              </li>
              <li className="liSoft">
                Altamente capaz de aplicar novas habilidades e se adaptar a
                mudanças e diferentes ambientes.
              </li>
            </ul>
          </div>
        </div>

        <div className="card-soft ">
          <div className="wrap-img-soft ">
            <img className="img-soft " src={stylist} alt=" "></img>
          </div>
          <div  className="card-text">
            <h4 className="titleSoft">Eu sou</h4>
            <ul>
              <li className="liSoft">Capaz de analisar e resolver problemas muitos complexos.</li>
              <li className="liSoft">Minuciosa, prudente, sistemática e metódica.</li>
              <li className="liSoft">
                Propensa a ser confiante, feliz, otimista, contente, segura e
                alegre.
              </li>
              <li className="liSoft">
                Propensa a ser receptiva, adaptável, flexível, não convencional
                e pensativa.
              </li>
              <li className="liSoft">Introvertida e reservada.</li>
              <li className="liSoft">
                Empática, compreensiva, solidária, confiante, emotiva e sensível
                aos sentimentos das pessoas.
              </li>
            </ul>
          </div>
        </div>

        <div className="card-soft ">
          <div className="wrap-img-soft ">
            <img className="img-soft" src={preference} alt=" "></img>
          </div>
          <div  className="card-text">
            <h4 className="titleSoft">Profissionalmente sou</h4>
            <ul>
              <li className="liSoft">
                Bastante adequada para cargos que exijam a análise de
                informações para escolher a melhor solução.
              </li>
              <li className="liSoft">
                Adequada para cargos que atribuam um valor elevado à qualidade e
                à precisão da atividade.
              </li>
              <li className="liSoft">
                Adequada para trabalhos que não sejam particularmente
                estressantes ou apressados.
              </li>
              <li className="liSoft">
                Muito adequada para cargos que exijam solicitar e aceitar
                feedback e críticas, além de abordar com confiança obstáculos e
                falhas.
              </li>
              <li className="liSoft">
                Muito adequada para organizações e cargos que estejam crescendo
                e mudando rapidamente.
              </li>
              <li className="liSoft">
                Adequada para organizações e cargos que valorizam bons ouvintes
                que não perdem tempo com conversas irrelevantes.
              </li>
              <li className="liSoft">
                Bastante adequada para organizações e cargos que priorizem o
                sentimento das pessoas.
              </li>
            </ul>
          </div>
        </div>

        <div className="card-soft ">
          <div className="wrap-img-soft ">
            <img className="img-soft " src={sketch} alt=" "></img>
          </div>
          <div  className="card-text">
            <h4 className="titleSoft">No trabalho sou</h4>
            <ul>
              <li className="liSoft">
                Altamente capaz de aprender e usar a razão para superar
                obstáculos difíceis.
              </li>
              <li className="liSoft">Prefero ser organizado e ter um plano.</li>
              <li className="liSoft">Aprecio desafios esperados e previsíveis.</li>
              <li className="liSoft">
                Gosto de quem sou como pessoa e me enxergo de maneira positiva.
              </li>
              <li className="liSoft">Prefiro uma série de experiências novas e diferentes.</li>
              <li className="liSoft">Gosto de trabalhar sozinha ou em pequenas equipes.</li>
              <li className="liSoft">
                Gosto de fazer as pessoas felizes e me conectar emocionalmente
                com os demais.
              </li>
            </ul>
          </div>
        </div>

        <div className="card-soft ">
          <div className="wrap-img-soft ">
            <img className="img-soft " src={spirit} alt=" "></img>
          </div>
          <div  className="card-text">
            <h4 className="titleSoft">Sou mais feliz em cargos que me permitam</h4>
            <ul>
              <li className="liSoft">Encontrar e resolver problemas complexos.</li>
              <li className="liSoft">Ter tempo para uma boa conclusão de projetos detalhados.</li>
              <li className="liSoft">
                Geralmente sou capaz de evitar demandas de trabalho muito
                estressantes ou com restrições de tempo.
              </li>
              <li className="liSoft">
                Sou capaz de modificar tarefas e projetos periodicamente - comum
                em empresas de rápido crescimento, mudanças ou novos negócios.
              </li>
              <li className="liSoft">
                Interações sociais menos frequentes com diferentes pessoas,
                colegas, clientes potenciais ou clientes - busco equipes
                pequenas ou oportunidades de trabalhar sozinha.
              </li>
              <li className="liSoft">
                Ter algum tempo para demonstrar carinho pelos demais e lhes
                oferecer apoio, porque considero uma parte gratificante do
                trabalho.
              </li>
              <li className="liSoft">
                Sou altamente metódica e precisa. É provável que me sinta
                decepcionada se não conseguir terminar as atividades no nível
                desejável e de maneira pretendida.
              </li>
              <li className="liSoft">
                Sou extraordinariamente otimista, positiva e resiliente a
                críticas e rejeição.
              </li>
              <li className="liSoft">
                Sou introvertida e reservada. Posso me sentir esgotada em
                funções que exijam socialização frequente.
              </li>
              <li className="liSoft">
                Sou altamente solidária e apoio os demais. Se precisar impor
                regras, políticas e fiscalizar os demais como parte da minha
                função, é provável que me sinta exausta e insatisfeita.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Softskill;
