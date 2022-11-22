import AnchorLink from "react-anchor-link-smooth-scroll";
import { navData } from "../navigation/NavData";

interface propTypes {
  selectedPage: any;
  setSelectedPage: any;
}

function DotGroup({ selectedPage, setSelectedPage }: propTypes) {
  const selectedStyles =
    "relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]";
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {navData.map((name) => (
        <AnchorLink
          className={`${
            selectedPage === name.toLowerCase()
              ? selectedStyles
              : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
          href={`#${name.toLowerCase()}`}
          onClick={() => setSelectedPage(name.toLowerCase())}
        />
      ))}
    </div>
  );
}

export default DotGroup;
