"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500"],
});



const Nav = () => {

    const [open, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

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
                <div className="hambNav sm:hidden">
                    <RiMenu4Fill onClick={handleOpen} color={open ? "red" : "black"} />
                </div>

                <div className="computerNavigation hidden sm:block">
                    <div className="computerLinkContainer">
                        <Link href="/Home"> Home </Link>
                        <Link href="/Members"> Members </Link>
                        <Link href="/Events"> Events </Link>
                        <Link href="/Sponsors"> Sponsors </Link>
                        <Link href="/Contact"> Contact </Link>
                    </div>
                </div>
            </div>
            <div className={`mobileNavigation ${open ? "openNav" : "closedNav"} `} >
                <div className={`mobileLinkContainer ${inter.className}`}>
                    <Link href="/Home"> Home </Link>
                    <Link href="/Members"> Members </Link>
                    <Link href="/Events"> Events </Link>
                    <Link href="/Sponsors"> Sponsors </Link>
                    <Link href="/Contact"> Contact </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;