import FlexCenter from "@/common/components/FlexCenter";
import FlexColumn from "@/common/components/FlexColumn";
import { SectionHeadings } from "@/common/components/Headings";
import { OurPartnersSectionBlueSvg } from "@/common/components/Icons";
import SectionWrapper from "@/common/components/SectionWrapper";
import React from "react";

const index = () => {
  return (
    <SectionWrapper className="lg:!p-10 md:py-0 !pb-0 !pt-10 md:pt-0 h-max  !px-0 ">
      <FlexCenter className="!flex-col lg:!flex-row  !justify-start w-full md:gap-5 gap-3">
        {/* OUR PARTNERS */}
        <FlexCenter className="w-[100%] lg:w-[50%]">
          <FlexColumn className="relative gap-4 my-10 px-10 h-max sm:my-0">
            {/* BLUE BG SVG */}
            <div className="-z-10 w-[473px] h-[354px] lg:w-[547px] lg:h-[410px] ">
              <OurPartnersSectionBlueSvg />
            </div>
            <FlexColumn className="absolute gap-4">
              <SectionHeadings
                boldText="Partners"
                orientation="normal"
                normalText="Our"
                className="max-w-[264px] lg:!justify-start text-center w-full h-full max-h-[70px]"
              />
              <p className="max-h-[120px] max-w-[326px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod.
              </p>
            </FlexColumn>
          </FlexColumn>
        </FlexCenter>
        {/* ABSOLUTE IMAGES */}
        <FlexCenter className="w-[100%] h-[300px] md:h-[400px] xl:h-[500px] ">
          <FlexCenter className="relative h-full w-[100%] sm:w-[60%] lg:w-[100%]">
            {/* TOP_LEFT CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute top-[0%] left-[5%] w-[91px] md:w-[130px] xl:w-[175px]">
              <img
                src="/OurPartnersSection/7-Eleven.png"
                className="h-full w-full"
              />
            </div>
            {/* CENTRAL CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute">
              <img
                src="/OurPartnersSection/TrueCoffee.png"
                className="h-full w-full"
              />
            </div>
            {/* BOTTOM RIGHT CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute bottom-[0%] right-[5%] w-[91px] md:w-[130px] xl:w-[175px]">
              <img
                src="/OurPartnersSection/CpFreshmart.png"
                className="h-full w-full"
              />
            </div>
            {/* BOTTOM LEFT CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute bottom-[10%]  left-[10%] w-[91px] md:w-[130px] xl:w-[175px]">
              <img
                src="/OurPartnersSection/Makro.png"
                className="h-full w-full"
              />
            </div>
            {/* TOP_RIGHT CIRCLE */}
            <div className="h-[91px] md:h-[130px] xl:h-[175px] absolute top-[10%] right-[10%] ">
              <img
                src="/OurPartnersSection/TrueYou.png"
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
