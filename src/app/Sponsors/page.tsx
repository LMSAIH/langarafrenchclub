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
import WaveSeparator from "../components/WaveSeparator"
import { H1, H2, P } from "../components/Typography"


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

      <div className="relative h-16 sm:h-24 bg-blue-900" />
      <WaveSeparator variant="up" />

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl 4xl:max-w-full 4xl:w-3/4 mx-auto">
          <H1
            className="text-center mb-8 4xl:mb-16 text-frenchBlue"
            data-aos="fade-down"
          >
            {content.pageContent.title}
          </H1>

          <P className="text-center text-sm  mb-16  text-gray-700 max-w-4xl mx-auto" data-aos="fade-up">
            {content.pageContent.description}
          </P>

          {/* Current Sponsors Section */}
          <div className="mb-16 4xl:mb-24">
            <H2 className="text-center mb-8 4xl:mb-12 text-frenchBlue" data-aos="fade-up">
              {content.pageContent.currentSponsorsTitle}
            </H2>
            
            <div className="flex flex-wrap justify-center gap-8 4xl:gap-12 w-full">
              {content.currentSponsors.map((sponsor, index) => (
                <div
                  key={sponsor.id}
                  className="bg-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer
                             w-48 h-48 4xl:w-72 4xl:h-72"
                  onClick={() => setSelectedSponsor(sponsor)}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-full h-full p-6 4xl:p-8 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={120}
                      height={120}
                      className="object-contain max-w-full max-h-full 4xl:w-48 4xl:h-48 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Sponsors Section */}
          <div className="mb-16 4xl:mb-24">
            <H2 className="text-center mb-8 4xl:mb-12 text-frenchBlue" data-aos="fade-up">
              {content.pageContent.previousSponsorsTitle}
            </H2>
            
            <div className="flex flex-wrap justify-center gap-8 4xl:gap-12 w-full">
              {content.previousSponsors.map((sponsor, index) => (
                <div
                  key={sponsor.id}
                  className="bg-white rounded-lg  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer
                             w-48 h-48 4xl:w-72 4xl:h-72 opacity-75 hover:opacity-100"
                  onClick={() => setSelectedSponsor(sponsor)}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="w-full h-full p-6 4xl:p-8 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={120}
                      height={120}
                      className="object-contain max-w-full max-h-full 4xl:w-48 4xl:h-48 transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

      <SponsorModal sponsor={selectedSponsor} isOpen={!!selectedSponsor} onClose={() => setSelectedSponsor(null)} />

      <WaveSeparator variant="down" />
      <div className=" h-16 sm:h-24 bg-blue-900 border-b-4 pb-0 mb-0 border-blue-900" />
    </div>
  )
}

