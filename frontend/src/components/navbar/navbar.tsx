import { useEffect } from "react";
import styles from "./navbar.module.scss";

export const NavBar = () => {
  window.onscroll = () => {
    console.log(window.scrollY);
  };
  return (
    <div className={styles.flexHolder}>
      <div className={styles.navBarContainer}>
        <div className={styles.optionHolder}>
          <div className={styles.option}>Home</div>
          <div className={styles.option}>Chat</div>
          <div className={styles.option}>About</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
