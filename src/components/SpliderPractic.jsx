import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Container } from "react-bootstrap";
import SliderImg from "../assets/images/Abc.png";

const SpliderPractic = () => {
  return (
    <>
      <div className=" min-vh-100 bg-dark flex flex-column">
        <Container>
          <h2 className=" fs-6 text-center text-white">Splider</h2>
          <Splide options={{ rewind: true }} aria-label="React Splide Example">
            <SplideSlide className=" d-flex align-items-center justify-content-center">
              <img src={SliderImg} alt="SliderImg" className=" mw_428 w-100" />
            </SplideSlide>
            <SplideSlide className=" d-flex align-items-center justify-content-center">
              <img src={SliderImg} alt="SliderImg" className=" mw_428 w-100" />
            </SplideSlide>
            <SplideSlide className=" d-flex align-items-center justify-content-center">
              <img src={SliderImg} alt="SliderImg" className=" mw_428 w-100" />
            </SplideSlide>
            <SplideSlide className=" d-flex align-items-center justify-content-center">
              <img src={SliderImg} alt="SliderImg" className=" mw_428 w-100" />
            </SplideSlide>
            <SplideSlide className=" d-flex align-items-center justify-content-center">
              <img src={SliderImg} alt="SliderImg" className=" mw_428 w-100" />
            </SplideSlide>
          </Splide>
        </Container>
      </div>
    </>
  );
};

export default SpliderPractic;
