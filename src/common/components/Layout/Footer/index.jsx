import React from "react";
import FlexColumn from "../../FlexColumn";
import FlexCenter from "../../FlexCenter";
import { WeFreshLogoSvg } from "../../Icons";
import SectionWrapper from "../../SectionWrapper";

const index = () => {
  const data = [
    {
      title: "Service Area",
      description: "Lorem ipsum dol Psum dolor Sum dolor Lorem ipsum",
    },
    {
      title: "Service Area",
      description: "Lorem ipsum dol Psum dolor Sum dolor Lorem ipsum",
    },
    {
      title: "Service Area",
      description: "Lorem ipsum dol Psum dolor Sum dolor Lorem ipsum",
    },
  ];
  return (
      <FlexColumn className="gap-7 pt-16 pb-2 px-4 sm:px-5 lg:px-10 bg-bg-blue">
        {/* MAIN FOOTER */}
        <FlexCenter className="w-full h-max py-5 md:p-5 gap-5 md:gap-0 !items-start md:!items-center !flex-col md:!flex-row md:!justify-evenly">
          {/* LOGO */}
          <div>
            <WeFreshLogoSvg logoColor="#68BAE3" />
          </div>
          {/* MAPPING THE DESCRIPTIONS */}
          <FlexCenter className="gap-4 flex-2 md:flex-row flex-col md:p-3">
            {data.map((item, i) => {
              return (
                <FieldDescription
                  key={i}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </FlexCenter>
          {/* AVAILABLE ON ICONS */}
          <FlexColumn className="gap-3">
            <p className="w-full md:w-max" >Available on</p>
            {/* ICONS */}
            <FlexCenter className="gap-3">
              <div className="w-[45px] h-[45px]">
                <img className="w-full h-full" src="/Apple.png" />
              </div>
              <div className="w-[45px] h-[45px]">
                <img className="w-full h-full" src="/Googleplay.png" />
              </div>
            </FlexCenter>
          </FlexColumn>
        </FlexCenter>
        {/* HR */}
        <hr className="w-[calc(100%+80px)] bg-border h-[2px]" />
        {/* ALL RIGHT RESERVED DIV */}
        <FlexCenter>
          <p className="!w-full !max-w-max" >© 2020 WeFresh. All Rights Reserved.</p>
        </FlexCenter>
      </FlexColumn>
  );
};

export const FieldDescription = ({ title, description }) => {
  return (
    <FlexColumn className="md:p-4 py-5 md:items-start md:py-0 gap-4">
      <h6 className="md:max-w-[114px] w-full">{title}</h6>
      <p className="w-full max-w-[130px]">{description}</p>
    </FlexColumn>
  );
};

export default index;
