import FlexCenter from "@/common/components/FlexCenter";
import { SectionHeadings } from "@/common/components/Headings";
import React, { useState } from "react";
import TextInput from "../../components/Input";
import ActionButton from "../../components/Button";
import SectionWrapper from "@/common/components/SectionWrapper";

const index = () => {
  const [area, setArea] = useState("");
  return (
    // WRAPPER
    <SectionWrapper className="h-full max-h-[702px]">
      <FlexCenter className="gap-7 !justify-evenly">
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
        <div className="max-h-[702px] w-full max-w-[694px] ">
          <div className="flex-1 w-full max-w-[620px]">
            <img src="/FindUsSectionAssets/lab.png" className="w-full h-full" />
          </div>
        </div>
      </FlexCenter>
    </SectionWrapper>
  );
};

export default index;
