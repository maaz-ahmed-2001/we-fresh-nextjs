import React from "react";
import ServicesWrapper from "@/common/components/ServicesWrapper";
import { SectionHeadings } from "@/common/components/Headings";
import FlexCenter from "@/common/components/FlexCenter";
import { YellowCircleSvg } from "@/common/components/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FlexColumn from "@/common/components/FlexColumn";
import SectionWrapper from "@/common/components/SectionWrapper";

const index = () => {
  const links = [
    {
      url: "/ServiceIcons/Cafe.png",
      text: "Cafe",
    },
    {
      url: "/ServiceIcons/Cafe.png",
      text: "Cafe",
    },
    {
      url: "/ServiceIcons/Cafe.png",
      text: "Cafe",
    },
    {
      url: "/ServiceIcons/Cafe.png",
      text: "Cafe",
    },
  ];
  return (
    <SectionWrapper className="!py-0">
      <div className="space-y-6 w-full flex gap-32 flex-col py-10">
        <div className="gap-3  py-5">
          <SectionHeadings
            className="block m-auto max-w-[428px] w-full h-[70px] text-center"
            boldText="services"
            normalText="We've more"
            orientation="normal"
          />
          <div className="mb-10">
            <Swiper
              className="bg-[#F2F2F2]"
              spaceBetween={25}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {links.map((item, i) => {
                return (
                  <SwiperSlide
                    className="max-w-[186px] bg-white w-full"
                    key={i}
                  >
                    <ServicesWrapper src={item.url} text={item.text} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* OUR APP SECTION */}
        <FlexCenter className="gap-24 flex-col h-[1069px] lg:max-h-[770px] lg: lg:flex-row w-full !justify-center lg:justify-evenly ">
          <FlexCenter className="relative h-max">
            <img
              src="/OurAppIcons/iPhone_Black.png"
              className=" absolute h-[580px] w-[291px] max-w-[291px]"
              alt="Iphone Black"
            />
            <YellowCircleSvg height="444px" width="448px" />
          </FlexCenter>
          <FlexColumn className="gap-3">
            <AppDetailsComponent
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
              heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <AppDetailsComponent
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
              heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <AppDetailsComponent
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos rerum
        obcaecati vitae aspernatur, fuga, excepturi cupiditate ut necessitatibus
        voluptatem dolorem possimus ipsa harum odio commodi?"
              heading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </FlexColumn>
        </FlexCenter>
      </div>
    </SectionWrapper>
  );
};

export default index;

export const AppDetailsComponent = ({ heading, description }) => {
  return (
    <FlexColumn className="gap-3 group !items-start hover:bg-blue-light relative h-[195px] rounded-lg max-w-[599px] w-full p-4 text-left">
      <h6 className="text-txt-blue w-full">{heading}</h6>
      <p className="text-sm !w-full ">{description}</p>
      <div className="absolute h-6 w-6 hidden group-hover:block rounded-bl-md top-[calc(50%-12px)] -left-[12px] rotate-45 bg-blue-light" />
    </FlexColumn>
  );
};
