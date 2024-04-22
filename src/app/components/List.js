import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function List(props) {
    return (
        <ul className="list-none mb-8">
            <li className="flex items-center text-2xl mb-4 underline"> 
                <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-6 h-6" />
                <span>{props.listItemOne}</span>
            </li>
            <li className="flex items-center text-2xl mb-4 underline"> 
                <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-6 h-6" />
                <span>{props.listItemTwo}</span>
            </li>
            <li className="flex items-center text-2xl mb-4 underline"> 
                <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-6 h-6" />
                <span>{props.listItemThree}</span>
            </li>
            <li className="flex items-center text-2xl mb-4 underline"> 
                <FontAwesomeIcon icon={faCheck} className="text-secondary-grey mr-2 w-6 h-6" />
                <span>{props.listItemFour}</span>
            </li>
        </ul>
    );
}
