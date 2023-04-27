import FlexCenter from "@/common/components/FlexCenter";
import { SectionHeadings } from "@/common/components/Headings";
import React, { useState } from "react";
import TextInput from "@/common/components/Input";
import ActionButton from "@/common/components/Button";
import SectionWrapper from "@/common/components/SectionWrapper";
import {
  FindUsSectionBlueSvg,
  FindUsSectionYellowSvg,
  YellowCircleSvg,
} from "@/common/components/Icons";

const index = () => {
  const [area, setArea] = useState("");
  return (
    // WRAPPER
    <SectionWrapper className="h-full md:max-h-[702px] md:pt-[154px] md:pb-[135px] !flex items-center overflow-hidden justify-center">
      <FlexCenter className="md:my-24 gap-28 md:gap-16 flex-col md:!flex-row h-[calc(100%-80px)] w-full md:w-[calc(100%-80px)] !justify-evenly overflow-x-visible">
        {/* FORM */}
        <div className="flex w-full max-w-[460px] gap-4 flex-col">
          <SectionHeadings
            normalText="Find us in these"
            boldText="Area"
            orientation="normal"
            className="w-full md:!justify-start max-w-[441px] !text-left h-[70px]"
          />
          <FlexCenter className="gap-3 justify-center md:!justify-start ">
            <TextInput
              placeholder="Enter your area"
              type="text"
              state={area}
              setState={setArea}
              height="35px"
            />
            <ActionButton className="h-[35px]">Search</ActionButton>
          </FlexCenter>
        </div>
        {/* IMAGE */}
        <div className="h-full max-h-[207px] sm:max-h-[350px] md:max-h-[420px] lg:max-h-[702px]  w-full max-w-[694px] flex items-center justify-center  ">
          <div className="flex-1 w-full h-[207px] sm:h-full max-w-[310px] sm:max-w-[420px] md:max-w-[540px] overflow-visible">
            <img src="/FindUsSectionAssets/lab.png" className="w-full h-full" />
          </div>
        </div>
      </FlexCenter>
      {/* SVG DIVS */}
      {/* BLUE COLORED SVG */}
      <div className="absolute h-[315px] sm:h-[580px] lg:h-[630px] w-[404px] lg:w-[500px] xl:w-[807px] -z-20 bottom-[3%] sm:bottom-[-6%] md:top-[7%] lg:top-[4%] xl:top-[2%] right-[0%] sm:right-[0%] md:right-[-12%] lg:right-[-10%] xl:right-[-10%]">
        <FindUsSectionBlueSvg />
      </div>
      {/* YELLOW COLOURED SVG */}
      <div className="absolute h-[199px] sm:h-[297px] lg:h-[397px] w-[234px] sm:w-[300px] lg:w-[400px] xl:w-[468px] bottom-[-4%] sm:bottom-[-4%] md:bottom-[17%] lg:bottom-[10%] xl:bottom-[3%] right-[38%] sm:right-[25%] md:right-[15%] lg:right-[9%] xl:right-[8%] -z-10" >
        <FindUsSectionYellowSvg />
      </div>
    </SectionWrapper>
  );
};

export default index;
