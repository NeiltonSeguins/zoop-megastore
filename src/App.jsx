import "./App.css";
import Banner from "./componentes/Banner/Banner";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Categorias from "./componentes/Categorias/Categorias";
import Produtos from "./componentes/Produtos/Produtos";
import Inscricao from "./componentes/Inscricao/Inscricao";
import Faq from "./componentes/Faq/Faq";

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
        <Categorias />
        <Produtos />
        <Inscricao />
        <Faq />
      </main>
    </>
  );
}

export default App;
