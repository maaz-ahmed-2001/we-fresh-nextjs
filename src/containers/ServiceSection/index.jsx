import React, { useState } from "react";
import ServicesWrapper from "@/common/components/ServicesWrapper";
import { SectionHeadings } from "@/common/components/Headings";
import FlexCenter from "@/common/components/FlexCenter";
import { YellowCircleSvg } from "@/common/components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FlexColumn from "@/common/components/FlexColumn";
import SectionWrapper from "@/common/components/SectionWrapper";
import { links } from "./data/Data";

const index = () => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);

  const handleSwipeChange = (swiper) => {
    const { activeIndex, slides } = swiper;
    setActiveSlideNumber(slides[activeIndex].getAttribute("data-id"));
  };

  return (
    <SectionWrapper className="!py-0">
      <div className="sm:space-y-32 w-full py-5 sm:py-10">
        <div className="gap-3 space-y-5 lg:space-y-10 py-5">
          <SectionHeadings
            className="block m-auto max-w-[428px] w-full h-[70px] text-center"
            boldText="services"
            normalText="We've more"
            orientation="normal"
          />
          <div className="mb-10">
            <Swiper
              className="bg-[#F2F2F2]"
              spaceBetween={50}
              effect="fade"
              slidesPerView={1.7}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2.7,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              onSlideChange={(swiper) => handleSwipeChange(swiper)}
            >
              {links?.map((item, i) => {
                return (
                  <SwiperSlide
                    className="bg-white h-[220px] w-[186px]"
                    key={i}
                    data-id={i}
                  >
                    <ServicesWrapper src={item.url} text={item.text + i} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* OUR APP SECTION */}
        <FlexCenter className="gap-8 flex-col pt-14 sm:pt-0 md:h-[1069px] lg:max-h-[770px] lg:flex-row w-full !justify-center lg:justify-evenly ">
          <FlexCenter className="relative h-max">
            <img
              src="/OurAppIcons/iPhone_Black.png"
              className=" absolute h-[319px] sm:h-[580px] w-full max-w-[161px] sm:max-w-[291px]"
              alt="Iphone Black"
            />
            <div className="sm:h-[444px] h-[242px] w-[280px] sm:w-[448px] ">
              <YellowCircleSvg
                className="w-full h-full"
                height="444px"
                width="448px"
              />
            </div>
          </FlexCenter>
          <FlexColumn className="gap-3 pt-[17px] sm:!pt-[5px] sm:mt-7">
            {links[activeSlideNumber]?.data?.map((item, i) => {
              return (
                <AppDetailsComponent
                  description={item?.description}
                  heading={item?.heading}
                />
              );
            })}
          </FlexColumn>
        </FlexCenter>
      </div>
    </SectionWrapper>
  );
};

export default index;

export const AppDetailsComponent = ({ heading, description }) => {
  return (
    <FlexColumn className="gap-3 group !items-start hover:bg-blue-light relative sm:h-[195px] rounded-lg max-w-[599px] w-full p-4 text-left">
      <h6 className="text-txt-blue w-full">{heading}</h6>
      <p className="text-sm !w-full ">{description}</p>
      <div className="absolute h-6 w-6 hidden sm:group-hover:block rounded-bl-md top-[calc(50%-12px)] -left-[12px] rotate-45 bg-blue-light" />
    </FlexColumn>
  );
};
