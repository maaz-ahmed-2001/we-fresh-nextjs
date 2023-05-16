import React from "react";
// Components
import FlexColumn from "../../FlexColumn";
import FlexCenter from "../../FlexCenter";
import FieldDescription from "../../FooterFieldDescription";
import { WeFreshLogoSvg } from "../../Icons";
import Link from "next/link";

const index = () => {
  const data = [
    {
      title: "SERVICE AREA",
      links: [
        {
          title: "Lorem ipsum dol",
          url: "#",
        },
        {
          title: "Psum dolor",
          url: "#",
        },
        {
          title: "Sum dolor",
          url: "#",
        },
        {
          title: "Lorem ipsum",
          url: "#",
        },
      ],
    },
    {
      title: "ABOUT",
      links: [
        {
          title: "Story of WeFresh",
          url: "#",
        },
        {
          title: "Read our blog",
          url: "#",
        },
        {
          title: "Sign up to deliver",
          url: "#",
        },
      ],
    },
    {
      title: "HELP",
      links: [
        {
          title: "Help center",
          url: "#",
        },
        {
          title: "Read FAQs",
          url: "#",
        },
        {
          title: "Community",
          url: "#",
        },
        {
          title: "Security",
          url: "#",
        },
      ],
    },
  ];
  return (
    <FlexColumn className="gap-7 pt-16 pb-2 px-4 sm:px-5 lg:px-10 bg-bg-blue">
      {/* MAIN FOOTER */}
      <FlexColumn className="w-full !items-start h-max">
        <FlexCenter className="py-5 !items-start md:py-5 gap-3 w-full !flex-col md:!flex-row">
          {/* LOGO */}
          <Link href="/">
            <WeFreshLogoSvg logoColor="#68BAE3" />
          </Link>
          {/* MAPPING THE DESCRIPTIONS */}
          <FlexCenter className="gap-4 flex-2 md:flex-row !items-start flex-col md:px-3">
            {data.map((item, i) => {
              return (
                <FieldDescription
                  key={i}
                  title={item.title}
                  links={item.links}
                />
              );
            })}
          </FlexCenter>
          {/* AVAILABLE ON ICONS */}
          <FlexColumn className="gap-3 w-full md:!w-fit md:!justify-start">
            <h6 className="w-full text-center md:w-max">Available on</h6>
            {/* ICONS */}
            <FlexCenter className="gap-3">
              <Link href="https://www.apple.com" className="w-[45px] h-[45px]">
                <img
                  className="w-full h-full"
                  src="/HeroSectionPng/Apple.png"
                />
              </Link>
              <Link
                href="https://play.google.com/"
                className="w-[45px] h-[45px]">
                <img
                  className="w-full h-full"
                  src="/HeroSectionPng/Googleplay.png"
                />
              </Link>
            </FlexCenter>
          </FlexColumn>
        </FlexCenter>
        <FlexColumn className="w-full gap-3">
          {/* HR */}
          <hr className="w-[calc(100%+80px)] bg-border h-[2px]" />
          {/* ALL RIGHT RESERVED DIV */}
          <FlexCenter className="w-full md:!w-[730px] md:!justify-start">
            <p className="!max-w-max w-full">
              © 2020 WeFresh. All Rights Reserved.
            </p>
          </FlexCenter>
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  );
};

export default index;
