import { socialLinks } from "./SocialMediaData";
import { Link } from "react-router-dom";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start items-center my-10 gap-5">
      {socialLinks.map(({ icon, link }) => (
        <Link to={link} target="_blank" rel="noreferrer">
          <div className="hover:opacity-50 transition duration-500">
              {icon}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SocialMediaIcons;
