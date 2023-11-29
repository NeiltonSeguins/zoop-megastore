import "./Categoria.css";

const Categoria = () => {
  return (
    <div className="categoria__card" tabIndex="0">
      <img
        className="categoria__imagem"
        src="https://placehold.co/500x500/000000/FFF"
        alt="Imagem de placeholder"
      />
      <p className="categoria__descricao">Eletronicos</p>
    </div>
  );
};

export default Categoria;
