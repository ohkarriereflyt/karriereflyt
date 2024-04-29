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
            " button light-background kf-border-dark dark"
          }
        >
          For bedrifter
        </button>

      </Link>
    </>
  );
}
