import "../styles/Image.css";

const Image = ({ url, text }) => {
  return <img className="image" src={url} alt={text} />;
};

export default Image;
