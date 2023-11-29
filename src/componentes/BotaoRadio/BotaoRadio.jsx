import "./BotaoRadio.css";

const BotaoRadio = ({ id, label, value }) => {
  return (
    <label htmlFor={id} className="radio__label">
      <input type="radio" value={value} name="radio-button" id={id} />
      <span>{label}</span>
    </label>
  );
};

export default BotaoRadio;
