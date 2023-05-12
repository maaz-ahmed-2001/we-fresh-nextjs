import React, { useState } from "react";
// Components
import Accordian from "../../partials/Accordian";
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import InfoBox from "../../partials/InfoBox";
import SubHeading from "../../common/components/SubHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";

const index = () => {
  const [isShown, setIsShown] = useState<number[]>([]);
  const [isMultiple, setIsMultiple] = useState<boolean>(true);

  const handleToggle = (id: number) => {
    if (isMultiple) {
      // CHECKING IF THE ARRAY LENGTH IS EMPTY OR NOT
      if (isShown.includes(id)) {
        setIsShown(isShown.filter((i) => i !== id));
      } else {
        setIsShown([...isShown, id]);
      }
    } else {
      // ONE TIME WITH SWITCHING LOGIC
      if (isShown.length !== 0) {
        if (isShown.includes(id)) {
          setIsShown([]);
        } else {
          setIsShown([id]);
        }
      } else {
        setIsShown([id]);
      }
    }
    const element = document.getElementById(id.toString());

    const elementHeight = element?.style.height;
    if (element) {
      if (!elementHeight || elementHeight === "0px" || elementHeight == "0") {
        const expectedHeight = element?.scrollHeight;
        element.style.height = `${expectedHeight}px`;
      } else {
        element.style.height = `0px`;
      }
    }
  };

  const accordianData = [
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
  ];
  return (
    <SectionWrapper className="px-0">
      <FlexColumn className="gap-5 py-2">
        <SubHeading text="Got Questions?" />
        <p className="max-w-[294px] w-full text-center">
          Perfect, we've got answers!
        </p>
        {/* QUESTIONS */}
        <FlexColumn className="w-full h-max gap-2">
          {accordianData.map((item, index) => {
            // const isPresent = isShown.find(i => i === index)
            return (
              <Accordian
                key={index}
                id={index}
                toggleFunc={handleToggle}
                isOpen={isShown.includes(index)}
                heading={item.heading}
                paragraph={item.paragraph}
              />
            );
          })}
        </FlexColumn>
        {/* STILL HAVE A QUESTION DIV */}
        <FlexColumn className="gap-6 py-3 w-[90%] sm:w-full h-max ">
          <SubHeading text="Still have a question?" />
          <p className="max-w-[704px] w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </FlexColumn>
        {/* CONTACT INFO DIV'S */}
        <FlexCenter className="w-full px-3 !flex-col sm:!flex-row  h-max gap-3">
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
