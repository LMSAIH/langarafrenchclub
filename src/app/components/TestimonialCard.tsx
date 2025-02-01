"use client"

import type React from "react"

interface TestimonialCardProps {
  quote: string
  author: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 4xl:p-12 4xl:rounded-xl" data-aos="fade-up">
      <p className="text-gray-700 italic mb-4 4xl:text-5xl xl:mt-10">"{quote}"</p>
      <p className="text-blue-900 font-semibold 4xl:text-4xl 4xl:mt-10">- {author}</p>
    </div>
  )
}

export default TestimonialCard

