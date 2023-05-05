// Components
import FlexCenter from '../../common/components/FlexCenter';
import FlexColumn from "../../common/components/FlexColumn";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";

const index = () => {
  return (
    <SectionWrapper className="bg-bg-blue pt-[96px] !max-w-full pb-[83px] md:py-[103px]">
      <FlexColumn className="gap-4">
        {/* DESCRIPTION */}
        <FlexColumn className="w-full m-5 px-3 sm:px-0 gap-2">
          <SectionHeadings
            boldText="Get the app"
            normalText="Ready to"
            orientation="normal"
          />
          <p className="w-full md:w-[540px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
          </p>
        </FlexColumn>
        {/* LINKS */}
        <FlexCenter className='gap-3 !flex-col md:!flex-row ' >
          <SvgWrapper src="/GetTheAppSection/Apple.png" className="h-[55px] relative w-[165px] md:w-[186px]" />
          <SvgWrapper src="/GetTheAppSection/Googleplay.png" className="h-[55px] relative w-[165px] md:w-[186px]" />
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;
