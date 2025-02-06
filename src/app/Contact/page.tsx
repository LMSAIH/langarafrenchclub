"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import {  MailPlusIcon } from "lucide-react"
import { BsDiscord, BsInstagram, BsFacebook, BsPinMap, BsPhone } from "react-icons/bs"
import { SiGmail } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext"
import emailjs from "@emailjs/browser";
import contactContent from "../PageContent/ContactContent"
import AOS from "aos"
import "aos/dist/aos.css"


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})

type FormInputs = {
  name: string
  email: string
  message: string
}

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
    <div className={`${inter.className} min-h-screen`}>
      <div className="relative h-64 bg-blue-900">
        <svg
          className="absolute bottom-0 w-full h-24 -mb-1 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          ></path>
        </svg>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl 4xl:max-w-full 4xl:w-3/4 mx-auto">
          <h1
            className={`${inter.className} french-accent text-center text-4xl md:text-5xl 4xl:text-8xl font-bold text-blue-900 mb-8`}
            data-aos="fade-down"
          >
            {content.title}
          </h1>

          <div className="flex flex-wrap justify-center -mx-4">

            <div className="w-full lg:w-1/2 px-4" data-aos="fade-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 4xl:text-8xl">{content.contactInfo.heading}</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <SiGmail className="text-red-600 mr-4 4xl:size-20" />
                    <span className="4xl:text-4xl">{content.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <BsPinMap className="text-yellow-700 mr-4 4xl:size-20" />
                    <span className="4xl:text-4xl">{content.contactInfo.address}</span>
                  </div>
                  <div className="flex items-center">
                    <BsDiscord className="text-blue-900 mr-4 4xl:size-20" />
                    <span className="4xl:text-4xl">Discord</span>
                  </div>
                  <div className="flex items-center">
                    <BsInstagram className="text-pink-500 mr-4 4xl:size-20" />
                    <span className="4xl:text-4xl">leclubdefrancaislangara</span>
                  </div>
                  <div className="flex items-center">
                    <BsFacebook className="text-blue-600 mr-4 4xl:size-20" />
                    <span className="4xl:text-4xl">langara french club</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 4xl:text-4xl">{content.contactInfo.openingHours}</h3>
                  <p className="4xl:text-4xl">{content.contactInfo.weekdayHours}</p>
                  <p className="4xl:text-4xl">{content.contactInfo.weekendHours}</p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 4xl:text-4xl">Join our mailing list</h3>
                  <div >
                    <a href="" className="hover:text-blue-600 duration-300">
                      <div className="flex flex-row m-auto">
                      <MailPlusIcon className="text-blue-600 mr-4 4xl:size-20" />
                        <p className="text-sm text-gray-600 hover:text-blue-600 4xl:text-md"> Click here to join the list </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-48 bg-white">
        <svg
          className="absolute bottom-0 w-full h-48 -mb-1 text-blue-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

