import "./memeCard.css";
import Meme from "./meme.jpg";

const MemeCard = () => {
  return (
    <>
      <div className="Card">
        <div className="img">
          <img src={Meme} alt="Meme" />
        </div>
        <div className="Text">
          <h1 className="mainHeading">Saysena</h1>
          <p className="mainPara">Meme of the Day</p>
        </div>
      </div>
    </>
  );
};

export default MemeCard;
