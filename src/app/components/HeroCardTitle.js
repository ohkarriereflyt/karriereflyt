export default function HeroCardTitle(props) {
    return (
                <>
                  
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{props.heading}</h1>
                    <p className="text-xl text-gray-600 mb-8">{props.subtitle}</p>

                    </>

                  
    )
}