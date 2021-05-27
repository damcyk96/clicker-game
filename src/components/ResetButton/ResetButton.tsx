import React from "react";
import styles from "./ResetButton.module.css";

const ResetButton = () => {
  const resetClickHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      window.localStorage.removeItem("savedGame");
      window.location.reload();
    }
  };

  return (
    <div className={styles.CenterDiv}>
      <button
        data-testid="resetButton"
        className={styles.Button}
        onClick={resetClickHandler}
      >
        Reset Game (clear bugs)
      </button>
    </div>
  );
};

export default ResetButton;
