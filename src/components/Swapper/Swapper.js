import React, { Fragment } from "react";
import styles from "./Swapper.module.css";

const Swapper = (props) => {
  return (
    <div className={styles.Swapper}>
      <label className={styles.label}>{props.title}: </label>
      <select
        className={styles.selections}
        onChange={(e) => props.update(e, props.tz, props.local, props.title)}
      >
        {props.tz ? (
          <Fragment>
            {props.meta.map((m, i) => (
              <option key={m} value={i}>
                {m}
              </option>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            {Object.keys(props.meta).map((m) => (
              <option key={m} value={m}>
                {props.meta[m].output}
              </option>
            ))}
          </Fragment>
        )}
      </select>
    </div>
  );
};

export default Swapper;
