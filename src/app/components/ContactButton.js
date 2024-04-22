import Link from "next/link";
export default function ContactButton(props) {
  return (
    <div className="text-center">
      <Link href="/contact">
        <button
          className={
            props.bgColor +
            " " +
            props.marginTop +
            " text-text-flat border-4 border-border-dark rounded-connie h-80 hover:bg-blue-700  font-bold py-3 px-5"
          }
        ></button>
        Kontakt oss
      </Link>
    </div>
  );
}
