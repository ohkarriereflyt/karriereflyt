export default function HeroCardTitle(props) {
  return (
    <>
      <h1 className={props.headingSize + " text-gray-600 mb-8"}>
        {props.heading}
      </h1>
      <p className={props.subtitleSize + " text-xl text-gray-600 mb-8"}>
        {props.subtitle}
      </p>
    </>
  );
}
