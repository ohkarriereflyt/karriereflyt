export default function Statistics() {
  const statistics = [
    {
      headline: "Ledige stillinger",
      number: "12",
    },
    {
      headline: "Intervjuer daglig",
      number: "3",
    },
    {
      headline: "Fornøyde kunder",
      number: "3",
    },
  ];

  return (
    <div className="items-center text-white py-12 justify-center flex text-center gap-12 bg-button-color">
      {statistics.map((statistic) => (
        <div key={statistics.headline}>
          <h1 className="text-largeH1">{statistic.number}</h1>
          <p>{statistic.headline}</p>
        </div>
      ))}
    </div>
  );
}
