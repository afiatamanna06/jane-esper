import AnchorLink from "react-anchor-link-smooth-scroll";

interface propTypes {
  page: string;
  selectedPage: any;
  setSelectedPage: any;
  setIsMenuToggled: any;
  isMenuToggled: any;
}

function NavLink({ page, selectedPage, setSelectedPage, setIsMenuToggled, isMenuToggled }: propTypes) {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => { setSelectedPage(lowerCasePage); setIsMenuToggled(!isMenuToggled) }}
    >
      {page}
    </AnchorLink>
  );
}

export default NavLink;
