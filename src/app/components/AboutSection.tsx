"use client"

import FeatureCard from "./FeatureCard"
import { H2 } from "./Typography"

interface Feature {
  title: string
  description: string
}

interface AboutSectionProps {
  aboutTitle: string
  features: Feature[]
}

const AboutSection = ({ aboutTitle, features }: AboutSectionProps) => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <H2
            className="text-gray-900 mb-8"
            data-aos="fade-up"
          >
            {aboutTitle}
          </H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

            <FeatureCard
              title={features[0].title}
              description={features[0].description}
              duckImage="/assets/mainSmallDuck.webp"
              borderColor="border-frenchBlue/20"
              hoverColor="bg-frenchBlue/5"
              iconBgColor="bg-frenchBlue"
              iconBorderColor="border-blue-900"
              delay={50}
            />

            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              duckImage="/assets/orangeDuck.webp"
              borderColor="border-frenchRed/20"
              hoverColor="bg-frenchRed/5"
              iconBgColor="bg-frenchRed"
              iconBorderColor="border-red-800"
              delay={100}
            />

            <FeatureCard
              title={features[2].title}
              description={features[2].description}
              duckImage="/assets/whiteDuck.webp"
              borderColor="border-gold/20"
              hoverColor="bg-gold/5"
              iconBgColor="bg-gold"
              iconBorderColor="border-yellow-700"
              delay={150}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
