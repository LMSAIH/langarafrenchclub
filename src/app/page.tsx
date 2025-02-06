"use client"

import Image from "next/image"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import EventCard from "./components/EventCard"
import TestimonialCard from "./components/TestimonialCard"
import { useLanguage } from "./context/LanguageContext"
import HomepageContent from "./PageContent/HomepageContent"
import EventsContent from "./PageContent/EventsContent"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
})

export default function Home() {

  const { language } = useLanguage();
  const content = HomepageContent[language];
  const eventContent = EventsContent[language];

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
            className="text-4xl md:text-6xl 4xl:text-8xl text-white font-bold text-center px-4"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {content.title}
          </h1>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl 4xl:max-w-full 4xl:w-3/4 mx-auto">
          <div
            className="flex flex-col md:flex-row items-center justify-between mb-12 4xl:w-full"
            data-aos="fade-up-right"
            data-aos-delay="50"
          >
            <h2 className="text-3xl 4xl:text-8xl 4xl:p-12 font-bold text-white mb-4 md:mb-0 bg-blue-900 p-2 rounded-md md:p-6 4xl:rounded-xl" >
              {content.aboutTitle}
            </h2>
            <Image src="/Question_image.svg" alt="question image" width={150} height={150} className="w-1/2 4xl:w-3/4" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-20 4xl:w-full" data-aos="fade-up-left" >
            <Image src="/Answer_image.svg" alt="answer image" width={100} height={100} className="mb-4 md:mb-0 md:relative md:w-1/2 md:block hidden 4xl:w-3/4 " />
            <p className="text-xl md:text-2xl 4xl:text-6xl 4xl:p-12 4xl:w-full 4xl:rounded-xl text-white bg-red-600 md:bg-opacity-100 md:ml-8 p-4 rounded-md md:rounded-md md:p-6 md:bg-red-600  "
              data-aos="zoom-y-out" data-aos-delay="100">
              {content.aboutText}
            </p>
            <Image src="/Answer_image.svg" alt="answer image" width={100} height={100} className="mb-4 mt-10 md:mb-0 md:relative md:w-1/2 relative md:hidden block w-full" />
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
        <div className="max-w-7xl 4xl:max-w-full 4xl:w-3/4 mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center 4xl:text-8xl 4xl:mb-16" data-aos="fade-up">
            {content.eventsTitle}
          </h2>
          <div className="flex flex-row flex-wrap gap-10 justify-center">
          {eventContent.events.slice(-4).reverse().map((event, index) => (
              <EventCard
                key={`event ${index}`}
                title={event.title}
                description={event.description}
                date={event.date}
              />))}
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
        <div className="max-w-7xl 4xl:max-w-full 4xl:w-3/4 mx-auto">
          <h2 className="text-3xl 4xl:text-8xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            {content.testimonialsTitle}
          </h2>
          <div className="flex flex-row wrap gap-10 justify-center">
            {content.testimonials.map((testimonial, index) => (
              <TestimonialCard key={`testimonial ${index}`} quote={testimonial.quote} author={testimonial.author} />
            ))}
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
        <div className="max-w-7xl 4xl:max-w-full 4xl:w-3/4 mx-auto text-center">
          <h2 className="text-3xl 4xl:text-8xl font-bold text-white mb-4 4xl:mb-20" data-aos="fade-up">
            {content.contactTitle}
          </h2>
          <p className="text-xl 4xl:text-6xl text-white mb-8 4xl:mb-20 4xl:mt-20 " data-aos="fade-up" data-aos-delay="100">
            {content.contactText}
          </p>
          <a
            href="mailto:frenchclub@langara.ca"
            className="inline-block bg-white text-blue-900 4xl:text-6xl 4xl:p-12 font-bold py-3 px-8 rounded-full hover:bg-red-700 hover:text-white transition duration-300"
            data-aos="zoom-in"
          >
            {content.contactButton}
          </a>
        </div>
      </div>

    </div>
  )
}

