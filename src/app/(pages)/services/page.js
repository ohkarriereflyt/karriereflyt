import Image from 'next/image';

export default function Page() {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="text-center p-12">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <p className="mb-8">We offer a comprehensive range of services to help your business succeed.</p>
                {/* Placeholder for artwork */}
                <div className="mx-auto w-48 h-48 mb-8">
                    {/* Replace with your art */}
                    <Image src="/path/to/your/artwork.png" alt="Artwork" width={192} height={192} />
                </div>
                <ul className="list-disc list-inside mb-8">
                    <li>Rekruttering</li>
                    <li>Utleie av personell</li>
                    <li>Rådgiving</li>
                    <li>Headhunting</li>
                </ul>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Each Service */}
                <ServiceBox
                    title="Rekruttering"
                    description="Detailed description of Rekruttering service..."
                    iconName="icon-path"
                />
                <ServiceBox
                    title="Utleie av personell"
                    description="Detailed description of Utleie av personell service..."
                    iconName="icon-path"
                />
                <ServiceBox
                    title="Rådgiving"
                    description="Detailed description of Rådgiving service..."
                    iconName="icon-path"
                />
                <ServiceBox
                    title="Headhunting"
                    description="Detailed description of Headhunting service..."
                    iconName="icon-path"
                />
            </div>
        </div>
    )
}

// Service Box Component
function ServiceBox({ title, description, iconName }) {
    return (
        <div className="flex items-center bg-white shadow-md p-6 rounded-lg">
            <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center ml-4">
                {/* Placeholder for icon */}
                <Image src={`/path/to/${iconName}`} alt={`${title} Icon`} width={64} height={64} />
            </div>
        </div>
    );
}