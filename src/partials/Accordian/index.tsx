import { useRef } from "react";


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
  const DivRef = useRef();

  return (
    <div
      className={`max-w-[780px] flex overflow-hidden gap-[12px] transition-all flex-col justify-center  items-center sm:!items-start w-full bg-white`}>
      <div
        className={`w-full p-[20px] md:px-[41px] transition-all border-b-2 sm:border-2 sm:rounded-md border-b-border sm:border-border `}
        onClick={() => toggleFunc(Number(id))}>
        <h5>{heading}</h5>
      </div>
      <div id={id.toString()} className="h-[0px] transition-all duration-300">
        <div
          className={`w-full flex items-start md:mt-[12px] pt-[14px] md:pt-[20px] pr-[59px] md:pr-[60px] pb-[15px] md:pb-[28px] pl-[20px] md:pl-[41px] justify-center  duration-300 border-b-2 sm:border-2 gap-[14px] md:gap-[12px] sm:rounded-md md:border-txt-blue border-b-border sm:border-border flex-col overflow-hidden`}>
          <h5 className="text-txt-blue">{heading}</h5>
          <p className={`sm:max-w-[679px] transition-all duration-500 w-full`}>
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
