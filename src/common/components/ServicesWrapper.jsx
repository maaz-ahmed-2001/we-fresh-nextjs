import React from "react";

const ServicesWrapper = ({ src, text, className }) => {
  return (
    <div
      className={`wp-3 flex-col flex gap-3 items-center justify-center rounded-md  shadow-sm group hover:scale-105`}
    >
      <div className="max-w-[120px] w-full h-[120px]">
        <img src={src} className="w-full h-full" alt={text} />
      </div>
      <p className="text-center group-hover:text-txt-blue ">{text}</p>
    </div>
  );
};

export default ServicesWrapper;
