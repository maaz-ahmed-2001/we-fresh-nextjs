import React from "react";

const SectionWrapper = ({ children, className, zIndex }) => {
  return (
    <section className={`w-full ${ zIndex && ('z-'+zIndex.toString())} relative h-full block m-auto`} >
      <div
        className={`py-10 md:py-16 lg:px-10 block m-auto  w-full max-w-[1440px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
