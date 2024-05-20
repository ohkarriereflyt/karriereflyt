export default function Sertifications({ jobbkretserContItems }) {
  return (
    <>
      {jobbkretserContItems.map((item, index) => (
        <div key={index} className="py-2 flex items-center gap-2">
          <svg width="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="light-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="inline">{item}</p>
        </div>
      ))}
    </>
  );
}