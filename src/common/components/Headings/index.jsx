export const SectionHeadings = ({
  normalText,
  boldText,
  orientation,
  className,
}) => {
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

export const SubHeading = ({ text, className }) => {
  return <h3 className={`section-heading ${className}`}>{text}</h3>;
};
