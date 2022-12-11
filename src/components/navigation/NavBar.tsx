import { useState } from "react";
import UseMediaQuery from "../../hooks/useMediaQuery";
import { navData } from "./NavData";
import NavLink from "./NavLink";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface propTypes {
  isTopOfPage: any;
  selectedPage: any;
  setSelectedPage: any;
}

function NavBar({ isTopOfPage, selectedPage, setSelectedPage }: propTypes) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = UseMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink
          href={`#home`}
        >
          <h4 className="font-playfair text-3xl font-bold">JE</h4>
        </AnchorLink>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-md font-semibold">
            {navData.map((page) => (
              <NavLink
                key={page}
                page={page}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FiMenu color="white" size={20} />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[18rem]">
            <div className="flex justify-end p-8">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <IoClose color="white" size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[25%] text-2xl text-deep-blue">
              {navData.map((page) => (
                <NavLink
                  key={page}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggled={isMenuToggled}
                  setIsMenuToggled={setIsMenuToggled}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
