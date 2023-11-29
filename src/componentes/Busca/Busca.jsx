import "./Busca.css";
import IconeBusca from "../Icones/IconeBusca";

const Busca = ({ placeholder, handleClick }) => {
  return (
    <div className="campo-busca" tabIndex="0" aria-label="Campo de Busca">
      <input type="text" className="campo-texto" placeholder={placeholder} />
      <button
        type="submit"
        onClick={handleClick}
        className="botao-busca"
        aria-label="Buscar"
      >
        <IconeBusca />
      </button>
    </div>
  );
};

export default Busca;
