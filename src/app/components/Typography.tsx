import { Poppins, Inter } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const H1 = ({ children, className = "" }: TypographyProps) => (
  <h1 className={`${poppins.className} text-4xl md:text-5xl lg:text-6xl font-extrabold ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = "" }: TypographyProps) => (
  <h2 className={`${poppins.className} text-3xl md:text-4xl 4xl:text-5xl font-bold ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = "" }: TypographyProps) => (
  <h3 className={`${poppins.className} text-xl md:text-2xl font-semibold ${className}`}>
    {children}
  </h3>
);

export const P = ({ children, className = "" }: TypographyProps) => (
  <p className={`${inter.className} text-base md:text-lg leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Span = ({ children, className = "" }: TypographyProps) => (
  <span className={`${inter.className} ${className}`}>
    {children}
  </span>
);
