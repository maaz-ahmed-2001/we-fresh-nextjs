import React, { useState } from "react";
// Components
import ActionButton from "../../common/components/Button";
import FlexCenter from '../../common/components/FlexCenter';
import FlexColumn from "../../common/components/FlexColumn";
import TextInput from "../../common/components/Input";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";

const index = () => {
  const [number, setNumber] = useState<number>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNumber(Number(event.target.value))
  }

  return (
    <SectionWrapper className="h-full pt-[88px] pb-[103px] max-h-[400px]">
      <FlexColumn className="gap-4">
        {/* DESCRIPTIONS */}
        <FlexColumn className="p-4 gap-3">
          <SectionHeadings normalText="for business" orientation="revert" boldText="WeFresh" />
          <p className="w-full md:max-w-[540px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </FlexColumn>
        {/* LITTLE FORM */}
        <FlexCenter className="gap-6">
          <TextInput
            placeholder="Enter phone number"
            state={number}
            onChangeFunc={handleChange}
            type="number"
            width="300px"
            height="35px"
          />
          <ActionButton className="h-[35px]">Send</ActionButton>
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;
