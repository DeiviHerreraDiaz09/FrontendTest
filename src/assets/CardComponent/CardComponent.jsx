import styles from "./CardComponent.module.css";

const CardComponent = ({ }) => {
  return (
    <div className={styles.cardcomponent}>
      <div className={styles.card}>
        <div className={styles.cardImage}></div>

        <h4 className={styles.title}>Equilibrium #3429</h4>

        <p className={styles.description}>Our Equilibrium collection promotes balance and calm.</p>

        <div className={styles.moreInformation}>
          <div className={styles.price}>
            <div className={styles.imgPrice}></div>
            <h6 className={styles.priceValue}>0.041ETH</h6>
          </div>
          <div className={styles.lastTime}>
            <div className={styles.imgTime}></div>
            <h6 className={styles.timeLeft}>3 days left</h6>
          </div>
        </div>

        <hr className={styles.separator} />

        <div className={styles.author}>
          <div className={styles.imgAuthor}></div>
          <h6 className={styles.authorName}>
            Creation of <span className={styles.highlight}>Jules Wyvern</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
