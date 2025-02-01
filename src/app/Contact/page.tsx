"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { Mail, Phone, MapPin } from "lucide-react"
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    })
  }, [])

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
   
    console.log(data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
            Contactez-nous
          </h1>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" data-aos="fade-right">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 4xl:text-4xl font-bold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Le nom est requis" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block 4xl:text-4xl text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Adresse email invalide",
                      },
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block 4xl:text-4xl text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Le message est requis" })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-sm 4xl:text-4xl">{errors.message.message}</span>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md 4xl:text-4xl hover:bg-blue-700 transition-colors duration-300"
                >
                  Envoyer
                </button>
              </form>
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md 4xl:text-4xl" data-aos="fade-in">
                  Merci pour votre message ! Nous vous répondrons bientôt.
                </div>
              )}
            </div>
            <div className="w-full lg:w-1/2 px-4" data-aos="fade-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 4xl:text-8xl">Informations de contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-4 4xl:size-20" />
                    <span className="4xl:text-4xl">contact@clubfrancais.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-4 4xl:size-20" />
                    <span className="4xl:text-4xl">+1 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-600 mr-4 4xl:size-20" />
                    <span className="4xl:text-4xl">100 West 49th Avenue, Vancouver, BC V5Y 2Z6</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 4xl:text-4xl">Heures d'ouverture</h3>
                  <p className="4xl:text-4xl">Lundi - Vendredi: 9h00 - 17h00</p>
                  <p className="4xl:text-4xl">Samedi - Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-24">
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
    </div>
  )
}

