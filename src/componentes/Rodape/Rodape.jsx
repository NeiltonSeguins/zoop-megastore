import "./Rodape.css";
import IconeWhatsapp from "../Icones/IconeWhatsapp";
import IconeInstagram from "../Icones/IconeInstagram";
import IconeTiktok from "../Icones/IconeTiktok";

import logoRodape from "/logo-rodape.svg";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="rodape__infos">
        <div className="rodape__col--1">
          <img
            src={logoRodape}
            alt="Logo da Zoop Megastore nas cores magenta e branco"
          />
          <div className="divisor__col--1"></div>
          <p>O jeito mais prático e rápido de realizar os seus desejos.</p>
        </div>
        <div className="rodape__col--2">
          <h3>Institucional</h3>
          <a href="#">Nossa história</a>
          <a href="#">Carreiras</a>
          <a href="#">Nossa loja</a>
        </div>
        <div className="rodape__col--3">
          <h3>Central de atendimento</h3>
          <p>SAC 4003 4848</p>
        </div>
        <div className="rodape__col--4">
          <h3>Redes sociais</h3>
          <p>Acesse nossas rede:</p>
          <div className="rodape__icones">
            <a href="#" aria-label="Ícone da rede social Whatsapp">
              <IconeWhatsapp />
            </a>
            <a href="#" aria-label="Ícone da rede social Instagram">
              <IconeInstagram />
            </a>
            <a href="#" aria-label="Ícone da rede social Tiktok">
              <IconeTiktok />
            </a>
          </div>
        </div>
      </div>
      <span className="rodape__direito--autorais">
        Desenvolvido por Alura.
        <br />
        Projeto fictício sem fins comerciais.
      </span>
    </footer>
  );
};

export default Rodape;
