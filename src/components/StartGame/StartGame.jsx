import React from "react";
import styles from "./StartGame.module.css";
import { Button } from "../../styled/Button";
import herImage from "../../../public/./dice/dice_1.png"
const StartGame = ({ toggle }) => {
  return (
    <section>
      <div className={styles.left}>
        <img src={herImage} alt="image-here" />
      </div>
      <div className={styles.right}>
        <p>DICE GAME</p>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </section>
  );
};

export default StartGame;
