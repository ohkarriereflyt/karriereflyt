import Link from "next/link";

export default function CTAButtons() {

  return (
    <>
      <Link href="/applicants">
        <button>For jobbsøkere</button>
      </Link>
      <Link href="/services">
        <button className="bg-background-flat kf-border-dark text-text-flat">For bedrifter</button>
      </Link>
    </>
  );
}
