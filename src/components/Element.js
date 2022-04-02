import { useRef, useState, useEffect } from "react";
import { elementMap } from "../helper/constants";
function Element() {
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const dragStart = (e) => {
    const target = e.target;

    setTimeout(() => {
      pauseVideo();
      const parentId = target.parentNode.id;
      target.classList.remove(elementMap[parentId]);
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  };

  useEffect(() => {
    videoRef.current.addEventListener("ended", () => {
      setPlaying(false);
    });
  }, []);

  const toggleVideo = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setPlaying(true);
      return;
    }
    videoRef.current.pause();
    setPlaying(false);
  };

  return (
    <video
      className="element"
      id="element"
      ref={videoRef}
      draggable
      onClick={toggleVideo}
      onDragStart={dragStart}
      onDragOver={dragOver}
      src="/video.mov"
      type="video/mov"
    />
  );
}

export default Element;
