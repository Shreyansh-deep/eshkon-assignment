import roles from "@/data/roles";
import { Role } from "@/types/models";
import { useState } from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  const [activeProfession, setActiveProfession] = useState<Role>(roles[0]);
  return (
    <div className={styles["main"]}>
      <div className={styles["upper-part"]}>
        <div className={styles["left-section"]}>
          <div className={styles["text-wrapper"]}>
            <h1 className={styles["upper-part-text-h1"]}>
              Phenom for {activeProfession.name}
            </h1>
            <div>
              <h2 className={styles["upper-part-text-h2"]}>
                {activeProfession.highlightText}
              </h2>
              <button className={styles["btn"]}>Book a Demo</button>
            </div>
          </div>
        </div>
        <div className={styles["right-section"]}>
          <img src={activeProfession.imageUrl} className={styles["image"]} />
        </div>
      </div>
      <div className={styles["lower-part"]}>
        <div className={styles["discription-wrapper"]}>
          {activeProfession.discription}
        </div>
      </div>
    </div>
  );
};

export default Hero;
