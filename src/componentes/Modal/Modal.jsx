import React from "react";
import "./Modal.css";
import Botao from "../Botao/Botao";
import IconeModal from "../Icones/IconeModal";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className="modal__overlay" onClick={onClose} />
          <dialog className="modal__dialog" open={isOpen} onClose={onClose}>
            <button
              className="modal__botao--fechar"
              onClick={onClose}
              tabIndex="0"
              aria-label="Botão fechar modal"
            >
              X
            </button>
            <div className="modal__content">
              <IconeModal />
              <h1 className="modal__titulo">Boas-vindas ao Zoop!</h1>
              <p className="modal__descricao">
                Aqui você já começa com vantagem, utilize o cupom
                <span className="modal__cupom">BOASVINDAS15</span> e ganhe um
                desconto de 15% em sua primeira compra no site!
              </p>
              <Botao variante="secundario">Pegar cupom!</Botao>
            </div>
          </dialog>
        </>
      )}
    </>
  );
};

export default Modal;
