"use client"

import type React from "react"
import Image from "next/image"
import type { Event } from "../types/event"

interface EventCardProps {
  event: Event
  index: number
}

const DetailedEvent: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 30}
    >
      <div className="relative h-48 4xl:h-60">
        <Image
          src={event.imageUrl}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 4xl:p-12 flex-grow flex flex-col">
        <h3 className="text-xl 4xl:text-5xl font-semibold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-4 4xl:text-4xl">{event.date}</p>
        <p className="text-gray-700 flex-grow 4xl:text-4xl" >{event.description}</p>
        <div className="mt-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide 4xl:text-3xl">
            {event.category}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DetailedEvent