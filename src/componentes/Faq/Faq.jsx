import Acordeao from "../Acordeao/Acordeao";
import faq from "../../assets/faq.json";
import "./Faq.css";

const Faq = () => {
  return (
    <section className="duvidas">
      <h2 className="duvidas__titulo">Dúvidas frequentes</h2>
      <p className="duvidas__subtitulo">
        Antes de entrar em contato, verifique se sua dúvida está respondida em
        nossa FAQ!
      </p>
      <Acordeao secoes={faq} />
    </section>
  );
};

export default Faq;
