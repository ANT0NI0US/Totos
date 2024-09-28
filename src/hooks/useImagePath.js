import { useState, useEffect } from "react";
import noImg from "../assets/noImage.png";

export default function useImagePath(path, selectedPhoto) {
  const [imgPath, setImgPath] = useState("");

  useEffect(() => {
    if (path) {
      setImgPath(`https://image.tmdb.org/t/p/original/${path}`);
    } else if (selectedPhoto) {
      setImgPath(selectedPhoto);
    } else {
      setImgPath(noImg);
    }
  }, [path, selectedPhoto]);

  return { imgPath };
}
