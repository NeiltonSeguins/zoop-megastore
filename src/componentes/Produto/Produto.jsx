import "./Produto.css";
import { Link } from "react-router-dom";
import { formatadorMoeda } from "../../utils/formatadorMoeda";

const Produto = ({ id, nome, descricao, src, altImg, valor }) => {
  return (
    <Link to={`produtos/${id}`} className="produto__card" tabIndex="0">
      <img className="produto__imagem" src={src} alt={altImg} />
      <div className="produto_info">
        <h3 tabIndex="0" className="produto__titulo">
          {nome}
        </h3>
        <p className="produto__descricao">{descricao}</p>
        <span className="produto__valor">{formatadorMoeda(valor)}</span>
      </div>
    </Link>
  );
};

export default Produto;
