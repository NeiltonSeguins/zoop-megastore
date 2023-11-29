import "./Produto.css";

const Produto = () => {
  return (
    <a href="#" className="produto__card" tabIndex="0">
      <img
        className="produto__imagem"
        src="https://placehold.co/500x500/0000FF/FFF"
        alt="Imagem de placeholder"
      />
      <div className="produto_info">
        <h3 tabIndex="0" className="produto__titulo">
          Notebook Samsung
        </h3>
        <p tabIndex="0" className="produto__descricao">
          NP550XDA-KU1BR Intel Core i7-1165G7 8GB 256GB SSD Tela 15.6 Windows 11
          - Cinza Chumbo
        </p>
        <span tabIndex="0" className="produto__valor">
          2800,00
        </span>
      </div>
    </a>
  );
};

export default Produto;
