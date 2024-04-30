export default function PageTitle(props) {
  return (
    <h1
      className={
        props.textColor +
        " md:text-header1 text-mobileHeader1 font-bold text-center mb-8"
      }
    >
      {props.title}
    </h1>
  );
}
