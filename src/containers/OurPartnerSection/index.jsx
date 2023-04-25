import FlexCenter from "@/common/components/FlexCenter";
import FlexColumn from "@/common/components/FlexColumn";
import { SectionHeadings } from "@/common/components/Headings";
import { OurPartnersSectionBlueSvg } from "@/common/components/Icons";
import SectionWrapper from "@/common/components/SectionWrapper";
import React from "react";

const index = () => {
  return (
    <SectionWrapper className="sm:!p-10 h-max lg:h-[760px] !px-0 ">
      <FlexCenter className="h-full !flex-col lg:!flex-row max-h-[760px] !justify-start w-full gap-16 lg:gap-3">
        {/* OUR PARTNERS */}
        <FlexCenter className="relative w-full h-max lg:max-w-[50%] xl:max-w-[40%] lg:h-full py-20">
          <FlexColumn className="gap-4 my-10 px-10 h-max sm:my-0 sm:max-w-[473px] lg:max-w-[547px]">
            {/* BLUE BG SVG */}
            <div className="absolute -z-10 top-0 left-[-5%] sm:left-0 w-[105%] h-[105%] sm:w-[100%] sm:h-[100%]">
              <OurPartnersSectionBlueSvg />
            </div>
            <SectionHeadings
              boldText="Partners"
              orientation="normal"
              normalText="Our"
              className="max-w-[264px] text-center w-full h-full max-h-[70px]"
            />
            <p className="max-h-[120px] max-w-[326px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod.
            </p>
          </FlexColumn>
        </FlexCenter>
        {/* ABSOLUTE IMAGES */}
        <FlexCenter className="lg:flex-grow w-[100%] sm:w-[80%] md:w-[63%] h-[900px] lg:h-[100%]">
          <FlexCenter className="lg:h-[90%] w-full h-full lg:w-[90%] relative ">
            {/* TOP_LEFT CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute top-[20%] lg:top-[18%] xl:top-[10%] left-[13%] lg:left-[12%] xl:left-[17%] w-[91px] md:w-[130px] xl:w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>
            {/* CENTRAL CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute top-[35%] lg:top-[33%] left-[35%] lg:left-[33%] xl:left-[38%] w-[91px] md:w-[130px] xl:w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>
            {/* BOTTOM RIGHT CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute top-[55%] lg:top-[48%] xl:top-[60%] left-[55%] lg:left-[52%] xl:left-[57%] w-[91px] md:w-[130px] xl:w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>
            {/* BOTTOM LEFT CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute top-[52%] lg:top-[44%] xl:top-[55%] left-[13%] lg:left-[4%] xl:left-[17%] w-[91px] md:w-[130px] xl:w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>
            {/* TOP_RIGHT CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute top-[26%] lg:top-[25%] xl:top-[20%] left-[60%] lg:left-[63%] xl:left-[68%] w-[91px] md:w-[130px] xl:w-[175px]">
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
