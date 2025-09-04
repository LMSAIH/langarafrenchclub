"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useLanguage } from "./context/LanguageContext"
import HomepageContent from "./PageContent/HomepageContent"
import EventsContent from "./PageContent/EventsContent"
import WaveSeparator from "./components/WaveSeparator"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import EventsSection from "./components/EventsSection"
import ContactSection from "./components/ContactSection"

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
    <div className="min-h-screen">
      <HeroSection 
        title={content.title}
        aboutText={content.aboutText}
      />

      <AboutSection 
        aboutTitle={content.aboutTitle}
        features={content.features}
      />

      <WaveSeparator className="text-white bg-gray-50" />

      <EventsSection 
        eventsTitle={content.eventsTitle}
        events={eventContent.events}
      />

      <WaveSeparator className="text-frenchBlue" />

      <ContactSection 
        contactTitle={content.contactTitle}
        contactText={content.contactText}
        contactButton={content.contactButton}
      />

      <WaveSeparator className="bg-frenchBlue" />
    </div>
  )
}

