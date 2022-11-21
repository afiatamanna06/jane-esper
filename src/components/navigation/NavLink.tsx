import AnchorLink from "react-anchor-link-smooth-scroll";

interface propTypes {
  page: string;
  selectedPage: any;
  setSelectedPage: any;
}

function NavLink({ page, selectedPage, setSelectedPage }: propTypes) {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default NavLink;
