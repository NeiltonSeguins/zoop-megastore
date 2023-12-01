import "./Produto.css";
import { Link } from "react-router-dom";

const Produto = ({ id, nome, descricao, src, altImg, valor }) => {
  return (
    <Link to={`produtos/${id}`} className="produto__card" tabIndex="0">
      <img className="produto__imagem" src={src} alt={altImg} />
      <div className="produto_info">
        <h4 tabIndex="0" className="produto__titulo">
          {nome}
        </h4>
        <p className="produto__descricao">{descricao}</p>
        <span className="produto__valor">{valor}</span>
      </div>
    </Link>
  );
};

export default Produto;
