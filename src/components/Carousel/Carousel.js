import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementSlide,
  decrementSlide,
} from "../../stateManagement/ducks/carouselDucks";
import "./css/carousel.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Carousel() {
  // const carouselImgs = [
  //   "https://www.jiujitsutimes.com/wp-content/uploads/top-image-700x393.jpg",
  //   "https://pbs.twimg.com/media/DE0szhfXcAALUAP?format=jpg&name=large",
  //   "https://mymmanews.com/wp-content/uploads/2021/02/161292891964034302-1.jpg",
  // ];
  const dispatch = useDispatch();
  //const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlide = useSelector((state) => state.carousel.currentSlide);
  const carouselImgs = useSelector((state) => state.carousel.carouselImgs);
  //const carouselImgsLength = carouselImgs.length;

  const handleNextSlide = () => {
    // setCurrentSlide(
    //   currentSlide === carouselImgsLength - 1 ? 0 : currentSlide + 1
    // );
    dispatch(incrementSlide());
  };

  const handlePrevSlide = () => {
    // setCurrentSlide(
    //   currentSlide === 0 ? carouselImgsLength - 1 : currentSlide - 1
    // );
    dispatch(decrementSlide());
  };

  return (
    <>
      <main className="carousel">
        <FaArrowAltCircleLeft className="leftArrow" onClick={handlePrevSlide} />

        <FaArrowAltCircleRight
          className="rightArrow"
          onClick={handleNextSlide}
        />

        {carouselImgs.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slideActive" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <img src={slide} alt="Nav Images" className="carouselImage" />
              )}
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Carousel;
