import { useState } from "react";
import "./Select.css";

const Select = ({ opcoes, onChange }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null | undefined);

  return (
    <select
      className="select__container"
      aria-label="Selecione uma opção"
      aria-haspopup="true"
      aria-expanded={opcaoSelecionada !== null}
      value={opcaoSelecionada}
      onChange={(event) => setOpcaoSelecionada(event.target.value)}
    >
      {opcoes.map((opcao) => (
        <>
          <option
            defaultValue="Quantidade"
            className="select__option"
            key={opcao.value}
            value={opcao.value}
          >
            {opcao.label}
          </option>
          <span className="select__divisor" />
        </>
      ))}
    </select>
  );
};

export default Select;
