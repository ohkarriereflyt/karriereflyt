import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ReadMore() {
  return (
    <div className="flex items-center mt-5">
      <p className="inline">Les mer</p>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="rounded-3xl bg-secondary-blue-bg px-2 py-2 ml-3"
      />
    </div>
  );
}
