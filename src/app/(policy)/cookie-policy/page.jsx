import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
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

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("cookie-policy", locale);
  const pageTitle = `${page.title} | Brandedify`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: "",
    },
  };
}

const CookiePolicy = async () => {
  const page = await getPage("cookie-policy");
  return (
    <>
      <section className="policy">
        <div className="_container">
          <div className="policy__body">
          <div className="section-title">
              <div className="label">
                <img src="/images/lightning.svg" />
                <span>Updated On {page.date}</span>
              </div>
              <h1>{page.title}</h1>
            </div>
            <article
              dangerouslySetInnerHTML={{ __html: page.body }}
              className="policy__content"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
