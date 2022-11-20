import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQuery from "../../hooks/useMediaQuery";

interface propTypes {
  selectedPage: any;
  setSelectedPage: any;
}

function NavBar({ selectedPage, setSelectedPage }: propTypes) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = UseMediaQuery("(min-width: 768px)")
  return (
      <nav className={`z-40 w-full fixed top-0 py-6`}>
          <div>
              
          </div>
      </nav>
  )
}

export default NavBar;
