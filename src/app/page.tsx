"use client"

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div>
      <div className="homeIntroductionContent">
        <div className="mainHeaderImageContainer">
          <div className="imageOverlay" >
            <Image src="/Langara_french_club.jpg" alt="langara college image" width={500} height={500} />
          </div>
        </div>
        <h1 className={`mainHeader ${inter.className}`} data-aos="fade-up" data-aos-delay="50" > The Langara French Club embraces you.</h1>
      </div>

      <div className={`aboutUs ${inter.className}`} >
        <div className="aboutUsDecorator">
        </div>
        <div className="aboutUsHeaderContainer" data-aos="fade-up-right" data-aos-delay="50">
          <div className="aboutUsHeaderContainerLeft" >

            <h2 > What is the Langara French Club? </h2>
          </div>
          <div className="aboutUsHeaderContainerRight">
            <Image src="/Question_image.svg" alt="question image" width={100} height={100} />
          </div>
        </div>

        <div className="aboutUsAnswerContainer" data-aos="fade-up-left">
          <div className="aboutUsAnswerContainerLeft">
            <Image src="/Answer_image.svg" alt="answer image" width={100} height={100} />
          </div>
          <div className="aboutUsAnswerContainerRight">
            <p data-aos="zoom-y-out" data-aos-delay="100"> We are a student-led organization dedicated to spreading the French language and culture. We are based on Langara College and we host events regularly to help participants learn the language and share the culture.  </p>
          </div>
        </div>
      </div>
    </div>
  );
}
