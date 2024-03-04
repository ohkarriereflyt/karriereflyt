import HeroCardTitle from '@/app/components/HeroCardTitle';
import HeroCardImages from '@/app/components/HeroCardImages';
import List from '@/app/components/List';
import ServiceCardLeft from '@/app/components/ServiceCardLeft';
import ServiceCardRight from '@/app/components/ServiceCardRight';

export default function Page() {
    return (
        <div>
            {/* Hero Section */}
            <div className="text-center p-12">
                <HeroCardTitle heading="Våre tjenester"
                subtitle="Vi tilbyr blablabla.."/>
                {/* Placeholder for artwork */}
                <div className="mx-auto w-48 h-48 mb-8">
                    {/* Replace with your art */}
                    <HeroCardImages heroImageOne="/path"/>
                </div>
                <List listItemOne="Rekruttering" 
                listItemTwo="Utleie av personell"
                listItemThree="Rådgivning"
                listItemFour="Headhunting"/>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 gap-8 p-8">
                <ServiceCardLeft
                    icon="✚"
                    conColor="text-gray-600"
                    squareColor="bg-blue-300"
                    headingOneText="Rekruttering"
                    headingFourText="Kandidater"
                    headingFourColor="text-gray-700"
                    headingOneColor="text-gray-800"
                    listItems={[
                        { icon: "✓", text: "Custom list item 1" },
                        { icon: "✓", text: "Custom list item 2" },
                        { icon: "✓", text: "Custom list item 2" },
                    ]}
                    buttonColor="bg-green-500"
                    buttonHoverColor="hover:bg-green-700"
                    buttonText="Custom Button Text" 
                />
                <ServiceCardRight
                    icon="✚"
                    iconColor="text-gray-600"
                    squareColor="bg-blue-300"
                    headingOneText="Rekruttering"
                    headingFourText="Kandidater"
                    headingFourColor="text-gray-700"
                    headingOneColor="text-gray-800"
                    listItems={[
                        { icon: "✓", text: "Custom list item 1" },
                        { icon: "✓", text: "Custom list item 2" },
                        { icon: "✓", text: "Custom list item 2" },
                    ]}
                    buttonColor="bg-green-500"
                    buttonHoverColor="hover:bg-green-700"
                    buttonText="Custom Button Text"
                />
            </div>
            
        </div>
    )
}


