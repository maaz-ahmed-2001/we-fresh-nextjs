// Components
import FlexColumn from '../../common/components/FlexColumn';

type infoBoxProps = {
    heading: string
    paragraph: string
}

const index = ({ heading, paragraph }: infoBoxProps) => {
    return (
        <FlexColumn className="w-[280px] sm:w-[380px] rounded-10 pb-[15px] sm:pb-[40px] !justify-end gap-3 border-border border-2 h-[199px]">
            <h5 className="">{heading}</h5>
            <p className="max-w-[317px] leading-5 text-center w-full">{paragraph}</p>
        </FlexColumn>
    );
};

export default index;
