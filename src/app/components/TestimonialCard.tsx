import type React from "react"

interface TestimonialCardProps {
  quote: string
  author: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6" data-aos="fade-up">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="text-blue-900 font-semibold">- {author}</p>
    </div>
  )
}

export default TestimonialCard

