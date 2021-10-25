import React from "react";
import styles from "./controls.module.scss";

type Props = {
  frames: string[];
  selectFrame: (a: number) => void;
};

function FrameControls({ frames, selectFrame }: Props) {
  const framesContainer = React.useRef(null);
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!framesContainer) return;
  }, []);

  return (
    <>
      <div ref={framesContainer} className={styles.container}>
        {frames.map((frame, i) => (
          <img
            src={frame}
            alt={frame}
            key={i}
            onClick={() => {
              setSelected(i);
            }}
            className={`${styles.item} ${
              i === selected ? styles.selected : ""
            }`}
          />
        ))}
      </div>
      <button onClick={() => selectFrame(selected)}>select</button>
    </>
  );
}

export default FrameControls;
