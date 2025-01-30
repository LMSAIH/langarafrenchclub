"use client"

import type React from "react"

interface EventCardProps {
  title: string
  date: string
  description: string
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-red-700 font-semibold mb-2">{date}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default EventCard

