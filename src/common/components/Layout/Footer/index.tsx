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
      <FlexCenter className="w-full h-max py-5 !items-start md:p-5 gap-5 md:gap-0 !flex-col md:!flex-row md:!justify-evenly">
        {/* LOGO */}
        <Link href="/">
          <WeFreshLogoSvg logoColor="#68BAE3" />
        </Link>
        {/* MAPPING THE DESCRIPTIONS */}
        <FlexCenter className="gap-4 flex-2 md:flex-row !items-start flex-col md:px-3">
          {data.map((item, i) => {
            return (
              <FieldDescription key={i} title={item.title} links={item.links} />
            );
          })}
        </FlexCenter>
        {/* AVAILABLE ON ICONS */}
        <FlexColumn className="gap-3 !justify-start">
          <h6 className="w-full md:w-max">Available on</h6>
          {/* ICONS */}
          <FlexCenter className="gap-3">
            <Link href="https://www.apple.com" className="w-[45px] h-[45px]">
              <img className="w-full h-full" src="/HeroSectionPng/Apple.png" />
            </Link>
            <Link href="https://play.google.com/" className="w-[45px] h-[45px]">
              <img
                className="w-full h-full"
                src="/HeroSectionPng/Googleplay.png"
              />
            </Link>
          </FlexCenter>
        </FlexColumn>
      </FlexCenter>
      {/* HR */}
      <hr className="w-[calc(100%+80px)] bg-border h-[2px]" />
      {/* ALL RIGHT RESERVED DIV */}
      <FlexCenter>
        <p className="!w-full !max-w-max">
          © 2020 WeFresh. All Rights Reserved.
        </p>
      </FlexCenter>
    </FlexColumn>
  );
};

export default index;
