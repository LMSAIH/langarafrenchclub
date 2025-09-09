"use client"

import { Inter } from "next/font/google"
import { useEffect } from "react"
import { Mail, MapPin, Users } from "lucide-react"
import { BsDiscord, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs"
import { useLanguage } from "../context/LanguageContext"
import Link from "next/link"
import contactContent from "../PageContent/ContactContent"
import AOS from "aos"
import "aos/dist/aos.css"
import { H1, H3, Span } from "../components/Typography"
import WaveSeparator from "../components/WaveSeparator"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})

export default function Contact() {
  const { language } = useLanguage();
  const content = contactContent[language];

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    })
  }, [])

  return (
    <div className={`${inter.className}`}>
      <div className="relative h-16 sm:h-24 bg-blue-900" />
      <WaveSeparator variant="up" />

      <div className="bg-white py-20  px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl 4xl:max-w-full 4xl:w-3/4 mx-auto">
          <H1
            className="text-center mb-16 text-frenchBlue"
            data-aos="fade-down"
          >
            {content.title}
          </H1>

          <div className="flex justify-center">
            <div className="text-center" data-aos="fade-up">

              {/* Contact Icons */}
              <div className="flex justify-center items-center gap-8 4xl:gap-12 mb-16 flex-wrap">
                <Link href="mailto:frenchclub.langara1@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className="p-4 4xl:p-6 rounded-full bg-red-50 hover:bg-red-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <Mail className="text-red-600 w-6 h-6 4xl:w-10 4xl:h-10" />
                  </div>
                </Link>

                <Link href="https://www.linkedin.com/company/langara-french-club/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                  <div className="p-4 4xl:p-6 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <BsLinkedin className="text-blue-700 w-6 h-6 4xl:w-10 4xl:h-10" />
                  </div>
                </Link>

                <Link href="https://discord.gg/9UQchagN43" target="_blank" rel="noopener noreferrer">
                  <div className="p-4 4xl:p-6 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <BsDiscord className="text-indigo-600 w-6 h-6 4xl:w-10 4xl:h-10" />
                  </div>
                </Link>

                <Link href="https://www.instagram.com/leclubdefrancaislangara/" target="_blank" rel="noopener noreferrer">
                  <div className="p-4 4xl:p-6 rounded-full bg-pink-50 hover:bg-pink-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <BsInstagram className="text-pink-600 w-6 h-6 4xl:w-10 4xl:h-10" />
                  </div>
                </Link>

                <Link href="https://www.facebook.com/langara.french.club/" target="_blank" rel="noopener noreferrer">
                  <div className="p-4 4xl:p-6 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <BsFacebook className="text-blue-600 w-6 h-6 4xl:w-10 4xl:h-10" />
                  </div>
                </Link>
              </div>

              {/* Mailing List */}
              <div className="mt-16 " data-aos="fade-up" data-aos-delay="200">
                <Link href="https://forms.office.com/r/Adgw7rHdzG" target="_blank" rel="noopener noreferrer">
                  <div className="inline-flex items-center bg-frenchBlue hover:bg-blue-800 text-white px-8 py-4 4xl:px-16 4xl:py-8 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer">
                    <Users className="w-5 h-5 4xl:w-8 4xl:h-8 mr-3 4xl:mr-6" />
                    <Span className="font-semibold text-base 4xl:text-2xl">Join our mailing list</Span>
                  </div>
                </Link>

                {/* Disclaimer */}
                <div className="mt-4 4xl:mt-8 max-w-sm mx-auto " data-aos="fade-up" data-aos-delay="300">
                  <Span className="text-gray-500 text-sm mx-auto">
                    {content.mailingListDisclaimer}
                  </Span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <WaveSeparator variant="down" />
      <div className="h-16 sm:h-24 bg-blue-900 border-b-4 pb-0 mb-0 border-blue-900" />
    </div>
  )
}
