import React from 'react'
import FlexColumn from "../FlexColumn";

type FieldDescriptionProps = {
    title: string
    description: string
}

const index = ({ title, description }: FieldDescriptionProps) => {
    return (
        <FlexColumn className="md:p-4 py-5 md:items-start md:py-0 gap-4">
            <h6 className="md:max-w-[114px] w-full">{title}</h6>
            <p className="w-full max-w-[130px]">{description}</p>
        </FlexColumn>
    );
};

export default index;
