import { useMediaQuery } from "../../../utils/UseMediaQuery";

type InputProps = {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  height?: string;
  state: string | number | undefined;
  width?: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const index = ({
  type,
  placeholder,
  state,
  onChangeFunc,
  height,
  width,
}: InputProps) => {
  const isLg = useMediaQuery("(max-width: 1024px)");
  const splittedArr = placeholder.split(" ");
  return (
    <input
      type={type}
      className={`outline-none border-2 border-light-grey w-[170px] lg:w-[300px] h-[${height}]  px-2 py-1 md:py-0 rounded-4`}
      placeholder={
        type === "number"
          ? isLg
            ? `${splittedArr[1] + " " + splittedArr[2]}`
            : placeholder
          : placeholder
      }
      value={state}
      onChange={onChangeFunc}
    />
  );
};

export default index;
