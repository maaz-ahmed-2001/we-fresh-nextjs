type SectionHeadingProps = {
  normalText: string
  boldText: string
  className?: string
  orientation: 'normal' | 'revert'
}

type SubHeadingProps = {
  text: string
  className?: string
}

export const SectionHeadings = ({
  normalText,
  boldText,
  orientation,
  className,
}: SectionHeadingProps) => {
  return orientation === "normal" ? (
    <h3 className={`section-heading ${className}`}>
      {normalText} &nbsp;
      <strong>{boldText}</strong>
    </h3>
  ) : (
    <h3 className={`section-heading ${className}`}>
      <strong>{boldText}</strong> &nbsp; {normalText}
    </h3>
  );
};

export const SubHeading = ({ text, className }: SubHeadingProps) => {
  return <h3 className={`section-heading ${className}`}>{text}</h3>;
};
