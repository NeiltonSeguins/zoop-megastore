import "./Categoria.css";

const Categoria = ({ id, titulo, src, altImg }) => {
  return (
    <div className="categoria__card" tabIndex="0">
      <img className="categoria__imagem" src={src} alt={altImg} />
      <p className="categoria__descricao">{titulo}</p>
    </div>
  );
};

export default Categoria;
