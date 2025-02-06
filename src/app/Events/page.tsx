"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import DetailedEvent from "../components/DetailedEvent"
import type { Event } from "../types/event"
import EventsContent from "../PageContent/EventsContent"
import { useLanguage } from "../context/LanguageContext"
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})

export default function Events() {

  const { language } = useLanguage();
  const content = EventsContent[language];

  const [filter, setFilter] = useState(content.categories[0]);
  const [filteredEvents, setFilteredEvents] = useState(content.events);

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);

  useEffect(() => {
  
    setFilter(content.categories[0]);
    setFilteredEvents(content.events);
  }, [language]);

  useEffect(() => {
   
    if (filter === content.categories[0]) {
      setFilteredEvents(content.events);
    } else {
      setFilteredEvents(content.events.filter((event) => event.category === filter));
    }
  }, [filter, content]);

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
            className={`${inter.className} french-accent 4xl:text-8xl text-center text-4xl md:text-5xl font-bold text-blue-900 mb-16`}
            data-aos="fade-down"
          >
            {content.title}
          </h1>

          <div className="mb-8 flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {content.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm 4xl:text-4xl 4xl:px-8 4xl:py-4 font-medium transition-colors duration-300 ${filter === category ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {[...filteredEvents].reverse().map((event, index) => (
              <div key={event.id} className="w-full sm:1/3 lg:w-1/5 flex">
                <DetailedEvent event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

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

