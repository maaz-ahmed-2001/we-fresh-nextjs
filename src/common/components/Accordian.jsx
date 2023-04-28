export const Accordian = ({ paragraph, heading, toggleFunc, id, isOpen }) => {
  return (
    <div
      onClick={() => toggleFunc(id)}
      className={`max-w-[780px]  px-3 sm:px-5 flex flex-col justify-center ${
        isOpen ? "h-max border-txt-blue " : "h-[70px] border-border"
      } !items-start w-full transition-all  border-2 rounded-md bg-white gap-2`}
    >
      <h6 className={` ${isOpen && "text-txt-blue"}`}>{heading}</h6>
      <p className={`sm:max-w-[679px] ${isOpen ? "block" : "hidden"} w-full`}>
        {paragraph}
      </p>
    </div>
  );
};
