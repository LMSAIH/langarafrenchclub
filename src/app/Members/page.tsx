"use client";

import { Inter } from "next/font/google";
import MemberCard from "../components/Member";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MembersContent from "../PageContent/MembersContent";
import { useLanguage } from "../context/LanguageContext";
import { H1, H2, P } from "../components/Typography";
import WaveSeparator from "../components/WaveSeparator";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const Members = () => {
  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });
  }, []);

  const { language } = useLanguage();
  const content = MembersContent[language];

  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      {/* Hero Section */}
      <div className="relative h-16 sm:h-24 bg-blue-900" />
      <WaveSeparator className=" " variant="up" />

      <div className="py-16 4xl:py-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl 4xl:max-w-[100rem] mx-auto">


          <section className="mb-24 4xl:mb-48" data-aos="fade-up">
            <H2
              className="text-center mb-12 4xl:mb-24"
            >
              {content.clubExecutivesTitle}
            </H2>

            <div className="flex flex-wrap justify-center gap-8 4xl:gap-16">
              {content.clubFounders.map((member, index) => (
                <div
                  key={`founder-${index}`}
                  className="w-48 4xl:w-72"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <MemberCard member={{ ...member, id: index }} />
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24 4xl:mb-48" data-aos="fade-up">
            <H2
              className="text-center mb-12 4xl:mb-24"
            >
              {content.currentLeadersTitle}
            </H2>

            <div className="flex flex-wrap justify-center gap-8 4xl:gap-16">
              {content.currentExecs.map((member, index) => (
                <div
                  key={`current-${index}`}
                  className="w-48 4xl:w-72"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <MemberCard member={{ ...member, id: index }} />
                </div>
              ))}
            </div>
          </section>

          <section data-aos="fade-up">
            <H2
              className="text-center mb-12 4xl:mb-24"
            >
              {content.formerLeadersTitle}
            </H2>

            <div className="flex flex-wrap justify-center gap-8 4xl:gap-16">
              {content.oldExecs.map((member, index) => (
                <div
                  key={`former-${index}`}
                  className="w-48 4xl:w-72"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <MemberCard member={{ ...member, id: index }} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <WaveSeparator variant="down" />
      <div className=" h-16 sm:h-24 bg-blue-900 border-b-4 pb-0 mb-0 border-blue-900" />

    </div>
  )
};

export default Members;
