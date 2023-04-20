import React from "react";
import { SectionHeadings } from "../../components/Headings";
import ServicesWrapper from "../../components/ServicesWrapper";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <SectionHeadings
        boldText="services"
        normalText="We've more"
        orientation="normal"
      />
      <div className="flex items-center justify-center gap-5 lg:gap-10" >
        <ServicesWrapper src="/ServiceIcons/Cafe.png" text="Cafe" />
        <ServicesWrapper src="/ServiceIcons/Cafe.png" text="Cafe" />
        <ServicesWrapper src="/ServiceIcons/Cafe.png" text="Cafe" />
        <ServicesWrapper src="/ServiceIcons/Cafe.png" text="Cafe" />
      </div>
    </div>
  );
};

export default index;
