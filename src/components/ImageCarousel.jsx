import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const ImageWrapper = styled.div`
  height: 144px;
  overflow: hidden;
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const renderSlides = images.map((image, index) => (
    <ImageWrapper key={index}>
      <Image src={image.src} alt={image.alt} />
    </ImageWrapper>
  ));

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      selectedItem={images[currentIndex]}
      onChange={handleChange}>
      {renderSlides}
    </Carousel>
  );
};

export default ImageCarousel;
