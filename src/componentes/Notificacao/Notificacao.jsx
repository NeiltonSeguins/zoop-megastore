import "./Notificacao.css";

const Notificacao = ({ tipo, mensagem, icone }) => {
  return (
    <div className={`notificacao ${tipo}`}>
      <i>{icone}</i>
      <p>{mensagem}</p>
    </div>
  );
};

export default Notificacao;
