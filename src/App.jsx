import "./App.css";
import Banner from "./componentes/Banner/Banner";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Categorias from "./componentes/Categorias/Categorias";
import Produtos from "./componentes/Produtos/Produtos";

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
        <Categorias />
        <Produtos />
      </main>
    </>
  );
}

export default App;
