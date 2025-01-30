"use client";

import { Inter } from "next/font/google";
import type { Member } from "../types/member";
import MemberCard from "../components/Member";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import  MembersContent  from "../PageContent/MembersContent";
import { useLanguage } from "../context/LanguageContext";

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

  const {language} = useLanguage();
  const content = MembersContent[language];

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
        <div className="w-full mx-auto">
          <h1
            className={`${inter.className} french-accent text-center text-3xl md:text-5xl  font-bold text-blue-900 mb-16`}
            data-aos="fade-down"
          >
            {content.teamIntro}
          </h1>

          <section className="mb-24 french-border p-8 bg-white rounded-lg shadow-lg" data-aos="fade-up">
            <h2
              className={`${inter.className} french-accent text-center text-3xl md:text-4xl font-semibold text-red-700 mb-12`}
            >
              {content.currentExecsTitle}
            </h2>
            <div className="flex flex-wrap justify-center items-stretch w-full h-fit mx-auto mt-10 gap-x-4 gap-y-10">
              {content.currentExecs.map((member, index) => (
                <div
                  key={`member ${index}`}
                  className="w-5/12 md:w-1/4 lg:w-1/6 flex justify-center"
                  data-aos="zoom-in"
                  data-aos-delay={index*50}
                >
                  <MemberCard member={{...member, id:index}} />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-24 french-border p-8 bg-white rounded-lg shadow-lg" data-aos="fade-up" >
            <h2
              className={`${inter.className} french-accent text-center text-3xl md:text-4xl font-semibold text-red-700 mb-12`}
            >
              {content.oldExecsTitle}
            </h2>
            <div className="flex flex-wrap justify-center items-stretch w-full h-fit mx-auto mt-10 gap-x-4 gap-y-10">
              {content.oldExecs.map((member, index) => (
                <div
                  key={`member ${index}`}
                  className="w-5/12 md:w-1/4 lg:w-1/6 flex justify-center"
                  data-aos="zoom-in"
                  data-aos-delay={index*50}
                >
                  <MemberCard member={{...member, id: index}} />
                </div>
              ))}
            </div>
          </section>
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
};

export default Members;
