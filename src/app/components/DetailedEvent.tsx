"use client"

import type React from "react"
import Image from "next/image"
import type { Event } from "../types/event"
import { Span, H3, P } from "./Typography"

interface EventCardProps {
  event: Event
  index: number
}

const DetailedEvent: React.FC<EventCardProps> = ({ event, index }) => {
  // Category color mapping
  const getCategoryColor = (category: string) => {
    const colors = {
      'Culture': 'bg-purple-100 text-purple-700 border-purple-200',
      'Cuisine': 'bg-orange-100 text-orange-700 border-orange-200',
      'Community': 'bg-green-100 text-green-700 border-green-200',
      'Communauté': 'bg-green-100 text-green-700 border-green-200',
      'All': 'bg-blue-100 text-blue-700 border-blue-200',
      'Tous': 'bg-blue-100 text-blue-700 border-blue-200',
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  return (
    <div
      className="bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-full
                 shadow-[8px_8px_16px_#e2e8f0,_-8px_-8px_16px_#ffffff] 
                 hover:shadow-[12px_12px_24px_#d1d9e6,_-12px_-12px_24px_#ffffff]
                 border border-gray-100/50"
      data-aos="zoom-in"
      data-aos-delay={index * 50}
      data-aos-duration="600"
    >
      <div className="relative h-52 4xl:h-72 overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 4xl:p-12 flex flex-col">
        <div className="mb-3 4xl:mb-6">
          <H3 className="text-gray-900 leading-tight mb-2">
            {event.title}
          </H3>
          <P className="text-sm 4xl:text-2xl text-gray-500 font-medium">
            {event.date}
          </P>
        </div>
        
        <P className="text-gray-600 leading-relaxed 4xl:text-xl mb-4 4xl:mb-8">
          {event.description}
        </P>
        
        <div>
          <Span className={`inline-block text-xs 4xl:text-lg px-3 py-1.5 4xl:px-6 4xl:py-3 rounded-full font-medium tracking-wide border transition-colors duration-200 ${getCategoryColor(event.category)}`}>
            {event.category}
          </Span>
        </div>
      </div>
    </div>
  )
}

export default DetailedEvent