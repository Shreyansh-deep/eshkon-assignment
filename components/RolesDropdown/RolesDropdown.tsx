import roles from "@/data/roles";
import styles from "./styles.module.scss";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Role } from "@/types/models";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  activeRole: Role;
  onRoleChanged: (role: Role) => void;
}

const RolesDropdown: FC<Props> = ({ activeRole, onRoleChanged }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (role: Role) => {
    setIsOpen(false);
    onRoleChanged(role);
    router.push(role.slug);
  };

  return (
    <div
      className={styles["dropdown-wrapper"]}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div
        className={styles["dropdown-avatar"]}
        style={{ backgroundImage: `url(${activeRole.imageUrl})` }}
      ></div>
      <p className={styles["dropdown-role"]}>{activeRole.name}</p>
      <BiChevronDown size={24} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles["roles-dropdown"]}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
          >
            <div className={styles["roles-dropdown-item"]}>
              <p className={styles["roles-dropdown-item-btn"]}>Role</p>
              <BiChevronUp size={24} />
            </div>
            {roles.map((role, index) => {
              return (
                <div
                  key={index}
                  className={styles["roles-dropdown-item"]}
                  onClick={() => handleSelect(role)}
                >
                  <div
                    className={styles["role-avatar"]}
                    style={{ backgroundImage: `url(${role.imageUrl})` }}
                  ></div>
                  <p className={styles["roles-dropdown-item-btn"]}>
                    {role.name}
                  </p>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RolesDropdown;
