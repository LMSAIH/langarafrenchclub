
import type { Metadata } from "next";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export const metadata = {
  title: "Langara French Club | Vancouver, BC",
  description: "The Langara French Club offers a welcoming environment for French learners at all levels, providing workshops and outings that immerse students in French culture, cuisine, and language. Join us to enhance your French skills and connect with fellow enthusiasts.",
  keywords: [
    "Langara French Club",
    "French language",
    "French culture",
    "language workshops",
    "cultural events",
    "Vancouver",
    "student club",
    "French cuisine",
    "French movies",
    "language exchange"
  ],
  openGraph: {
    title: "Langara French Club | Vancouver, BC",
    description: "Experience French language and culture with the Langara French Club. Participate in workshops, movie nights, and culinary events to enrich your French learning journey.",
    url: "https://langarafr.com/LFC_LOGO.png",
    siteName: "Langara French Club",
    images: [
      {
        url: "https://langarafr.com/langara_image.jpg",
        width: 800,
        height: 600,
        alt: "Langara College",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider >
      <html lang="en">
        <body>
          <Nav />
          <div className="content mb-0 pb-0">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
