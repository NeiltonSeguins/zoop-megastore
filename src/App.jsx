import "./App.css";
import Banner from "./componentes/Banner/Banner";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Categorias from "./componentes/Categorias/Categorias";
import Produtos from "./componentes/Produtos/Produtos";
import Inscricao from "./componentes/Inscricao/Inscricao";

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
        <Categorias />
        <Produtos />
        <Inscricao />
      </main>
    </>
  );
}

export default App;
