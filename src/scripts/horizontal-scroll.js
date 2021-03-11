// Credited to: https://sudo.isl.co/translate-vertical-horizontal/

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100vh;
  will-change: transform;
`;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
  // return vw + 200;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    setTranslateX(offsetTop);

    // if (offsetTop > -vw - vh - 1078) {
    //   setTranslateX(offsetTop * 2.5);
    // }
    // console.log("vw " + vw);
    // console.log("vh " + vh);
    // console.log("offsettop" + offsetTop);
    // console.log(-vw - vh - 1000);
    // console.log(objectWidth);
    // const vw = window.innerWidth;
    // const translateTo = -vw;

    // var royals = document.querySelector("#royals");
    // var prc1 = document.querySelector("#prc-1");
    // var prc2 = document.querySelector("#prc-2");

    // if (offsetTop >= -99) {
    //   setTranslateX(0);
    // }
    // if (offsetTop <= -100) {
    //   setTranslateX(translateTo);
    //   royals.classList.add("swipe-out");
    //   prc1.classList.add("swipe-in");
    // }
    // if (offsetTop <= -200) {
    //   setTranslateX(2 * translateTo);
    //   prc2.classList.add("swipe-in");
    // }
    // if (offsetTop <= -300) {
    //   setTranslateX(3 * translateTo);
    // }
    // if (offsetTop <= -400) {
    //   setTranslateX(4 * translateTo);
    // }
    // if (offsetTop <= -500) {
    //   setTranslateX(5 * translateTo);
    // }
    // if (offsetTop <= -600) {
    //   setTranslateX(6 * translateTo);
    // }
  });
};

export default ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};
