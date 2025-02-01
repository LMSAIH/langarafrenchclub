"use client"

import type React from "react"

interface EventCardProps {
  title: string
  date: string
  description: string
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 4xl:p-12 4xl:rounded-xl" data-aos="fade-up">
      <h3 className="text-xl font-bold text-blue-900 mb-2 4xl:text-5xl">{title}</h3>
      <p className="text-red-700 font-semibold mb-2 4xl:text-4xl">{date}</p>
      <p className="text-gray-600 4xl:text-4xl">{description}</p>
    </div>
  )
}

export default EventCard

