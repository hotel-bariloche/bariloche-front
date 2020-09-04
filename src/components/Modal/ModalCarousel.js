import React from "react";
import ModalWrapper from "./ModalWrapper";
import Carousel from 'react-bootstrap/Carousel';

const ModalCarousel = ({ list = [], show = false, handleClose }) => {
  return (
    <ModalWrapper show={show} handleClose={handleClose}>
      <Carousel interval={3000} fade={true}>
        {list.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-slide-home"
              src={item.src}
              alt={item.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </ModalWrapper>
  );
};

export default ModalCarousel;
