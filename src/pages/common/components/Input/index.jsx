import React from "react";

const index = ({ type, placeholder, state, setState }) => {
  return (
    <input
      type={type}
      className="outline-none border-none text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm px-2 py-1 md:py-0 rounded-sm"
      placeholder={placeholder}
      onChange={({target})=> setState(target.value)}
      value={state}
    />
  );
};

export default index;
