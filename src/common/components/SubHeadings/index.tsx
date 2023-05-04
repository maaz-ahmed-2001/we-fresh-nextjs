type SubHeadingProps = {
    text: string
    className?: string
}


const index = ({ text, className }: SubHeadingProps) => {
    return <h3 className={`section-heading ${className}`}>{text}</h3>;
};

export default index;