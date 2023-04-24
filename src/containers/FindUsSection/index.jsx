import FlexCenter from "@/common/components/FlexCenter";
import { SectionHeadings } from "@/common/components/Headings";
import React, { useState } from "react";
import TextInput from "@/common/components/Input";
import ActionButton from "@/common/components/Button";
import SectionWrapper from "@/common/components/SectionWrapper";
import { FindUsSectionBlueSvg, FindUsSectionYellowSvg, YellowCircleSvg } from "@/common/components/Icons";

const index = () => {
  const [area, setArea] = useState("");
  return (
    // WRAPPER
    <SectionWrapper className="h-full max-h-[702px] !p-0 !flex items-center overflow-hidden justify-center">
      <FlexCenter className="my-24 gap-16 h-[calc(100%-80px)] w-[calc(100%-80px)] !justify-evenly overflow-x-visible">
        {/* FORM */}
        <div className="flex w-full max-w-[460px] gap-4 flex-col">
          <SectionHeadings
            normalText="Find us in these"
            boldText="Area"
            orientation="normal"
            className="w-full max-w-[441px] !text-left h-[70px]"
          />
          <FlexCenter className="gap-3 !justify-start ">
            <TextInput
              placeholder="Enter your area"
              type="text"
              state={area}
              setState={setArea}
              height="35px"
              width="300px"
            />
            <ActionButton className="w-full max-w-[140px] h-[35px]">
              Search
            </ActionButton>
          </FlexCenter>
        </div>
        {/* IMAGE */}
        <div className="h-full max-h-[702px] w-full max-w-[694px] flex items-center justify-center  ">
          <div className="relative flex-1 w-full max-w-[620px] overflow-visible">
            <img src="/FindUsSectionAssets/lab.png" className="w-full h-full" />
            {/* YELLOW COLOURED SVG */}
            <FindUsSectionYellowSvg/>
            {/* BLUE COLORED SVG */}
            <FindUsSectionBlueSvg/>
          </div>
        </div>
      </FlexCenter>
    </SectionWrapper>
  );
};

export default index;
