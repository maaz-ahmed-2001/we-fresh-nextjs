import { useEffect, useRef, useState } from "react";
import React from "react";

export const Accordian = React.memo(
  ({ paragraph, heading, toggleFunc, id, isOpen }) => {
    const [panelHeight, setPanelHeight] = useState(0);
    const paraRef = useRef();
    // const toggleAccordion = () => {
    //   setIsOpen(!isOpen);
    //   setPanelHeight(isOpen ? 0 : document.getElementById("panel-content").clientHeight);
    // };


    useEffect(() => {
      if (isOpen) {
        setPanelHeight(paraRef?.current?.offsetHeight);
      } else {
        setPanelHeight(0);
      }
    }, [isOpen]);

    return (
      <div
        onClick={() => toggleFunc(id)}
        className={`max-w-[780px] sm:border  p-3 sm:p-5 flex flex-col justify-center ${
          isOpen
            ? `sm:border-txt-blue !h-[calc(${panelHeight}px+70px)]`
            : `border-b-border sm:border-border h-[70px] `
        } !items-start w-full transition-all border-b-2 sm:border-2 sm:rounded-md bg-white gap-2`}
      >
        <h6 className={` ${isOpen && "text-txt-blue"}`}>{heading}</h6>
        <div className={`divide-y my-1 h-[2px] ${
            isOpen ? `block` : `hidden`
          } w-full sm:!hidden sm:!w-0 bg-border`} />
        <p
          ref={paraRef}
          className={`sm:max-w-[679px] ${
            isOpen ? `block` : `hidden`
          } transition-all duration-500 w-full`}
        >
          {paragraph}
        </p>
      </div>
    );
  }
);
