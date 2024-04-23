export default function PageTitle(props) {
  return (
    <h1
      className={props.textColor + " text-header1 font-bold text-center mb-8"}
    >
      {props.title}
    </h1>
  );
}
