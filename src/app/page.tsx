"use client"

import Image from "next/image"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import EventCard from "./components/EventCard"
import TestimonialCard from "./components/TestimonialCard"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-sine",
    })

  }, [])

  return (
    <div className={`${inter.className} min-h-screen`}>

      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/Langara_french_club.jpg"
            alt="Langara College image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1
            className="text-4xl md:text-6xl text-white font-bold text-center px-4"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Bienvenue au Club Français de Langara
          </h1>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row items-center justify-between mb-12"
            data-aos="fade-up-right"
            data-aos-delay="50"
          >
            <h2 className="text-3xl font-bold text-white mb-4 md:mb-0 bg-blue-900 p-2 rounded-md md:p-6">
              Qu'est-ce que le Club Français de Langara ?
            </h2>
            <Image src="/Question_image.svg" alt="question image" width={150} height={150} className="w-1/2" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-20" data-aos="fade-up-left">
            <Image src="/Answer_image.svg" alt="answer image" width={100} height={100} className="mb-4 md:mb-0 md:relative md:w-1/2 absolute  top-1/4 w-full" />
            <p className="text-xl md:text-2xl text-white bg-black bg-opacity-40 md:bg-opacity-100 md:ml-8 p-4 rounded-md md:rounded-md md:p-6 md:bg-red-600  " 
            data-aos="zoom-y-out" data-aos-delay="100">
              Nous sommes une organisation dirigée par des étudiants, dédiée à la diffusion de la langue et de la
              culture françaises. Basés au Collège Langara, nous organisons régulièrement des événements pour aider les
              participants à apprendre la langue et à partager la culture.
            </p>
          </div>
        </div>
      </div>

   
      <div className="relative h-24 bg-white">
        <svg
          className="absolute bottom-0 w-full h-24 -mb-1 text-red-700"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          ></path>
        </svg>
      </div>

      <div className="bg-red-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center" data-aos="fade-up">
            Nos Événements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Soirée Cinéma Français"
              date="15 Juin 2023"
              description="Rejoignez-nous pour une projection de 'Amélie', suivie d'une discussion en français."
            />
            <EventCard
              title="Atelier de Cuisine Française"
              date="22 Juin 2023"
              description="Apprenez à préparer des croissants et des macarons authentiques."
            />
            <EventCard
              title="Conversation en Français"
              date="Chaque Mardi"
              description="Pratiquez votre français dans une ambiance décontractée avec des locuteurs natifs."
            />
          </div>
        </div>
      </div>

      <div className="relative h-24 bg-red-700">
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Témoignages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Le Club Français de Langara m'a aidé à améliorer ma confiance en parlant français. C'est une communauté formidable !"
              author="Sarah L."
            />
            <TestimonialCard
              quote="Les événements culturels organisés par le club m'ont permis de découvrir la richesse de la culture française."
              author="Michael T."
            />
          </div>
        </div>
      </div>

      <div className="relative h-24 bg-white">
        <svg
          className="absolute bottom-0 w-full h-24 -mb-1 text-blue-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          ></path>
        </svg>
      </div>

      <div className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-aos="fade-up">
            Contactez-nous
          </h2>
          <p className="text-xl text-white mb-8" data-aos="fade-up" data-aos-delay="100">
            Vous avez des questions ? N'hésitez pas à nous contacter !
          </p>
          <a
            href="mailto:frenchclub@langara.ca"
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-red-700 hover:text-white transition duration-300"
            data-aos="zoom-in"
          >
            Envoyez-nous un email
          </a>
        </div>
      </div>

    </div>
  )
}

