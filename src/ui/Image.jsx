import { LazyLoadImage } from "react-lazy-load-image-component";
import loading from "@/assets/loading.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Image({ src, styles, alt }) {
  return (
    <LazyLoadImage
      className={styles}
      placeholderSrc={loading}
      alt={alt}
      effect="blur"
      src={src}
    />
  );
}
