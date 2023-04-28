import React from "react";

const SectionWrapper = ({ children, className }) => {
  return (
    <section className="w-full relative h-full block m-auto" >
      <div
        className={`py-10 md:py-16  px-3 sm:px-5 lg:px-10 block m-auto  w-full max-w-[1440px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
