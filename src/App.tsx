import React from "react";
import styles from "./app.module.scss";

import Frame from "./Components/Frame/Frame";
import FrameControls from "./Components/FrameControls/FrameControls";

function App() {
  const [frames] = React.useState<string[]>([
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
  ]);

  const [selectedFrame, setSelectedFrame] = React.useState(0);
  const img = React.useRef<HTMLImageElement>(null);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Frame frame={frames[selectedFrame]} />
        <img
          src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
          alt="sun"
          ref={img}
          className={styles.photo}
        ></img>
      </div>
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files && event.target.files[0];
          //setSrc(URL.createObjectURL(file));
          if (img.current) img.current.src = URL.createObjectURL(file);
        }}
      />
      <FrameControls frames={frames} selectFrame={setSelectedFrame} />
    </div>
  );
}

export default App;
