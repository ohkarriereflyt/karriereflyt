import Image from 'next/image';
import HeroCardTitle from '@/app/components/HeroCardTitle';
import HeroCardImages from '@/app/components/HeroCardImages';
import List from '@/app/components/List';
import ServiceBox from '@/app/components/ServiceBox';

export default function Page() {
    return (
        <div className="bg-gray-100">
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
