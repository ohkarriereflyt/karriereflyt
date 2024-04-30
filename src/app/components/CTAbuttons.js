import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CTAButtons(props) {

  return (
    <>
      <Link href="/applicants">
        <button
          className={
            props.widthOne +
            " bg-secondary-grey lg:text-button text-mobileButton  hover:bg-gray-800 h-16 text-text-flat-inverted font-bold rounded-connie mb-4 inline-block  border-solid border-4 border-button-border-color text-center"
          }
        >
          For jobbsøkere
        </button>
      </Link>
      <Link href="/services">
        <button
          className={
            props.widthTwo +
            " bg-cta-button-two md:ml-2 md:text-button text-mobileButton hover:bg-gray-800 w-43 h-16 text-text-flat-inverted font-bold  inline-block rounded-connie mb-4  border-solid border-4 border-button-border-color text-center"
          }
        >
          For bedrifter
        </button>
      </Link>
    </>
  );
}
