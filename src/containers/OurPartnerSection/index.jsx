import FlexCenter from "@/common/components/FlexCenter";
import FlexColumn from "@/common/components/FlexColumn";
import { SectionHeadings } from "@/common/components/Headings";
import { OurPartnersSectionBlueSvg } from "@/common/components/Icons";
import SectionWrapper from "@/common/components/SectionWrapper";
import React from "react";

const index = () => {
  return (
    <SectionWrapper className="!p-10 h-[760px]">
      <FlexCenter className="h-full max-h-[760px] !justify-start w-full relative gap-3">
        {/* OUR PARTNERS */}
        <FlexColumn className="relative w-full  h-[354px] sm:h-[410px] max-w-[547px]">
          {/* BLUE BG SVG */}
          <OurPartnersSectionBlueSvg/>
          <SectionHeadings
            boldText="Partners"
            orientation="normal"
            normalText="Our"
            className="max-w-[264px] text-center w-full h-full max-h-[70px] !text-4xl"
          />
          <p className="h-full w-full max-h-[120px] max-w-[326px] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod.
          </p>
        </FlexColumn>
        {/* ABSOLUTE IMAGES */}
        <FlexCenter className="flex-grow h-[100%]">
          <FlexCenter className='h-[90%] w-[90%] relative ' >
            <div className="max-h-[175px] absolute top-[10%] left-[17%] h-full w-full max-w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>

            <div className="max-h-[175px] absolute top-[33%] left-[38%] h-full w-full max-w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>

            <div className="max-h-[175px] absolute top-[60%] left-[57%] h-full w-full max-w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>

            <div className="max-h-[175px] absolute top-[55%] left-[17%] h-full w-full max-w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>

            <div className="max-h-[175px] absolute top-[20%] left-[65%] h-full w-full max-w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>
          </FlexCenter>
        </FlexCenter>
      </FlexCenter>
    </SectionWrapper>
  );
};

export default index;
