import React from "react";
import homeVideo from "../../assets/home/Home-Video.mp4";

function Video() {
  return (
    <div>
      <video
        className="h-auto w-[80%] mx-auto min-w-[30vh] md:w-full"
        src={homeVideo}
        type={"video / mp4"}
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

export default Video;
