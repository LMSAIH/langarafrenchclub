"use client"

import Image from "next/image"
import Link from "next/link"
import { H1, P } from "./Typography"

interface HeroSectionProps {
  title: string
  aboutText: string
}

const HeroSection = ({ title, aboutText }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Langara_french_club.webp"
          alt="Langara French Club"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 py-8 sm:py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
            <H1
              className="text-white mb-4 sm:mb-6 drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {title}
            </H1>
            <P
              className="text-base sm:text-lg md:text-2xl text-white mb-6 sm:mb-8 drop-shadow-md max-w-full sm:max-w-[75%]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {aboutText}
            </P>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Link
                href="/Events"
                className="relative text-center group inline-block bg-frenchBlue text-white font-semibold py-4 px-8 sm:py-3 sm:px-10 rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-xl transform hover:scale-105 border-b-4 border-blue-900"
              >
                <span className="relative z-10">View Events</span>
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/Members"
                className="relative text-center group inline-block bg-white text-frenchBlue font-semibold py-4 px-8 sm:py-3 sm:px-10 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl transform hover:scale-105 border-b-4 border-gray-300"
              >
                <span className="relative z-10">Join Us</span>
                <div className="absolute inset-0 bg-frenchBlue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
