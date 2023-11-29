import "./Checkbox.css";

const Checkbox = ({ id, value, label }) => {
  return (
    <>
      <label htmlFor={id} className="checkbox__label">
        <input type="checkbox" value={value} name="quality" id={id} />
        <span>{label}</span>
      </label>
    </>
  );
};

export default Checkbox;
