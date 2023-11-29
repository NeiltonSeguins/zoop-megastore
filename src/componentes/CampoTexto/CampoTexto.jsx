import "./CampoTexto.css";

const CampoTexto = ({ id, placeholder, value }) => {
  return (
    <input
      className="campo__texto"
      type="text"
      placeholder={placeholder}
      id={id}
      value={value}
    />
  );
};

export default CampoTexto;
