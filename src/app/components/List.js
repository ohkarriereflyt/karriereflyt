export default function List(props) {
    return (
        <ul className="list-none mb-8">
            <li className="flex items-center underline">
                <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="dark-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className='subheadline m-2'>{props.listItemOne}</h2>
            </li>
            <li className="flex items-center underline">
                <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="dark-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className='subheadline m-2'>{props.listItemTwo}</h2>
            </li>
            <li className="flex items-center underline">
                <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="dark-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className='subheadline m-2'>{props.listItemThree}</h2>
            </li>
            <li className="flex items-center underline">
                <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="dark-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className='subheadline m-2'>{props.listItemFour}</h2>
            </li>
        </ul>
    );
}
