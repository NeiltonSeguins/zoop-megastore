import banner from "/banner.svg";
import Botao from "../Botao/Botao";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div
        className="banner__conteudo
          "
      >
        <img
          src={banner}
          alt="Mulher negra de sobretudo bege, sorrindo enquanto segura uma sacola e fala ao telefone."
        />
        <div className="banner__info">
          <h1 className="banner__titulo">
            Faça um zoop <br /> <span> e realize seus desejos!</span>
          </h1>
          <p className="banner__descricao">
            Encontre tudo que você precisa em um só lugar com 15% de desconto na
            primeira compra!
          </p>
          <Botao>Quero ver!</Botao>
        </div>
      </div>
    </section>
  );
};

export default Banner;
