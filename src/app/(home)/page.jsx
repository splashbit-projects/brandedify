import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import HomeSolutions from "./_components/HomeSolutions";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <GetStarted />
    </>
  );
}
