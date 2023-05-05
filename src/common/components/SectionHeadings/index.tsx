type SectionHeadingProps = {
  normalText: string
  boldText: string
  className?: string
  orientation: 'normal' | 'revert'
}


const index = ({
  normalText,
  boldText,
  orientation,
  className,
}: SectionHeadingProps) => {
  return orientation === "normal" ? (
    <h3 className={`section-heading ${className}`}>
      {normalText} &nbsp;
      <b>{boldText}</b>
    </h3>
  ) : (
    <h3 className={`section-heading ${className}`}>
      <b>{boldText}</b> &nbsp; {normalText}
    </h3>
  );
};



export default index;
