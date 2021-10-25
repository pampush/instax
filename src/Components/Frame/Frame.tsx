import React from "react";

import styles from "./frame.module.scss";

type Props = {
  frame: string;
};

function Frame({ frame }: Props) {
  return (
    <div className={styles.frame}>
      <img src={frame} alt="frame" className={styles.pic}/>
    </div>
  );
}

export default Frame;
