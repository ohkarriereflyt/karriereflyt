import Link from "next/link";

export default function CTAButtons(props) {

  return (
    <>
      <Link href="/applicants">
        <button>For jobbsøkere</button>
      </Link>
      <Link href="/services">

        <button
          className={
            props.widthOne +
            " " +
            props.widthTwo +
            " bg-cta-button-two ml-2 hover:bg-gray-800 w-43 text-text-flat-inverted font-bold py-3 px-6 rounded-connie mb-4  border-solid border-4 border-button-border-color text-center"
          }
        >
          For bedrifter
        </button>

      </Link>
    </>
  );
}
