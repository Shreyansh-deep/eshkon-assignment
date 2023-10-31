import roles from "@/data/roles";
import { Role } from "@/types/models";
import { useState } from "react";
import styles from "./styles.module.scss";
import RolesDropdown from "../RolesDropdown/RolesDropdown";

const Hero = () => {

  const [activeRole, setActiveRole] = useState<Role>(roles[0]);

    const handleRolesSelect = (role: Role) => {
        setActiveRole(role)
    }

  return (
    <div className={styles["main"]}>
      <div className={styles["upper-part"]}>
        <div className={styles["left-section"]}>
          <div className={styles["text-wrapper"]}>
            <RolesDropdown activeRole={activeRole} onRoleChanged={handleRolesSelect}/>
            <h1 className={styles["upper-part-text-h1"]}>
              Phenom for {activeRole.name}
            </h1>
            <div>
              <h2 className={styles["upper-part-text-h2"]}>
                {activeRole.highlightText}
              </h2>
              <button className={styles["btn"]}>Book a Demo</button>
            </div>
          </div>
        </div>
        <div className={styles["right-section"]}>
          <img src={activeRole.imageUrl} className={styles["image"]} />
        </div>
      </div>
      <div className={styles["lower-part"]}>
        <div className={styles["discription-wrapper"]}>
          {activeRole.discription}
        </div>
      </div>
    </div>
  );
};

export default Hero;
