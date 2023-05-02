import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { useEffect, useRef, useState } from "react";
import React from "react";

export const Accordian = ({ paragraph, heading, toggleFunc, id, isOpen }) => {
  const [panelHeight, setPanelHeight] = useState(0);
  const paragraphRef = useRef();
  const headingRef = useRef();
  const isTablet = useMediaQuery("(max-width: 640px)");
  const paraRef = useRef();
  console.log(panelHeight);

  useEffect(() => {
    if (isOpen) {
      setPanelHeight(
        headingRef?.current?.scrollHeight + paragraphRef?.current?.scrollHeight
      );
    } else {
      setPanelHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
    } else {
    }
  }, [isOpen, isTablet]);

  return (
    <div
      className={`max-w-[780px] flex overflow-hidden transition-all flex-col justify-center  items-center sm:!items-start w-full bg-white`}
    >
      <div
        className={`w-full p-[20px] md:px-[41px] transition-all border-b-2 sm:border-2 sm:rounded-md border-b-border sm:border-border `}
        onClick={() => toggleFunc(id)}
      >
        <h6>{heading}</h6>
      </div>
      <div
        ref={paraRef}
        style={{
          marginTop: isOpen ? (isTablet ? "" : "12px") : "0px",
          padding: isOpen
            ? isTablet
              ? "14px 59px 15px 20px"
              : "20px 60px 28px 41px"
            : isTablet
            ? "0px 20px"
            : "0px 41px",
          border: isOpen ? "" : "0px",
          height: isOpen
            ? isTablet
              ? `${panelHeight + 14 + 30}px`
              : `${panelHeight + 12 + 48}px`
            : "0px",
        }}
        className={`w-full flex items-start justify-center transition-all border-b-2 sm:border-2 gap-[14px] md:gap-[12px] sm:rounded-md ${
          isOpen && "md:border-txt-blue"
        } border-b-border sm:border-border flex-col overflow-hidden`}
      >
        <h6 ref={headingRef} className={`${isOpen && "text-txt-blue"}`}>
          {heading}
        </h6>
        <p
          ref={paragraphRef}
          className={`sm:max-w-[679px] transition-all duration-500 w-full`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
};
