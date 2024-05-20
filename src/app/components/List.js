'use client'
export default function List(props) {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });

        // Adjust scroll position after a short delay
        setTimeout(() => {
            const yOffset = -100; // Adjust this value as needed
            const y = element.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }, 10);
    };

    return (
        <ul className="list-none mb-8">
            <li className="flex items-center underline cursor-pointer" onClick={() => handleScroll('section1')}>
                <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="dark-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className='subheadline m-2'>{props.listItemOne}</h2>
            </li>
            <li className="flex items-center underline cursor-pointer" onClick={() => handleScroll('section2')}>
                <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="dark-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className='subheadline m-2'>{props.listItemTwo}</h2>
            </li>
            <li className="flex items-center underline cursor-pointer" onClick={() => handleScroll('section3')}>
                <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="dark-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className='subheadline m-2'>{props.listItemThree}</h2>
            </li>
            <li className="flex items-center underline cursor-pointer" onClick={() => handleScroll('section4')}>
                <svg width="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="dark-stroke" d="M23.6126 11L12.8786 21.734L7.99951 16.8549" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className='subheadline m-2'>{props.listItemFour}</h2>
            </li>
        </ul>
    );
}