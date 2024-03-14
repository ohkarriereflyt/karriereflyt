import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookf,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcons from "./SocialmediaIcons";

export default function Footer() {
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
    <footer>
      <div
        className="flex justify-evenly bg-slate-gray-flat pl-80 py-4"
        style={{
          height: "30vh",
        }}
      >
        {footerItems.map((footerItem) => (
          <div
            key={footerItem.header}
            className="flex-1 text-text-flat-inverted"
          >
            <h1 className="header3">{footerItem.header}</h1>
            <p className="text-footer">{footerItem.subOne}</p>
            <p className="text-footer">{footerItem.subTwo}</p>
            <p className="text-footer">{footerItem.subThree}</p>
            <p className="text-footer">{footerItem.subFour}</p>
            <p className="text-footer">{footerItem.subFive}</p>
          </div>
        ))}
        <SocialMediaIcons />
      </div>
    </footer>
  );
}
