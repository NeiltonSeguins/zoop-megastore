import "./CampoTexto.css";

const CampoTexto = ({ id, placeholder, value, tipo, handleChange, erro }) => {
  return (
    <label htmlFor={id}>
      <input
        className="campo__texto"
        type={tipo || "text"}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={handleChange}
        aria-describedby="erro-email"
      />
      {erro && (
        <span id="erro-email" className="mensagem-erro">
          {erro}
        </span>
      )}
    </label>
  );
};

export default CampoTexto;
