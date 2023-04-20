import React from "react";
import ServicesWrapper from "../../components/ServicesWrapper";
import { SectionHeadings } from "../../components/Headings";
import FlexCenter from "@/common/components/FlexCenter";
import { YellowCircleSvg } from "@/common/components/Icons";
import FlexColumn from "@/common/components/FlexColumn";
import SectionWrapper from "@/common/components/SectionWrapper";

const index = () => {
  return (
    <SectionWrapper className='h-full max-h-[calc(566px+770px)]' >
      <div className="flex flex-col items-center justify-center gap-8 py-10">
        <SectionHeadings
          className="max-w-[428px] w-full h-[70px] text-center"
          boldText="services"
          normalText="We've more"
          orientation="normal"
        />
        <div className="flex items-center justify-center gap-5 lg:gap-10">
          <ServicesWrapper src="/ServiceIcons/Cafe.png" text="Cafe" />
          <ServicesWrapper src="/ServiceIcons/Cafe.png" text="Cafe" />
          <ServicesWrapper src="/ServiceIcons/Cafe.png" text="Cafe" />
          <ServicesWrapper src="/ServiceIcons/Cafe.png" text="Cafe" />
        </div>
        {/* OUR APP SECTION */}
        <FlexCenter className="gap-24 w-full justify-evenly ">
          <div className="relative">
            <img
              src="/OurAppIcons/iPhone_Black.png"
              className=" h-[580px] w-[291px] max-w-[291px]"
              alt="Iphone Black"
            />
            <YellowCircleSvg height="444px" width='448px' />
          </div>
          <FlexColumn className="gap-3">
            <AppDetailsComponent
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
              heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <AppDetailsComponent
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
              heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <AppDetailsComponent
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
              heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </FlexColumn>
        </FlexCenter>
      </div>
    </SectionWrapper>
  );
};

export default index;

export const AppDetailsComponent = ({ heading, description }) => {
  return (
    <FlexColumn className="gap-3 group hover:bg-blue-light relative h-[195px] rounded-lg max-w-[599px] w-full p-4 text-left">
      <h6 className="text-txt-blue w-full">{heading}</h6>
      <p className="text-sm">{description}</p>
      <div className="absolute h-6 w-6 hidden group-hover:block rounded-bl-md top-[calc(50%-12px)] -left-[12px] rotate-45 bg-blue-light" />
    </FlexColumn>
  );
};
