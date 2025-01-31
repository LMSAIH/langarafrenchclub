"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import DetailedEvent from "../components/DetailedEvent"
import type { Event } from "../types/event"


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})


const events: Event[] = [
  {
    id: 1,
    title: "Soirée Cinéma Français",
    date: "15 Juin 2023",
    description: "Une projection du film 'Amélie' suivie d'une discussion animée sur le cinéma français.",
    imageUrl: "/CONSAR1.jpg",
    category: "Culture",
  },
  {
    id: 2,
    title: "Atelier de Cuisine: Macarons",
    date: "22 Juillet 2023",
    description: "Apprenez à préparer de délicieux macarons français avec notre chef pâtissier invité.",
    imageUrl: "/CONSAR1.jpg",
    category: "Cuisine",
  },
  {
    id: 3,
    title: "Conversation en Français",
    date: "5 Août 2023",
    description: "Pratiquez votre français dans une ambiance décontractée avec des locuteurs natifs.",
    imageUrl: "/CONSAR1.jpg",
    category: "Langue",
  },
  {
    id: 4,
    title: "Visite Virtuelle du Louvre",
    date: "18 Septembre 2023",
    description: "Explorez les trésors du Louvre lors d'une visite virtuelle guidée exclusive.",
    imageUrl: "/CONSAR1.jpg",
    category: "Culture",
  },
  {
    id: 5,
    title: "Dégustation de Vins Français",
    date: "30 Octobre 2023",
    description: "Découvrez une sélection de vins français fins, accompagnés de fromages assortis.",
    imageUrl: "/CONSAR1.jpg",
    category: "Gastronomie",
  },
  {
    id: 6,
    title: "Concert de Musique Française",
    date: "12 Novembre 2023",
    description: "Profitez d'une soirée de musique française classique et contemporaine.",
    imageUrl: "/CONSAR1.jpg",
    category: "Culture",
  },
]

const categories = ["Tous", "Culture", "Cuisine", "Langue", "Gastronomie"]

export default function Events() {
  const [filter, setFilter] = useState("Tous")
  const [filteredEvents, setFilteredEvents] = useState(events)

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    })
  }, [])

  useEffect(() => {
    if (filter === "Tous") {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(events.filter((event) => event.category === filter))
    }
  }, [filter])

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
        <div className="w-full mx-auto">
          <h1
            className={`${inter.className} french-accent text-center text-4xl md:text-5xl font-bold text-blue-900 mb-16`}
            data-aos="fade-down"
          >
            Nos Événements Passés
          </h1>

          <div className="mb-8 flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === category ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="w-full sm:1/3 lg:w-1/5 flex">
                <DetailedEvent event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

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

