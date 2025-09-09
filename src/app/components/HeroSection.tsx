"use client"

import Image from "next/image"
import Link from "next/link"
import { H1, P, Span } from "./Typography"

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
          src="/langara_french_club_hero.jpg"
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
          <div className="max-w-2xl mx-auto sm:mx-0 text-center sm:text-left relative">
            <div className="relative">
              <H1
                className="text-white mb-4 sm:mb-6 drop-shadow-lg"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {title}
              </H1>
            </div>
            <P
              className="text-base sm:text-lg md:text-2xl text-white mb-6 sm:mb-8 drop-shadow-md max-w-full sm:max-w-[75%]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {aboutText}
            </P>
            <div
              className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center sm:justify-start relative"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="relative">
                <Link
                  href="/Events"
                  className="relative text-center group block w-64 sm:w-48 md:w-56 lg:w-64 mx-auto sm:mx-0 bg-frenchBlue text-white font-semibold py-5 px-8  rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-xl transform hover:scale-105 border-b-4 border-blue-900"
                >
                  <Span className="relative z-10">View Events</Span>
                  {/* Duck positioned inside on the right, centered vertically */}
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2 group-hover:scale-105 duration-300">
                    <Image
                      src="/assets/mainDuck.webp"
                      alt="Event Duck"
                      width={32}
                      height={32}
                      className="h-12 w-12 object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              <div className="relative">
                <Link
                  href="/Members"
                  className="relative text-center group block w-64 sm:w-48 md:w-56 lg:w-64 mx-auto sm:mx-0 bg-white text-frenchBlue font-semibold py-5 px-8  rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl transform hover:scale-105 border-b-4 border-gray-300"
                >
                  <Span className="relative z-10">Join Us</Span>
                  {/* Duck positioned inside on the left, centered vertically */}
                  <div className="absolute top-1/2 left-2 transform -translate-y-1/2 group-hover:scale-105 duration-300">
                    <Image
                      src="/assets/whiteDuck.webp"
                      alt="Member Duck"
                      width={32}
                      height={32}
                      className="h-12 w-12 object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-frenchBlue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
