import FlexColumn from '../../common/components/FlexColumn'

type AppDetailsComponentProps = {
    heading: string
    description: string
}

const index = ({ heading, description }: AppDetailsComponentProps) => {
    return (
        <FlexColumn className="gap-3 group !items-start transition-colors hover:bg-blue-light relative sm:h-[195px] rounded-lg max-w-[599px] w-full p-4 text-left">
            <h5 className="text-txt-blue f-22 w-full">{heading}</h5>
            <p className="!w-full ">{description}</p>
            <div className="absolute h-6 w-6 hidden sm:group-hover:block transition-colors rounded-bl-md top-[calc(50%-12px)] -left-[12px] rotate-45 bg-blue-light" />
        </FlexColumn>
    );
};

export default index;