import Busca from "../Busca/Busca";
import IconeCarrinho from "../Icones/IconeCarrinho";
import IconePerfil from "../Icones/IconePerfil";
import logo from "/logo.svg";
import "./Cabecalho.css";

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <img src={logo} alt="Logotipo da zoop megastore" />
      <a className="cabecalho__link" href="#">
        Sobre nós
      </a>
      <Busca placeholder="Digite aqui o produto que você busca" />
      <div className="icones__cabecalho">
        <button
          className="icones__botoes"
          aria-label="Ícone de carrinho de supermercado"
        >
          <IconeCarrinho />
        </button>
        <button className="icones__botoes" aria-label="Ícone de perfil">
          <IconePerfil />
        </button>
      </div>
    </header>
  );
};

export default Cabecalho;
