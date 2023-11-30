import categorias from "../../assets/categorias.json";
import Categoria from "../Categoria/Categoria";
import "./Categorias.css";

const Categorias = () => {
  return (
    <section className="categorias">
      <h2 className="categorias__titulo">Categorias</h2>
      <p className="categorias__subtitulo">
        Escolha a categoria de produto que você deseja:
      </p>
      <div className="categoria">
        {categorias.map((categoria) => (
          <Categoria {...categoria} />
        ))}
      </div>
    </section>
  );
};

export default Categorias;
