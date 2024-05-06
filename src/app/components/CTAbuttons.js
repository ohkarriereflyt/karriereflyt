import Link from "next/link";

export default function CTAButtons({ widthOne = "md:w-48 w-36", widthTwo = "md:w-48 w-36" }) {
  return (
    <div className="flex space-x-4">
      <Link href="/some-page">
        <button className={`${widthOne} btn-primary`}>Button One</button>
      </Link>
      <Link href="/another-page">
        <button className={`${widthTwo} btn-secondary`}>Button Two</button>
      </Link>
    </div>
  );
}