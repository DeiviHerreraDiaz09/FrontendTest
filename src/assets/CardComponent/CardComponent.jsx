import "./CardComponent.css";

const CardComponent = ({}) => {
  return (
    <div className="cardcomponent">
      <div className="card">
        <div className="cardImage"></div>

        <h4>Equilibrium #3429</h4>

        <p>Our Equilibrium collection promotes balance and calm.</p>

        <div className="moreInformation">
          <div className="price">
            <div className="imgPrice"></div>
            <h6>0.041ETH</h6>
          </div>
          <div className="lastTime">
            <div className="imgTime"></div>
            <h6>3 days left</h6>
          </div>
        </div>

        <hr />

        <div className="author">
          <div className="imgAuthor"></div>
          <h6>
            Creation of <span class="highlight">Jules Wyvern</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
