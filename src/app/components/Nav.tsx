"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Inter } from "next/font/google";
import { BiHome, BiGroup, BiCalendarEvent, BiHeart, BiPhone, BiWorld } from "react-icons/bi";
import { useLanguage } from "../context/LanguageContext";
import  NavbarContent  from "../PageContent/NavbarContent";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500"],
});

const Nav = () => {

    const [open, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const { language, setLanguage } = useLanguage();
    const content = NavbarContent[language];

    const handleOpen: () => void = (): void => {
        setIsOpen(!open);
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [prevScrollPos, visible])

    return (
        <nav className={`transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="navbarContainer">

                <div className="logoContainer">
                    <Image src="/LFC_LOGO.png" alt="langara french club logo" width={100} height={100} />
                </div>


                <div className="computerNavigation hidden sm:block">
                    <div className="computerLinkContainer">

                        <Link href="/">
                            <div className="linkContainer">
                                <BiHome className="linkIcon" />
                                <p> {content.home} </p>
                            </div>
                        </Link>
                        <Link href="/Members">
                            <div className="linkContainer">
                                <BiGroup className="linkIcon" />
                                <p> {content.members} </p>
                            </div>
                        </Link>
                        <Link href="/Events">
                            <div className="linkContainer">
                                <BiCalendarEvent className="linkIcon" />
                                <p> {content.events} </p>
                            </div>
                        </Link>
                        <Link href="/Sponsors">
                            <div className="linkContainer">
                                <BiHeart className="linkIcon" />
                                <p> {content.sponsors} </p>
                            </div>
                        </Link>
                        <Link href="/Contact">
                            <div className="linkContainer">
                                <BiPhone className="linkIcon" />
                                <p> {content.contact} </p>
                            </div>
                        </Link>

                    </div>
                </div>
                <button className={`${inter.className} bg-none border-2 border-black border-solid p-2 my-auto mr-10 h-fit text-lg rounded-lg flex flex-row hover:bg-black
                hover:text-white hover:border-white duration-300`} onClick={()=>{setLanguage(language === 'en' ? 'fr' : 'en')}} >
                    <BiWorld className="my-auto mx-1 size-6" />
                    {language.toUpperCase()}
                </button>
                <div className="hambNav sm:hidden">
                    <RiMenu4Fill onClick={handleOpen} color={open ? "red" : "black"} />
                </div>
            </div>
            <div className={`mobileNavigation ${open ? "openNav" : "closedNav"} `} >
                <div className={`mobileLinkContainer ${inter.className}`}>
                    <Link href="/" onClick={handleOpen}>
                        <div className="linkContainer">
                            <BiHome className="linkIcon" />
                            <p> {content.home} </p>
                        </div>
                    </Link>
                    <Link href="/Members" onClick={handleOpen}>
                        <div className="linkContainer">
                            <BiGroup className="linkIcon" />
                            <p> {content.members} </p>
                        </div>
                    </Link>
                    <Link href="/Events" onClick={handleOpen}>
                        <div className="linkContainer">
                            <BiCalendarEvent className="linkIcon" />
                            <p> {content.events} </p>
                        </div>
                    </Link>
                    <Link href="/Sponsors" onClick={handleOpen}>
                        <div className="linkContainer">
                            <BiHeart className="linkIcon" />
                            <p> {content.sponsors} </p>
                        </div>
                    </Link>
                    <Link href="/Contact" onClick={handleOpen}>
                        <div className="linkContainer">
                            <BiPhone className="linkIcon" />
                            <p> {content.contact} </p>
                        </div>
                    </Link>
                </div>
            </div>



        </nav>
    );
}

export default Nav;