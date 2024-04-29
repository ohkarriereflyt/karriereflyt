export default function Statistics() {
  const statistics = [
    {
      headline: "Ledige stillinger",
      number: "12",
    },
    {
      headline: "Fornøyde kunder",
      number: "3",
    },
  ];

  return (
    <div className="items-center text-white py-12 mb-8 justify-evenly flex text-center gap-12 bg-secondary-grey mt-12">
      {statistics.map((statistic) => (
        <div key={statistics.headline}>
          <h1 className="text-header1">{statistic.number}</h1>
          <p>{statistic.headline}</p>
        </div>
      ))}
    </div>
  );
}
