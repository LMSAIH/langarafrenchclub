"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RiMenu4Fill, RiCloseFill, RiGlobalLine } from "react-icons/ri";
import { Inter } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";
import NavbarContent from "../PageContent/NavbarContent";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
        <div className="fixed top-4 left-4 right-4 lg:left-1/2 lg:right-auto lg:transform lg:-translate-x-1/2 z-50 lg:w-fit">
            <nav className="bg-black/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl px-4 py-2 w-full lg:max-w-fit mx-auto">
                <div className="flex items-center justify-between lg:gap-4 lg:justify-start">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Image src="/LFC_LOGO.png" alt="langara french club logo" width={120} height={120} className="w-auto h-8 lg:h-10 brightness-110" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-2">
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/" className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/20 hover:text-white text-gray-300 font-medium transition-all duration-300 rounded-lg px-4 py-2"
                                    )}>
                                        {content.home}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/Members" className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/20 hover:text-white text-gray-300 font-medium transition-all duration-300 rounded-lg px-4 py-2"
                                    )}>
                                        {content.members}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/Events" className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/20 hover:text-white text-gray-300 font-medium transition-all duration-300 rounded-lg px-4 py-2"
                                    )}>
                                        {content.events}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/Sponsors" className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/20 hover:text-white text-gray-300 font-medium transition-all duration-300 rounded-lg px-4 py-2"
                                    )}>
                                        {content.sponsors}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/Contact" className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/20 hover:text-white text-gray-300 font-medium transition-all duration-300 rounded-lg px-4 py-2"
                                    )}>
                                        {content.contact}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Language Select & Mobile Menu */}
                    <div className="flex items-center gap-2">
                        {/* Language Toggle Button */}
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                            className="flex items-center gap-1.5 px-3 h-7 text-xs bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium"
                        >

                            {language.toUpperCase()}
                            <RiGlobalLine className="h-3 w-3" />
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={handleOpen}
                                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors duration-200"
                            >
                                {open ? (
                                    <RiCloseFill className="h-4 w-4 text-white" />
                                ) : (
                                    <RiMenu4Fill className="h-4 w-4 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {open && (
                <div className="lg:hidden absolute top-full left-0 right-0 mt-1 bg-black/70 backdrop-blur-md border border-white/30 rounded-xl shadow-xl overflow-hidden">
                    <div className={`${inter.className} flex flex-col py-2`}>
                        <Link href="/" onClick={handleOpen}>
                            <div className="px-4 py-2 hover:bg-white/10 hover:text-white text-gray-300 transition-all duration-200 text-sm">
                                {content.home}
                            </div>
                        </Link>

                        <Link href="/Members" onClick={handleOpen}>
                            <div className="px-4 py-2 hover:bg-white/10 hover:text-white text-gray-300 transition-all duration-200 text-sm">
                                {content.members}
                            </div>
                        </Link>

                        <Link href="/Events" onClick={handleOpen}>
                            <div className="px-4 py-2 hover:bg-white/10 hover:text-white text-gray-300 transition-all duration-200 text-sm">
                                {content.events}
                            </div>
                        </Link>

                        <Link href="/Sponsors" onClick={handleOpen}>
                            <div className="px-4 py-2 hover:bg-white/10 hover:text-white text-gray-300 transition-all duration-200 text-sm">
                                {content.sponsors}
                            </div>
                        </Link>

                        <Link href="/Contact" onClick={handleOpen}>
                            <div className="px-4 py-2 hover:bg-white/10 hover:text-white text-gray-300 transition-all duration-200 text-sm">
                                {content.contact}
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;