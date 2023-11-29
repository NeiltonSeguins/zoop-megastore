import "./Link.css";

const Link = ({ link, children, textoDescritivo }) => {
  return (
    <a className="link" href={link} title={textoDescritivo} tabIndex="0">
      {children}
    </a>
  );
};

export default Link;
