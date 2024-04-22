// Footer.js

import React from "react";
import dynamic from "next/dynamic";

const FooterSocialIcons = dynamic(() => import("./ClientOnlyIcons"), {
  ssr: false, // This will disable server-side rendering for this component
});

export default function FooterSocialIcons() {
  const socialMediaIcons = [
    { icon: faFacebookF, url: "https://facebook.com" },
    { icon: faTwitter, url: "https://twitter.com" },
    { icon: faInstagram, url: "https://instagram.com" },
    { icon: faLinkedin, url: "https://linkedin.com" },
  ];

  return (
    <>
      {socialMediaIcons[1].icon && (
          <ClientOnlyIcons icons={socialMediaIcons} />
          <p className="text-footer mt-2 pb-12 text-text-flat-inverted">
            {footerItems[1].subTitle}
          </p>
        </div>
      )}
    </>
  );
}
