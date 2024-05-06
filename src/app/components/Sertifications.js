import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Sertifications({jobbkretserContItems}) {
  return (
    <>
      {jobbkretserContItems.map((item) => (
        <div key={item.index} className="py-2 flex sm:pl-0 pl-4">
          <FontAwesomeIcon icon={faCheck} className="mr-3" />
          <p className="inline">{item}</p>
        </div>
      ))}
    </>
  );
}
