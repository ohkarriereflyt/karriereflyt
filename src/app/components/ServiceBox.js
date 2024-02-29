export default function ServiceBox(props) {
    return (
        <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
            <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center ml-4">
                {/* Placeholder for icon */}
                {/* <Image src={`/path/to/${props.iconName}`} alt={`${props.title} Icon`} width={64} height={64} /> */}
            </div>
        </div>
    );
}