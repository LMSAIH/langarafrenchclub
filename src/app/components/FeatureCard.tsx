"use client"

import type React from "react"
import { H3, P } from "./Typography"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  borderColor: string
  hoverColor: string
  iconBgColor: string
  iconBorderColor: string
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  borderColor, 
  hoverColor, 
  iconBgColor, 
  iconBorderColor,
  delay = 0 
}) => {
  return (
    <div
      className={`relative group text-center p-8 bg-white rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-b-4 ${borderColor}`}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className={`absolute inset-0 ${hoverColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className="relative z-10">
        <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-b-4 ${iconBorderColor}`}>
          {icon}
        </div>
        <H3 className="text-gray-900 mb-2">{title}</H3>
        <P className="text-gray-600">{description}</P>
      </div>
    </div>
  )
}

export default FeatureCard;