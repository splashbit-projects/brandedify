import "@/styles/resources.scss";
import { getPost, getSlugs } from "@/utils/blogUtils";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import GetStarted from "@/components/GetStarted";

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

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const { slug, locale } = awaitedParams;
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      images: "https://brandedify.com/images/meta.png",
    },
  };
}

const PostInner = async ({ params }) => {
  const awaitedParams = await params;
  const { slug, locale } = awaitedParams;
  const post = await getPost(slug, locale);
  const category = post.category.replaceAll("-", " ");
  return (
    <>
      <section className="resource-inner">
        <div className="_container">
          <div className="resource-inner__top">
            <Link href="/resources">
              <img src="/images/resources/arrow-left.svg" />
              Back
            </Link>
          </div>
          <div className="resource-inner__body">
            <div className="section-title">
              <div className="label">
                <img src="/images/lightning.svg" />
                <span>{category}</span>
              </div>
              <h1>{post.title}</h1>
            </div>
            <div className="post-content">
              <p>{post.short_description}</p>
              <Image
                alt={post.title}
                src={`/images/resources/${post.thumbnail}`}
                width={590}
                height={300}
              />
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
          </div>
        </div>
      </section>
      {slug == "the-future-of-seo-key-trends-to-watch-in-2025" && (
        <GetStarted
          title={"Ready to Grow with Us?"}
          text="Let's partner to achieve your business goals. Reach out today, and let's create a personalized <br>strategy that drives measurable results and lasting success."
          buttonText={"Get started"}
          link="/request-form"
        />
      )}
      {slug == "social-media-marketing-in-a-post-cookie-world" && (
        <GetStarted
          title={"Ready to future-proof your <br>campaigns? Let's talk!"}
          text=" "
          buttonText={"Contact Us for a Free Strategy Session"}
          link="/request-form"
        />
      )}
      {slug ==
        "10-proven-strategies-to-boost-your-websites-conversion-rate" && (
        <GetStarted
          title={"Need Help Optimizing Your Website?"}
          text="Let our experts take your website to the next level."
          buttonText={"Contact Us for a Free Consultation"}
          link="/request-form"
        />
      )}
      {slug == "how-to-craft-high-performing-ppc-campaigns-on-a-budget" && (
        <GetStarted link="/request-form" />
      )}
      {slug ==
        "the-power-of-personalization-how-to-engage-customers-with-tailored-campaigns" && (
        <GetStarted
          title={"Ready to Personalize Your <br>Campaigns?"}
          text="Our experts can help you craft customized strategies to elevate your brand and deliver results."
          buttonText={"Contact Us for Personalized Solutions"}
          link="/request-form"
        />
      )}
      {slug == "5-steps-to-building-a-strong-brand-identity-online" && (
        <GetStarted
          title={"Need Help Crafting Your Brand <br>Identity?"}
          text="Let our experts guide you through every step of the process to ensure your brand makes a <br>powerful impact online."
          buttonText={"Contact Us to Build Your Brand"}
          link="/request-form"
        />
      )}
    </>
  );
};

export default PostInner;
