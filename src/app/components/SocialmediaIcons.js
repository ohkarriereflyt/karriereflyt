import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaIcons() {
  const socialMediaIcons = [
    {
      name: "Facebook",
      icon: faFacebookF,
    },
    {
      name: "Twitter",
      icon: faTwitter,
    },
    {
      name: "Instagram",
      icon: faInstagram,
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
    },
  ];

  return (
    <>
      <div className=" text-text-flat-inverted flex text-center">
        {socialMediaIcons.map((socialMediaIcon) => (
          <div key={socialMediaIcon.name}>
            <FontAwesomeIcon
              className="text-icon ml-5 mt-24"
              icon={socialMediaIcon.icon}
            />
          </div>
        ))}
      </div>
    </>
  );
}
