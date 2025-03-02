"use client";

import { useState, useEffect } from "react";
import { BsInstagram, BsFacebook, BsDiscord, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
    const [year, setYear] = useState(0);

    useEffect(() => {
        const currentYear: number = new Date().getFullYear();
        setYear(currentYear);
    }, [])

    return (
        <footer className="bg-blue-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row wrap flex-wrap gap-20 justify-center mb-10">
                <Link 
                    href="https://www.instagram.com/leclubdefrancaislangara/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsInstagram className="hover:-translate-y-1 duration-300 size-10 4xl:size-20 text-pink-600" />
                </Link>
                <Link 
                    href="https://www.facebook.com/langara.french.club/" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsFacebook className="size-10 text-blue-400 hover:-translate-y-1 duration-300 4xl:size-20" />
                </Link>
                <Link 
                    href="https://discord.gg/9UQchagN43" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsDiscord className="size-10 text-white hover:-translate-y-1 duration-300 4xl:size-20" />
                </Link>
                <Link 
                    href="https://www.linkedin.com/company/langara-french-club/posts/?feedView=all" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin className="size-10 text-white hover:-translate-y-1 duration-300 4xl:size-20" />
                </Link>
            </div>
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-white 4xl:text-4xl">&copy; {year} Club Français de Langara. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;