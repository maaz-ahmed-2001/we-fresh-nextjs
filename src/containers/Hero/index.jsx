import Container from "@/common/components/Container";
import React, { useState } from "react";
import InputComponent from "@/common/components/Input";
import ActionButton from "@/common/components/Button";
import { AppleIconSvg } from "@/common/components/Icons";
import SectionWrapper from "@/common/components/SectionWrapper";
import FlexCenter from "@/common/components/FlexCenter";
import FlexColumn from "@/common/components/FlexColumn";

const index = () => {
  const [number, setNumber] = useState();
  return (
    // HERO SECTION
    <SectionWrapper className="h-[840px] relative flex items-center justify-center overflow-hidden">
      {/* SVG'S */}
      {/* THE LEFT BLUE ONE */}
      <div className="absolute top-[-10%] left-[-10%] -z-10 w-full h-full max-h-[889px] max-w-[1139px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 830 794"
          className=""
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M830 326.814C830 566.5 456.183 833.786 197.229 788.109C-61.7257 742.432 -309 409.823 -309 170.136C-309 -69.5501 6.13837 -96 231.269 -96C456.4 -96 830 87.1273 830 326.814Z"
            fill="#96D5F0"
          />
        </svg>
      </div>
      {/* LIGHT BLUE SVG */}
      <div className="w-full h-full max-w-[657px] max-h-[492px] absolute -z-20 left-[7%] top-[35%]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 655 499"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.197568"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M638.594 405.211C698.799 287.053 573.813 57.3966 429.249 12.1012C284.686 -33.1942 74.0535 66.0185 13.8486 184.177C-46.3563 302.336 108.966 397.901 224.672 456.856C340.379 515.812 578.39 523.37 638.594 405.211Z"
            fill="#96D5F0"
          />
        </svg>
      </div>
      {/* LIGHT BLUE NAVBAR SVG */}
      <div className="h-full -z-10 w-full max-w-[732px] max-h-[548px] absolute top-[-26%] left-[52%]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 732 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.197568"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 -134.595C0 13.0244 240.24 177.641 406.662 149.51C573.084 121.378 732 -83.471 732 -231.09C732 -378.71 529.47 -395 384.786 -395C240.101 -395 0 -282.215 0 -134.595Z"
            fill="#96D5F0"
          />
        </svg>
      </div>

      {/* RIGHT BLUE SVG */}
      <div className="w-full h-full max-h-[397px] absolute top-[5%] right-[-15%] max-w-[468px] -z-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 182 397"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 178.113C0 66.7069 101.082 0 212.532 0C323.982 0 468 48.5139 468 159.921C468 271.327 332.569 397 221.119 397C109.669 397 0 289.52 0 178.113Z"
            fill="#96D5F0"
          />
        </svg>
      </div>

      <FlexCenter className="gap-7 w-full !justify-around">
        <FlexColumn className="p-5 gap-5 !items-start">
          {/* H2 HEADING */}
          <h2 className="text-[52px] text-white">
            The smarter way <br />{" "}
            <strong className="w-full max-w-[481px]">to order your food</strong>
          </h2>
          {/* FORM DIV */}
          <FlexCenter className="gap-3">
            <InputComponent
              type="number"
              state={number}
              setState={setNumber}
              height="35px"
              width="300px"
              placeholder="Enter Phone Number."
            />
            <ActionButton className="h-[35px]">Send</ActionButton>
          </FlexCenter>
          {/* SOCIAL ICONS */}
          <FlexColumn className="gap-2 !items-start">
            <p className="text-white">Available on</p>
            <FlexCenter className="!items-start gap-5">
              <AppleIconSvg height="45px" width="45px" />
              <div className="h-[45px] w-[45px]">
                <img src="/Googleplay.png" className="w-full h-full" />
              </div>
            </FlexCenter>
          </FlexColumn>
        </FlexColumn>
        <div className="w-full max-w-[291px] h-[580px] relative">
          <img src="/iPhone_Black.png" className="h-full w-full" />
          {/* YELLOW SVG */}
          <div className="h-[448px] w-[518px] absolute -z-10 bottom-[-5%] left-[-35%]" >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 499 459"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.551921"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M494.662 151.17C470.958 16.7346 322.188 -14.5006 206.065 5.97493C89.9423 26.4505 -19.7795 216.668 3.92506 351.103C27.6297 485.538 189.697 463.772 305.82 443.297C421.943 422.821 518.367 285.605 494.662 151.17Z"
                fill="#FFE749"
              />
            </svg>
          </div>
        </div>
      </FlexCenter>
    </SectionWrapper>
  );
};

export default index;
