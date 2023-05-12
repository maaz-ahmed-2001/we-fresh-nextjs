import { useEffect, useRef, useState } from "react";
// Hooks
import { useMediaQuery } from "../../utils/UseMediaQuery";

type AccordianProps = {
  paragraph: string;
  heading: string;
  id: number | string;
  isOpen: number | boolean;
  toggleFunc: (id: number) => void;
};

const index = ({
  paragraph,
  heading,
  toggleFunc,
  id,
  isOpen,
}: AccordianProps) => {
  const [paragraphHeight, setParagraphHeight] = useState(0);
  const [headingHeight, setHeadingHeight] = useState(0);
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const isTablet = useMediaQuery("(max-width: 640px)");
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setHeadingHeight(headingRef?.current?.clientHeight || 0);
      setParagraphHeight(paragraphRef?.current?.clientHeight || 0);
    };
    // Initial screen size
    setHeadingHeight(headingRef?.current?.clientHeight || 0);
    setParagraphHeight(paragraphRef?.current?.clientHeight || 0);
    // Add event listener to track changes in screen size
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) return setPanelHeight(headingHeight + paragraphHeight);
    setPanelHeight(0);
  }, [isOpen, headingHeight, paragraphHeight]);

  return (
    <div
      className={`max-w-[780px] flex overflow-hidden gap-[12px] transition-all flex-col justify-center  items-center sm:!items-start w-full bg-white`}>
      <div
        className={`w-full p-[20px] md:px-[41px] transition-all border-b-2 sm:border-2 sm:rounded-md border-b-border sm:border-border `}
        onClick={() => toggleFunc(Number(id))}>
        <h5>{heading}</h5>
      </div>
      <div
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
        } border-b-border sm:border-border flex-col overflow-hidden`}>
        <h5 ref={headingRef} className={`${isOpen && "text-txt-blue"}`}>
          {heading}
        </h5>
        <p
          ref={paragraphRef}
          className={`sm:max-w-[679px] transition-all duration-500 w-full`}>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default index;
