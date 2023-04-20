import React from "react";
import FlexCenter from "../../components/FlexCenter";
import FlexColumn from "../../components/FlexColumn";
import { YellowCircleSvg } from "../../components/Icons";

const index = () => {
  return (
    <FlexCenter className="gap-24">
      <div className="relative">
        <img
          src="/OurAppIcons/iPhone_Black.png"
          className="h-[30rem]"
          alt="Iphone Black"
        />
        <YellowCircleSvg height="300" />
      </div>
      <FlexColumn className='gap-3' >
        <AppDetailsComponent
          description="        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
          heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <AppDetailsComponent
          description="        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
          heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <AppDetailsComponent
          description="        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
          heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </FlexColumn>
    </FlexCenter>
  );
};

export const AppDetailsComponent = ({ heading, description }) => {
  return (
    <FlexColumn className="gap-3 bg-red-400 max-w-lg p-4 text-left">
      <h6 className="text-txt-blue w-full" >{heading}</h6>
      <p className="text-sm" >{description}</p>
    </FlexColumn>
  );
};

export default index;
