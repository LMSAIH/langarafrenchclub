"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"
import SponsorModal from "../components/SponsorModal"
import type { Sponsor } from "../types/sponsor"


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Café Parisien",
    logo: "/CONSAR1.jpg",
    description:
      "Café Parisien est fier de soutenir le Club Français de Langara. Nous partageons la passion de la culture française et sommes ravis de contribuer à son rayonnement au sein de la communauté étudiante.",
    website: "https://www.cafeparisien.com",
  },
  {
    id: 2,
    name: "Librairie Française",
    logo: "/CONSAR1.jpg",
    description:
      "La Librairie Française est heureuse de participer à l'enrichissement culturel des étudiants du Club Français de Langara en fournissant des ressources littéraires en langue française.",
    website: "https://www.librairiefrancaise.com",
  },
  {
    id: 3,
    name: "Alliance Française",
    logo: "/CONSAR1.jpg",
    description:
      "L'Alliance Française soutient avec enthousiasme les initiatives du Club Français de Langara, contribuant ainsi à la promotion de la langue et de la culture françaises.",
    website: "https://www.alliancefrancaise.com",
  },
  {
    id: 4,
    name: "Pâtisserie Élégante",
    logo: "/CONSAR1.jpg",
    description:
      "Pâtisserie Élégante est ravie de partager la douceur de la gastronomie française avec les membres du Club Français de Langara à travers nos délicieuses pâtisseries.",
    website: "https://www.patisserieelegante.com",
  },
]

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null)

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
            Nos Généreux Sponsors
          </h1>

          <p className="text-center text-xl text-gray-700 4xl:text-5xl mb-16" data-aos="fade-up">
            Nous tenons à exprimer notre profonde gratitude envers nos sponsors pour leur soutien inestimable. Grâce à
            leur générosité, nous pouvons continuer à promouvoir la langue et la culture françaises au sein de notre
            communauté.
          </p>

          <div className="flex flex-wrap flex-row justify-center wrap gap-12 mb-16 w-full">
            {sponsors.map((sponsor, index) => (
              <div
                key={sponsor.id}
                className="w-3/4 md:w-1/3 flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => setSelectedSponsor(sponsor)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Image
                  src={sponsor.logo }
                  alt={`${sponsor.name} logo`}
                  width={150}
                  height={150}
                  className="hover:scale-105 duration-300 w-full"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-lg 4xl:text-5xl text-gray-600" data-aos="fade-up">
            Cliquez sur un logo pour en savoir plus sur nos merveilleux sponsors.
          </p>
        </div>
      </div>

      <SponsorModal sponsor={selectedSponsor} isOpen={!!selectedSponsor} onClose={() => setSelectedSponsor(null)} />

      <div className="relative h-24">
        <svg
          className="absolute bottom-0 w-full h-24 -mb-1 text-blue-900"
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

