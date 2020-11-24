import React from "react";
import { BsFullscreen } from "react-icons/bs";
// import { RiSettingsLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import styles from "./SettingButtons.module.css";

const SettingButtons = () => {
  const fullScreen = () => {
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.body.requestFullscreen();
  };

  return (
    <div className={styles.buttons}>
      <IconContext.Provider
        value={{ color: "white", size: "4vw", className: styles.icon }}
      >
        {/* <div className={styles.button}>
          <RiSettingsLine />
        </div> */}
        <div className={styles.button} onClick={fullScreen}>
          <BsFullscreen />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default SettingButtons;
