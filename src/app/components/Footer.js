import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socialMediaIcons = [
    { icon: faFacebookF, url: "https://facebook.com" },
    { icon: faTwitter, url: "https://twitter.com" },
    { icon: faInstagram, url: "https://instagram.com" },
    { icon: faLinkedin, url: "https://linkedin.com" },
  ];

  const footerItems = [
    {
      header: "Karriereflyt AS",
      subOne: "Org. nr: 930 011 428",
      subTwo: "Rekruttering og bemanning",
    },
    {
      header: "Kontakt oss",
      subOne: "E-post: post@karriereflyt.no",
      subTwo: "Telefon: +47 41 28 28 78",
      subTitle: "Karriereflyt AS © 2024",
    },
    {
      header: "Sider",
      subOne: "Hjem",
      subTwo: "Ledige stillinger",
      subThree: "Tjenester",
      subFour: "Om oss",
      subFive: "Kontakt oss",
    },
  ];

  return (
    <footer className="relative">
      <div
        className="flex justify-evenly bg-slate-gray-flat pl-80 pt-4 pb-6"
        style={{
          minHeight: "30vh",
          position: "relative",
        }}
      >
        {footerItems.map((footerItem, index) => (
          <div key={index} className="flex-1 text-text-flat-inverted">
            <h1 className="pb-1 header3">{footerItem.header}</h1>
            <p className="pb-1 text-footer">{footerItem.subOne}</p>
            <p className="pb-1 text-footer">{footerItem.subTwo}</p>
            <p className="pb-1 text-footer">{footerItem.subThree}</p>
            <p className="pb-1 text-footer">{footerItem.subFour}</p>
            <p className="pb-1 text-footer">{footerItem.subFive}</p>
          </div>
        ))}
      </div>

      {/* Centering SocialMediaIcons and footerItem.subTitle */}
      {footerItems[1].subTitle && (
        <div className="absolute inset-x-0 bottom-0 text-center justify-center mb-8">
          <div className="items-center text-text-flat-inverted">
            {socialMediaIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-icon"
              >
                <FontAwesomeIcon icon={icon.icon} />
              </a>
            ))}
          </div>

          <p className="text-footer mt-2 pb-12 text-text-flat-inverted">
            {footerItems[1].subTitle}
          </p>
        </div>
      )}
    </footer>
  );
}
