import CampoTexto from "../CampoTexto/CampoTexto";
import Botao from "../Botao/Botao";
import "./Inscricao.css";

const Inscricao = () => {
  return (
    <section className="inscricao">
      <div className="inscricao__conteudo">
        <h2 className="inscricao__titulo">
          Inscreva-se para ganhar descontos!
        </h2>
        <h3 className="inscricao__subtitulo">
          Cadastre seu email em nossa newsletter e saiba dos descontos, cupons e
          novidades em primeira mão!
        </h3>
        <form className="inscricao__formulario">
          <CampoTexto placeholder="Digite seu melhor endereço de email" />
          <Botao>Inscrever</Botao>
        </form>
      </div>
    </section>
  );
};

export default Inscricao;
