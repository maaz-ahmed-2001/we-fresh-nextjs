import FlexCenter from "@/common/components/FlexCenter";
import FlexColumn from "@/common/components/FlexColumn";
import { SubHeading } from "@/common/components/Headings";
import SectionWrapper from "@/common/components/SectionWrapper";
import React from "react";

const index = () => {
  return (
    <SectionWrapper className="h-full max-h-[1375px]">
      <FlexColumn className="gap-5 py-2">
        <SubHeading text="Got Questions?" className="" />
        <p className="max-w-[294px] w-full text-center">
          Perfect, we've got answers!
        </p>
        {/* QUESTIONS */}
        <FlexColumn className="w-full h-max gap-2">
          <QuerySections
            heading="How to get started?"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      aspernatur cum vero consectetur ab eius excepturi nisi!"
          />
          <QuerySections
            heading="How to get started?"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      aspernatur cum vero consectetur ab eius excepturi nisi!"
          />
          <QuerySections
            heading="How to get started?"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      aspernatur cum vero consectetur ab eius excepturi nisi!"
          />
          <QuerySections
            heading="How to get started?"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      aspernatur cum vero consectetur ab eius excepturi nisi!"
          />
          <QuerySections
            heading="How to get started?"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      aspernatur cum vero consectetur ab eius excepturi nisi!"
          />
        </FlexColumn>
        {/* STILL HAVE A QUESTION DIV */}
        <FlexColumn className="gap-6 py-3 w-full h-max ">
          <SubHeading text="Still have a question?" />
          <p className="max-w-[704px] w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </FlexColumn>
        {/* CONTACT INFO DIV'S */}
        <FlexCenter className="w-full h-max gap-3">
          <InfoBox
            heading="+66 8959888"
            paragraph="Lorem ipsum dolor sit amet, consectetur"
          />
          <InfoBox
            heading="Support@service.com"
            paragraph="Lorem ipsum dolor sit amet, consectetur"
          />
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;

export const InfoBox = ({ heading, paragraph }) => {
  return (
    <FlexColumn className="w-full max-w-[380px] gap-3 rounded-md border-border border-2 h-[199px]">
      <h6 className="">{heading}</h6>
      <p className="max-w-[317px] text-center w-full">{paragraph}</p>
    </FlexColumn>
  );
};

export const QuerySections = ({ paragraph, heading }) => {
  return (
    <FlexColumn className="max-w-[780px] group hover:h-fit p-5 !items-start w-full min-h-[70px] border-2 rounded-md hover:border-txt-blue border-border bg-white gap-2 ">
      <h6 className="group-hover:text-txt-blue">{heading}</h6>
      <p className="max-w-[679px] group-hover:block group-hover:h-fit h-0 hidden w-full">
        {paragraph}
      </p>
    </FlexColumn>
  );
};
