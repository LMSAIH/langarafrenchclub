"use client"

import { H2, P } from "./Typography"

interface ContactSectionProps {
  contactTitle: string
  contactText: string
  contactButton: string
}

const ContactSection = ({ contactTitle, contactText, contactButton }: ContactSectionProps) => {
  return (
    <div className="bg-frenchBlue py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <H2
          className="text-white mb-6"
          data-aos="fade-up"
        >
          {contactTitle}
        </H2>
        <P
          className="text-xl text-blue-100 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {contactText}
        </P>
        <a
          href="mailto:frenchclub@langara.ca"
          className="relative group inline-block bg-white text-frenchBlue font-semibold py-3 px-10 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-xl transform hover:scale-105 border-b-4 border-gray-300"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <span className="relative z-10">{contactButton}</span>
          <div className="absolute inset-0 bg-frenchBlue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </div>
  )
}

export default ContactSection
