"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import DetailedEvent from "../components/DetailedEvent"
import WaveSeparator from "../components/WaveSeparator"
import EventsContent from "../PageContent/EventsContent"
import { H1 } from "../components/Typography"
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
      duration: 600,
      once: false,
      offset: 100,
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
    // Refresh AOS when events change
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [filter, content]);

  return (
    <div className={`${inter.className} min-h-screen mx-auto`}>
      <div className="relative h-16 sm:h-24 bg-blue-900" />
      <WaveSeparator className=" " variant="up" />

      <div className="bg-white py-20 4xl:py-32 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-7xl 4xl:max-w-[100rem] mx-auto">
          <div className="text-center mb-16 4xl:mb-24">
            <H1 
              className="mb-6 4xl:mb-12 text-frenchBlue" 
              data-aos="fade-down"
              data-aos-delay="100"
            >
              {content.title}
            </H1>
            
            <div className="mb-12 4xl:mb-20 flex flex-wrap justify-center gap-3 4xl:gap-6" data-aos="fade-up" data-aos-delay="200">
              {content.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 4xl:px-12 4xl:py-6 rounded-full text-sm 4xl:text-2xl font-medium transition-all duration-300 border-2 ${
                    filter === category 
                      ? "bg-frenchBlue text-white border-frenchBlue shadow-md" 
                      : "bg-white text-gray-700 border-gray-200 hover:border-frenchBlue hover:text-frenchBlue hover:shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div 
            className="flex flex-wrap justify-center gap-6 mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[...filteredEvents].reverse().map((event, index) => (
              <div key={`${event.id}-${filter}`} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]">
                <DetailedEvent event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveSeparator variant="down" />
      <div className=" h-16 sm:h-24 bg-blue-900 border-b-4 pb-0 mb-0 border-blue-900" />
    </div>
  )
}

