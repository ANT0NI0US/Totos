import { useState, useEffect } from "react";
import noImg from "../assets/noImage.png";

export default function useImagePath(path) {
  const [imgPath, setImgPath] = useState("");

  useEffect(() => {
    if (path) {
      setImgPath(`https://image.tmdb.org/t/p/original/${path}`);
    } else {
      setImgPath(noImg);
    }
  }, [path]);

  return { imgPath };
}
