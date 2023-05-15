type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClickFunc?: () => void;
};

const index = ({ children, className, onClickFunc }: ButtonProps) => {
  return (
    <button
      onClick={onClickFunc}
      className={`${className} w-[100px] h-[35px] lg:w-[140px] rounded-sm bg-btn-bg active:scale-95`}>
      {children}
    </button>
  );
};

export default index;
