import Container from "../../components/Container";
import React, { useState } from "react";
import InputComponent from "../../components/Input";
import ActionButton from '../../components/Button';
import { AppleIconSvg } from "../../components/Icons";
import SectionWrapper from "@/common/components/SectionWrapper";

const index = () => {
  const [number, setNumber] = useState();
  return (
    // HERO SECTION
    <SectionWrapper className='h-[840px] bg-slate-300' >
      <Container explicitClassName="flex gap-7 sm:gap-4 flex-col sm:flex-row">
        <div className="p-5 mt-10 m-auto flex gap-5 flex-col bg-red-300 ">
          {/* H2 HEADING */}
          <h2 className="text-3xl text-white">
            The smarter way <br /> <strong>to order your food</strong>
          </h2>
          {/* FORM DIV */}
          <div className="flex items-center justify-between">
            <InputComponent
              type="number"
              state={number}
              setState={setNumber}
              placeholder="Enter Phone Number."
            />
            <ActionButton width={'fit-content'} >Send</ActionButton>
          </div>
          {/* SOCIAL ICONS */}
          <div>
            <small className="text-xs font-semibold text-white">Available on</small>
            <div className="flex items-start gap-4">
              <AppleIconSvg height='25px' width='25px' />
              <img src="/Googleplay.svg" className="w-[25px] h-[25px]"  />
            </div>
          </div>
        </div>
        <div className="m-auto bg-yellow-300 ">
          <img src="/iPhone_Black.png" alt="#" className="h-96" />
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default index;
