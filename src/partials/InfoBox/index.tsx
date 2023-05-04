import { OperationCanceledException } from 'typescript';
import FlexColumn from '../../common/components/FlexColumn'

type infoBoxProps = {
    heading: string
    paragraph: string
}

const index = ({ heading, paragraph }: infoBoxProps) => {
    return (
        <FlexColumn className="w-[280px]  sm:w-[380px] pb-[40px] !justify-end gap-3 rounded-md border-border border-2 h-[199px]">
            <h6 className="">{heading}</h6>
            <p className="max-w-[317px] text-center w-full">{paragraph}</p>
        </FlexColumn>
    );
};

export default index;
