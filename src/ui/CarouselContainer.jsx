import Carousel from "react-multi-carousel";

export default function CarouselContainer({ screens, children }) {
  return (
    <Carousel
      responsive={screens}
      partialVisible={false}
      additionalTransfrom={0}
      arrows
      // autoPlay
      // autoPlaySpeed={3000}
      draggable
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      shouldResetAutoplay
      slidesToSlide={1}
      swipeable
    >
      {children}
    </Carousel>
  );
}
