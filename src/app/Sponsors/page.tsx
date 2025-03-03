"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import SponsorModal from "../components/SponsorModal"
import type { Sponsor } from "../types/sponsor"
import { useLanguage } from "../context/LanguageContext"
import sponsorsContent from "../PageContent/SponsorsContent"


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})


export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
  const { language } = useLanguage();
  const content = sponsorsContent[language];

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    })
  }, [])

  return (
    <div className={`${inter.className} min-h-screen`}>
      <div className="relative h-64 bg-blue-900">
        <svg
          className="absolute bottom-0 w-full h-24 -mb-1 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          ></path>
        </svg>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl 4xl:max-w-full 4xl:w-3/4 mx-auto">
          <h1
            className={`${inter.className} french-accent text-center text-4xl 4xl:text-8xl md:text-5xl font-bold text-blue-900 mb-8`}
            data-aos="fade-down"
          >
            {content.pageContent.title}
          </h1>

          <p className="text-center text-xl text-gray-700 4xl:text-5xl mb-16" data-aos="fade-up">
            {content.pageContent.description}
          </p>

          <p className="text-center text-lg 4xl:text-5xl mb-5 text-gray-600" data-aos="fade-up">
            {content.pageContent.clickPrompt}
          </p>

          <div className="flex flex-wrap flex-row justify-center wrap gap-12 mb-16 w-full">

            {content.sponsors.map((sponsor, index) => (
              <div
                key={sponsor.id}
                className="w-3/4 md:w-1/3 flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => setSelectedSponsor(sponsor)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={150}
                  height={150}
                  className="hover:scale-105 duration-300 w-full"
                />
              </div>
            ))}

          </div>


        </div>
      </div>

      <SponsorModal sponsor={selectedSponsor} isOpen={!!selectedSponsor} onClose={() => setSelectedSponsor(null)} />

      <div className="relative h-48 bg-white">
        <svg
          className="absolute bottom-0 w-full h-48 -mb-1 text-blue-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

