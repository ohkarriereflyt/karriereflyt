import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function List(props) {
    return (
        <ul className="list-none mb-8">
            <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-4 h-4" />
                <span>{props.listItemOne}</span>
            </li>
            <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-4 h-4" />
                <span>{props.listItemTwo}</span>
            </li>
            <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-4 h-4" />
                <span>{props.listItemThree}</span>
            </li>
            <li className="flex items-center">
                <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-4 h-4" />
                <span>{props.listItemFour}</span>
            </li>
            {/* Add more items as needed */}
        </ul>
    );
}
