import Link from "next/link";
import React, { useState } from "react";
// Components
import ActionButton from "../../common/components/Button";
import { AppleIconSvg } from "../../common/components/Icons";
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import InputComponent from "../../common/components/Input";
import Modal from "../../common/components/Modal";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";

const index = () => {
  const [number, setNumber] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handelSubmit = () => {
    if (!number) {
      return alert("Please Enter a Specific Value");
    }
    setIsOpen(true);
  };

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setNumber(Number(target.value));
  };

  return (
    // HERO SECTION
    <SectionWrapper className="flex items-center !pt-14 sm:!pt-20 lg:!pt-28 justify-center overflow-hidden">
      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <p>You Entered {number}</p>
      </Modal>
      {/* SVG'S */}
      {/* BLUE IMAGE FOR SMALL SCREEN DEVICES */}
      <SvgWrapper src="/HeroSectionPng/SmallScreenBlueImage.png" className="block small-mobile:hidden w-[468px] h-[447px] top-[-6%] absolute  -z-10" />
      {/* THE LEFT BLUE ONE */}
      <SvgWrapper
        src="/HeroSectionPng/LeftBlueImage.svg"
        // imageClassName="object-cover sm:object-fill"
        className="absolute lg:rotate-0 rotate-90 hidden small-mobile:block scale-[2.2] sm:scale-[2] lg:scale-100 top-[0%] sm:top-[-50%] md:top-[-40%] lg:top-[0%] left-[0%] sm:left-[-17%] md:left-[-16%] lg:left-[-22%] xl:left-[-10%] 2xl:left-[0%] -z-10 h-[40vh] sm:h-full w-full max-h-[397px] sm:max-h-[689px] xl:max-h-[889px] xl:max-w-[1139px]"
      />
      {/* LIGHT BLUE SVG */}
      <SvgWrapper
        src="/HeroSectionPng/LightBlueImage.svg"
        className="w-full h-full max-w-[557px] xl:max-w-[657px] max-h-[392px] xl:max-h-[492px] absolute -z-20 left-[-15%] small-mobile:left-[-20%] sm:left-[-4%] md:left-[8%] lg:left-[3%] xl:left-[8%] 2xl:left-[15%] top-[20%] small-mobile:top-[23%] sm:top-[15%] md:top-[25%] lg:top-[40%] xl:top-[30%] 2xl:top-[33%]"
      />
      {/* LIGHT BLUE NAVBAR SVG */}
      <SvgWrapper
        src="/HeroSectionPng/LightBlueNavbarImage.svg"
        className="h-full -z-10 w-full hidden lg:block max-w-[632px] xl:max-w-[732px] max-h-[548px] xl:max-h-[548px] absolute top-[-22%] lg:top-[-34%] xl:top-[-35%] 2xl:top-[-34%] left-[50%] lg:left-[46%] xl:left-[50%]"
      />

      {/* RIGHT BLUE SVG */}
      <SvgWrapper
        src="/HeroSectionPng/RightBlueImage.svg"
        className="w-full h-full hidden lg:block max-h-[347px] xl:max-h-[397px] absolute lg:top-[2%] xl:top-[3%] 2xl:top-[5%] lg:right-[-20%] xl:right-[-16%] 2xl:right-[-10%] max-w-[418px] xl:max-w-[468px] -z-20"
      />

      <FlexCenter className="gap-[6rem] sm:gap-[10rem] lg:gap-7 w-full flex-col lg:flex-row !justify-center lg:!justify-around">
        {/* LEFT SIDE FORM DIV */}
        <FlexColumn className="p-7 lg:p-5 gap-5  lg:!items-start">
          {/* H2 HEADING */}
          <h2 className="mb-2 text-white">
            The smarter way
            <br />
            <b className="w-full md:pt-[10px] block max-w-[481px]">
              to order your food
            </b>
          </h2>
          {/* FORM DIV */}
          <FlexCenter className="gap-3">
            <InputComponent
              type="number"
              state={number}
              onChangeFunc={handleChange}
              height="35px"
              width="300px"
              placeholder="Enter phone number"
            />
            <ActionButton className="h-[35px]" onClickFunc={handelSubmit}>
              Send
            </ActionButton>
          </FlexCenter>
          {/* SOCIAL ICONS */}
          <FlexColumn className="lg:gap-[24px] gap-[10px] md:gap[17px] lg:!items-start">
            <p className="text-white !w-fit lg:w-full">Available on</p>
            <FlexCenter className="!items-start gap-5">
              {/* APPLE STORE ICON */}
              <Link
                href={"https://www.apple.com/"}
                className="w-[45px] h-[45px]">
                <AppleIconSvg height="100%" width="100%" />
              </Link>
              {/* GOOGLE PLAYSTORE ICON */}
              <Link
                href={"https://play.google.com/"}
                className="w-[45px] h-[45px]">
                <SvgWrapper
                  src="/HeroSectionPng/Googleplay.png"
                  className="relative cursor-pointer h-full w-full"
                />
              </Link>
            </FlexCenter>
          </FlexColumn>
        </FlexColumn>
        {/* IMAGE SECTION AREA */}
        <div className="w-full max-w-[291px]  relative">
          {/* IPHONE BLACK IMAGE */}
          <SvgWrapper
            src="/HeroSectionPng/iPhone_Black.png"
            className="h-[319px] relative sm:h-[580px] block m-auto  max-w-[161px] sm:max-w-[291px] "
          />
          {/* YELLOW SVG */}
          <SvgWrapper
            src="/HeroSectionPng/Yellow.svg"
            className="h-[242px] sm:h-[398px] xl:h-[448px] w-[280px] sm:w-[468px] xl:w-[518px] absolute -z-10 bottom-[-5%] sm:bottom-[-4%] lg:bottom-[-5%] xl:bottom-[-10%] left-[4%] sm:left-[-25%] lg:left-[-35%]"
          />
        </div>
      </FlexCenter>
    </SectionWrapper>
  );
};

export default index;
