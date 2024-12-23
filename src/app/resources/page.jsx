import React from "react";
import "@/styles/resources.scss";
import GetStarted from "@/components/GetStarted";
import ResourcesHero from "./_components/ResourcesHero";
import ResourcesLoop from "./_components/ResourcesLoop";
import { getPosts } from "@/utils/blogUtils";

export const metadata = {
  title: "Brandedify Resources | Insights, Tips, and Industry Trends",
  description:
    "Contact Brandedify for personalized digital marketing solutions. You can reach us via email, phone, or our contact form.",
  openGraph: {
    title: "Brandedify Resources | Insights, Tips, and Industry Trends",
    description:
      "Contact Brandedify for personalized digital marketing solutions. You can reach us via email, phone, or our contact form.",
    //images: "",
  },
};

export async function generateStaticParams() {
  const slugs = await getSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

const Resources = async () => {
  const posts = await getPosts();
  return (
    <>
      <ResourcesHero />
      <ResourcesLoop posts={posts} />
      <GetStarted
        title={"Ready to Grow with Us?"}
        text="Let's partner to achieve your business goals. Reach out today, and let's create a personalized <br>strategy that drives measurable results and lasting success."
        buttonText={"Get started"}
        link="/request-form"
      />
    </>
  );
};

export default Resources;
