import Image from "next/image";
import "@/styles/home.scss";
import HomeHero from "./_components/HomeHero";
import HomeSolutions from "./_components/HomeSolutions";
import GetStarted from "@/components/GetStarted";
import HomeDetails from "./_components/HomeDetails";
import HomePartners from "./_components/HomePartners";
import HomeAdvantages from "./_components/HomeAdvantages";
import HomeStories from "./_components/HomeStories";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <HomeAdvantages />
      <HomePartners />
      <HomeDetails />
      <HomeStories />
      <GetStarted />
    </>
  );
}
