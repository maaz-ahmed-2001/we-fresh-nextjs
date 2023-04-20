export const SectionHeadings = ({ normalText, boldText, orientation }) => {
  return orientation === "normal" ? (
    <h3 className="section-heading" >
      {normalText} &nbsp;
      <strong>{boldText}</strong>
    </h3>
  ) : (
    <h3 className="section-heading" >
      <strong>{boldText}</strong> &nbsp; {normalText}
    </h3>
  );
};
