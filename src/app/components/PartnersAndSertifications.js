export default function PartnersAndSertifications({ PandSTitle, PandSImages }) {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="text-center py-8">
        <h1 className="mb-8">{PandSTitle}</h1>
        <div className="flex flex-wrap md:gap-8 gap-4 justify-center md:px-8 px-4">
          {PandSImages.map((item) => (
            <div
              className="shadow-lg p-4 mb-4 flex items-center justify-center kf-border-light light-background md:w-36 w-24"
              key={item.index}
            >
              <img
                className="aspect-square object-contain"
                src={item}
                alt={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
