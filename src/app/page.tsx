import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export default function Home() {
  return (
    <div>
      <div className="homeIntroductionContent">

        <div className="mainHeaderImageContainer">
          <div className="imageOverlay">
            <Image src="/langara_image.jpg" alt="langara college image" width={500} height={500} />
          </div>
        </div>
        <h1 className={`mainHeader ${inter.className}`}> The Langara French Club embraces you.</h1>
      </div>
    </div>
  );
}
