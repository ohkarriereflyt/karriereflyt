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
      {socialMediaIcons.map((socialMediaIcon) => (
        <div key={socialMediaIcon.name}>
          {/* <FontAwesomeIcon className="text-text" icon={socialMediaIcon.icon} /> */}
        </div>
      ))}
    </>
  );
}
