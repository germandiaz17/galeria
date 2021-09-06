//STYLES
import "../styles/PageGrid.css";

//COMPONENT
import Image from "./Image";

const PageGrid = ({ response, twoResponse }) => {
  if (!response || !twoResponse) return <p>loading images...</p>;

  return (
    <div className="content">
      <div className="header">
        <h1>galeria.</h1>
        <h5>START SLIDESHOW</h5>
      </div>
      <hr />
      <div className="wrapper">
        <div className="one">
          <Image url={response.results[0].links.download} text="texto" />
        </div>
        <div className="two">
          <Image url={response.results[1].links.download} text="texto" />
        </div>
        <div className="three">
          <Image url={response.results[2].links.download} text="texto" />
        </div>
        <div className="four">
          <Image url={response.results[3].links.download} text="texto" />
        </div>
        <div className="five">
          <Image url={response.results[4].links.download} text="texto" />
        </div>
        <div className="six">
          <Image url={response.results[5].links.download} text="texto" />
        </div>
        <div className="seven">
          <Image url={response.results[6].links.download} text="texto" />
        </div>
        <div className="eight">
          <Image url={response.results[7].links.download} text="texto" />
        </div>
        <div className="nine">
          <Image url={response.results[8].links.download} text="texto" />
        </div>
        <div className="ten">
          <Image url={twoResponse.results[8].links.download} text="texto" />
        </div>
        <div className="eleven">
          <Image url={twoResponse.results[5].links.download} text="texto" />
        </div>
        <div className="twelve">
          <Image url={twoResponse.results[2].links.download} text="texto" />
        </div>
        <div className="thirteen">
          <Image url={twoResponse.results[3].links.download} text="texto" />
        </div>
        <div className="fourteen">
          <Image url={twoResponse.results[6].links.download} text="texto" />
        </div>
        <div className="fiveteen">
          <Image url={twoResponse.results[7].links.download} text="texto" />
        </div>
      </div>
    </div>
  );
};

export default PageGrid;
