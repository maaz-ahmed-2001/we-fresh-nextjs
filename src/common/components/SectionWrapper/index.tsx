type SectionWrapperProps = {
  children: React.ReactNode
  className?: string
  zIndex?: string
}

const index = ({ children, className, zIndex }: SectionWrapperProps) => {
  return (
    <section className={`w-screen ${zIndex && ('z-' + zIndex)} relative block`} >
      <div
        className={`py-10 md:py-16 lg:px-10 block m-auto  w-full max-w-[1440px] ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default index;
