import FlexCenter from "@/common/components/FlexCenter";
import FlexColumn from "@/common/components/FlexColumn";
import { SectionHeadings } from "@/common/components/Headings";
import SectionWrapper from "@/common/components/SectionWrapper";
import React from "react";

const index = () => {
  return (
    <SectionWrapper className="h-full bg-bg-blue max-h-[430px] ">
      <FlexColumn className="gap-4">
        {/* DESCRIPTION */}
        <FlexColumn className="w-full m-5 gap-2">
          <SectionHeadings
            boldText="Get the app"
            normalText="Ready to"
            orientation="normal"
          />
          <p className="w-full md:max-w-[540px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
          </p>
        </FlexColumn>
        {/* LINKS */}
        <FlexCenter className='gap-3 !flex-col md:!flex-row ' >
          <div className="h-[55px] w-full max-w-[165px] md:max-w-[186px]">
            <img src="/GetTheAppSection/Apple.png" className="w-full h-full" />
          </div>
          <div className="h-[55px] w-full max-w-[165px] md:max-w-[186px]">
            <img src="/GetTheAppSection/Apple.png" className="w-full h-full" />
          </div>
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;
