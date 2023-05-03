import React from "react";

type InputProps = {
  type:  React.HTMLInputTypeAttribute
  placeholder: string
  height?: string
  state: string | number | undefined
  width?: string
  onChangeFunc: (event : React.ChangeEvent<HTMLInputElement>) => void
}


const index = ({ type, placeholder, state, onChangeFunc, height, width }: InputProps) => {
  return (
    <input
      type={type}
      className={`outline-none border-2 border-light-grey w-[170px] lg:w-[300px] h-[${height}] text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm px-2 py-1 md:py-0 rounded-sm`}
      placeholder={placeholder}
      value={state}
      onChange={onChangeFunc}
    />
  );
};

export default index;

