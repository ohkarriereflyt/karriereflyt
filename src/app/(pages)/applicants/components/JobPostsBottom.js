import Link from "next/link";

export default async function JobPostsBottom(props) {
  return (
    <div className="w-full py-12 light-background shadow text-center">
      <div className="max-w-7xl flex-col justify-start items-center gap-4 inline-flex">
        <h2>{props.bottomSectionTitle}</h2>
        <p>{props.bottomSectionText}</p>
        <div className=" items-center gap-16 inline-flex">
          <Link
            href="https://karriereflyt.recman.no/register.php"
            target="_blank"
          >
            <button className="button">Send en åpen søknad</button>
          </Link>
          <Link href="/contact">
            <button className="button">Kontakt oss</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
