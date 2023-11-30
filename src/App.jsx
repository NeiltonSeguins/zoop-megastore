import "./App.css";
import Banner from "./componentes/Banner/Banner";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Categorias from "./componentes/Categorias/Categorias";

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
        <Categorias />
      </main>
    </>
  );
}

export default App;
