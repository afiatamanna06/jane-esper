import { socialLinks } from "./SocialMediaData";
import { Route } from "react-router-dom";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start items-center my-10 gap-5">
      {socialLinks.map(({ icon, link }) => (
        <a href={link} target="_blank" rel="noopener">
          <div className="hover:opacity-50 transition duration-500">
              {icon}
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialMediaIcons;
