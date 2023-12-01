import React, { useState } from "react";
import Cabecalho from "../componentes/Cabecalho/Cabecalho";
import Rodape from "../componentes/Rodape/Rodape";
import Select from "../componentes/Select/Select";
import Checkbox from "../componentes/Checkbox/Checkbox";
import Botao from "../componentes/Botao/Botao";
import IconeBotao from "../componentes/Icones/IconeBotao";
import BotaoRadio from "../componentes/BotaoRadio/BotaoRadio";
import IconeFavoritar from "../componentes/Icones/IconeFavoritar";
import IconeCompartilhar from "../componentes/Icones/IconeCompartilhar";
import produtos from "../assets/produtos.json";
import { useParams } from "react-router-dom";

const opcoes = [
  { value: "branco", label: "Branco" },
  { value: "prata", label: "Prata" },
  { value: "cinza-chumbo", label: "Cinza chumbo" },
];

const selectOpcoes = [
  { value: "Quantidade", label: "Quantidade" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const Produto = () => {
  const params = useParams();

  const [produtoAtual] = produtos.filter(
    (produto) => produto.id == params.produto
  );

  console.log(produtoAtual);

  return (
    <>
      <Cabecalho />
      <main className="pagina__produto">
        <section>
          <div className="pagina__produto--conteudo">
            <img
              className="pagina__produto--imagem"
              src={produtoAtual.src}
              alt={produtoAtual.altImg}
            />
            <div className="pagina__produto--info">
              <div className="pagina__produto--info-produto">
                <h1 className="pagina__produto--titulo">{produtoAtual.nome}</h1>
                <div
                  className="pagina__produto--info-icones
                "
                >
                  <a href="#">
                    <IconeCompartilhar />
                  </a>
                  <a href="#">
                    <IconeFavoritar />
                  </a>
                </div>
              </div>
              <p className="pagina__produto--descricao">
                {produtoAtual.descricao}
              </p>
              <span className="pagina__produto--valor">
                {produtoAtual.valor}
              </span>
              <div className="pagina__produto--opcoes">
                {opcoes.map((opcao) => {
                  return (
                    <BotaoRadio
                      key={opcao.label}
                      label={opcao.label}
                      id={opcao.value}
                      value={opcao.value}
                    />
                  );
                })}
              </div>
              <Checkbox label="Quero seguro extra por 12 meses" />
              <Select opcoes={selectOpcoes} />
              <Botao icone={<IconeBotao />}>Adicionar ao carrinho</Botao>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </>
  );
};

export default Produto;
