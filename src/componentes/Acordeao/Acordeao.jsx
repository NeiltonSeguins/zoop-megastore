import "./Acordeao.css";
import IconeSetaCima from "../Icones/IconeSetaCima";
import IconeSetaBaixo from "../Icones/IconeSetaBaixo";
import { useState } from "react";

const SecaoAcordeao = ({
  secao,
  ehSecaoAtiva,
  setIndiceAtivo,
  indiceSecao,
}) => {
  const toggleSecao = () => {
    const proximoIndice = ehSecaoAtiva ? null : indiceSecao;
    setIndiceAtivo(proximoIndice);
  };
  return (
    <details>
      <summary className="acordeao__titulo" onClick={toggleSecao}>
        <h5>{secao.titulo}</h5>
        <span>{ehSecaoAtiva ? <IconeSetaCima /> : <IconeSetaBaixo />}</span>
      </summary>
      {ehSecaoAtiva && (
        <div className="acordeao__conteudo">{secao.conteudo}</div>
      )}
    </details>
  );
};

const Acordeao = ({ secoes }) => {
  const [indiceAtivo, setIndiceAtivo] = useState(null);
  return (
    <div className="acordeao__estilos">
      {secoes.map((secao, indice) => (
        <SecaoAcordeao
          secao={secao}
          key={indice}
          ehSecaoAtiva={indice === indiceAtivo}
          setIndiceAtivo={setIndiceAtivo}
          indiceSecao={indice}
        />
      ))}
    </div>
  );
};

export default Acordeao;
