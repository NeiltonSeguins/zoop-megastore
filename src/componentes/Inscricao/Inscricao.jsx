import { useState } from "react";
import * as Yup from "yup";
import CampoTexto from "../CampoTexto/CampoTexto";
import Botao from "../Botao/Botao";
import "./Inscricao.css";

const Inscricao = () => {
  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  const validarEmail = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Campo obrigatório")
          .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Digite um e-mail válido"),
      });

      await schema.validate({ email });
      setErroEmail("");
      return true;
    } catch (error) {
      setErroEmail(error.message);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (await validarEmail()) {
      console.log("Formulário enviado!");
      setEmail("");
    }
  };

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
        <form className="inscricao__formulario" onSubmit={handleSubmit}>
          <CampoTexto
            tipo="email"
            erro={erroEmail}
            placeholder="Digite seu melhor endereço de email"
            value={email}
            handleChange={(event) => setEmail(event.target.value)}
          />
          <Botao tipo="submit">Inscrever</Botao>
        </form>
      </div>
    </section>
  );
};

export default Inscricao;
