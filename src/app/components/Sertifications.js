import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const serts = [
  {
    name: "Medlem av NHO Service og Handel.",
  },
  {
    name: "Revidert arbeidsgiver.",
  },
  {
    name: "Registrert i EPIM.",
  },
  {
    name: "Registrert i Startbank.",
  },
  {
    name: "Registrert som godkjent bemanningsbyrå hos Arbeidstilsynet.",
  },
];

export default function Sertifications() {
  return (
    <>
      {serts.map((sert) => (
        <div key={serts.name} className="py-2 flex">
          <FontAwesomeIcon icon={faCheck} className="mr-3" />
          <p className="inline">{sert.name}</p>
        </div>
      ))}
    </>
  );
}
