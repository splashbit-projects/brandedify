import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";

const helvetica = localFont({
  src: [
    {
      path: "./fonts/Helvetica.woff",
      weight: "700",
      style: "normal",
      variable: "--font-helvetica",
    },
    {
      path: "./fonts/Helvetica-light.woff",
      weight: "400",
      style: "normal",
      variable: "--font-helvetica-light",
    },
  ],
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
      variable: "--font-satoshi",
    },
  ],
});

export const metadata = {
  title: "Brandedify | Innovative Digital Marketing Solutions for Your Brand",
  description:
    "Transform your business with Brandedify's cutting-edge digital marketing strategies tailored to amplify growth, engagement, and success.",
  openGraph: {
    title: "Brandedify | Innovative Digital Marketing Solutions for Your Brand",
    description:
      "Transform your business with Brandedify's cutting-edge digital marketing strategies tailored to amplify growth, engagement, and success.",
    images: "https://brandedify.com/images/meta.png",
  },
};

console.log(helvetica.variable); 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <GoogleAnalytics gaId="G-VQSRMHRSLW" />
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
