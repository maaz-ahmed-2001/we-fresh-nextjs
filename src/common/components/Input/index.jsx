import React from "react";

const index = ({ type, placeholder, state, setState, width, height }) => {
  return (
    <input
      type={type}
      className={`outline-none border-2 border-light-grey !w-[170px] md:!w-[${width}] h-[${height}] text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm px-2 py-1 md:py-0 rounded-sm`}
      placeholder={placeholder}
      onChange={({ target }) => setState(target.value)}
      value={state}
    />
  );
};

export default index;
