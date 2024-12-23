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
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const post = await getPost(slug, locale);

  return {
    title: post.seo_title,
    description: post.seo_description,
    openGraph: {
      title: post.seo_title,
      description: post.seo_description,
      //images: "",
    },
  };
}

const PostInner = async ({ params }) => {
  const awaitedParams = await params; // Await the params
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
      <GetStarted
        title={"Ready to Grow with Us?"}
        text="Let's partner to achieve your business goals. Reach out today, and let's create a personalized <br>strategy that drives measurable results and lasting success."
        buttonText={"Get started"}
        link="/request-form"
      />
    </>
  );
};

export default PostInner;
