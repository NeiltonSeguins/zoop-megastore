import Banner from "../componentes/Banner/Banner";
import Cabecalho from "../componentes/Cabecalho/Cabecalho";
import Categorias from "../componentes/Categorias/Categorias";
import Produtos from "../componentes/Produtos/Produtos";
import Inscricao from "../componentes/Inscricao/Inscricao";
import Faq from "../componentes/Faq/Faq";
import Rodape from "../componentes/Rodape/Rodape";
import Modal from "../componentes/Modal/Modal";
import { useState } from "react";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Cabecalho />
      <main>
        <Banner />
        <Categorias />
        <Produtos />
        <Inscricao />
        <Faq />
      </main>
      <Rodape />
    </>
  );
};

export default Home;
