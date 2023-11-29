import "./Botao.css";

const Botao = ({
  variante = "primario",
  icone,
  link,
  children,
  handleClick,
}) => {
  const classeBotao = `botao ${
    variante === "primario" ? "primario" : "secundario"
  }`;

  const Elemento = link ? "a" : "button";

  return (
    <Elemento
      onClick={handleClick}
      href={link}
      className={classeBotao}
      type="button"
    >
      {icone && <span className="botao-icone">{icone}</span>}
      {children}
    </Elemento>
  );
};

export default Botao;
