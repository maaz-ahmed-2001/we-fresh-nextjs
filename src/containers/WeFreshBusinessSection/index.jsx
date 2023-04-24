import FlexCenter from "@/common/components/FlexCenter";
import FlexColumn from "@/common/components/FlexColumn";
import { SectionHeadings } from "@/common/components/Headings";
import SectionWrapper from "@/common/components/SectionWrapper";
import React, { useState } from "react";
import TextInput from "@/common/components/Input";
import ActionButton from "@/common/components/Button";

const index = () => {
  const [number, setNumber] = useState();
  return (
    <SectionWrapper className="h-full max-h-[400px]">
      <FlexColumn className="gap-4">
        {/* DESCRIPTIONS */}
        <FlexColumn className="p-4">
          <SectionHeadings normalText="for business" boldText="WeFresh" />
          <p className="w-full max-w-[540px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </FlexColumn>
        {/* LITTLE FORM */}
        <FlexCenter className="gap-6">
          <TextInput
            placeholder="Enter phone number"
            state={number}
            setState={setNumber}
            type="number"
            width="300px"
            height="35px"
          />
          <ActionButton className="w-[140px] h-[35px]">Send</ActionButton>
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;
