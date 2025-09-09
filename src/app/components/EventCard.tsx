"use client"

import type React from "react"
import Link from "next/link"
import { H3, P, Span } from "./Typography"
import { ArrowRight } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  description: string
  index: number
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, index = 0 }) => {
  return (
    <div
      className="group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <Link href="/Events" className="block">
        <div className="relative bg-white pt-4 pb-2 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-b-4 border-frenchBlue/20 overflow-hidden">

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-frenchBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Card content */}
          <div className="relative px-4 pb-6">
            {/* Date section with enhanced styling */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Span className="text-sm font-medium text-frenchBlue">{date}</Span>
              </div>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
               <ArrowRight  className="w-5 h-5 text-frenchBlue" />
              </div>
            </div>

            {/* Title with enhanced typography */}
            <H3 className="text-gray-900 mb-3 group-hover:text-frenchBlue transition-colors duration-300">
              {title}
            </H3>

            {/* Description with line clamp */}
            <P className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {description}
            </P>

            {/* Interactive CTA */}
            <div className="flex items-center justify-between">
              <Span 
                className="text-xs text-gray-500 font-medium hover:text-frenchBlue transition-colors duration-300"
     
              >
                Learn More
              </Span>

            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default EventCard;

