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
              borderColor="border-frenchBlue/20"
              hoverColor="bg-frenchBlue/5"
              iconBgColor="bg-frenchBlue"
              iconBorderColor="border-blue-900"
              delay={50}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
            />

            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              borderColor="border-frenchRed/20"
              hoverColor="bg-frenchRed/5"
              iconBgColor="bg-frenchRed"
              iconBorderColor="border-red-800"
              delay={100}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />

            <FeatureCard
              title={features[2].title}
              description={features[2].description}
              borderColor="border-gold/20"
              hoverColor="bg-gold/5"
              iconBgColor="bg-gold"
              iconBorderColor="border-yellow-700"
              delay={150}
              icon={
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 004.5 16c-.523 0-1.046-.151-1.5-.454M6.75 12.25v-2.5m12.5 2.5v-2.5m-12.5 6.5v-2.5m12.5 2.5v-2.5" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
