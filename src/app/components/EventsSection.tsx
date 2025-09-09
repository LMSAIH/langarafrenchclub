"use client"

import Link from "next/link"
import EventCard from "./EventCard"
import { H2, Span } from "./Typography"

interface Event {
  title: string
  date: string
  description: string
}

interface EventsSectionProps {
  eventsTitle: string
  events: Event[]
}

const EventsSection = ({ eventsTitle, events }: EventsSectionProps) => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <H2
            className="text-gray-900 mb-4"
            data-aos="fade-up"
          >
            {eventsTitle}
          </H2>
          <div
            className="inline-flex items-center space-x-4 bg-gray-50 rounded-full p-2 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-frenchBlue rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-frenchRed rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gold rounded-full border-2 border-white"></div>
            </div>
            <Span className="text-sm text-gray-600 font-medium pr-4">Join 100+ active members</Span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-0">
          {events.slice(-4).reverse().map((event, index) => (
            <EventCard
              key={`event ${index}`}
              title={event.title}
              date={event.date}
              description={event.description}
              index={index}
            />
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center mt-16 flex flex-col items-center">
          <Link
            href="/Events"
            className="relative group inline-block bg-frenchBlue text-white font-semibold py-4 px-10 rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-xl transform hover:scale-105 border-b-4 border-blue-900"
          >
            <Span className="relative z-10">View All Events</Span>
            <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventsSection
