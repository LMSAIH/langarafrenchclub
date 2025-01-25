"use client";

import { useState, useEffect } from "react";

const Footer = () => {

    const [year, setYear] = useState(0);


    useEffect(() => {
        const currentYear: number = new Date().getFullYear();
        setYear(currentYear);
    }, [])

    return (
        <footer className="bg-grat-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-black">&copy; {year} Club Français de Langara. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;