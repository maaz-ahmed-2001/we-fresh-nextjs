import Link from "next/link";
// Components
import FlexColumn from "../FlexColumn";

type Link = {
  title: string;
  url: string;
};

type FieldDescriptionProps = {
  title: string;
  links: Link[];
};

const index = ({ title, links }: FieldDescriptionProps) => {
  return (
    <FlexColumn className="md:p-4 py-5 cursor-pointer md:items-start md:py-0 gap-4">
      <h6 className="md:max-w-[114px] w-full">{title}</h6>
      <div className="w-full">
        {links.map((link, i) => {
          return (
            <Link href={link.url}>
              <li>{link.title}</li>
            </Link>
          );
        })}
      </div>
    </FlexColumn>
  );
};

export default index;
