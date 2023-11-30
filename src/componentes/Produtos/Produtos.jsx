import Produto from "../Produto/Produto";
import Link from "../Link/Link";
import produtos from "../../assets/produtos.json";
import "./Produtos.css";

const Produtos = () => {
  return (
    <section className="mais__procurados">
      <div className="mais_procurados--conteudo">
        <h2 className="mais__procurados--titulo">Mais procurados da semana</h2>
        <div className="produtos__mais__procurados">
          {produtos.map((produto) => {
            return (
              <>
                <Produto {...produto} />
              </>
            );
          })}
        </div>
        <div className="link__ver__mais">
          <Link link="#" textoDescritivo="Ver mais">
            Ver mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
