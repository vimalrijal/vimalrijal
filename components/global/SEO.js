import React from "react";
import Head from "next/head";

const SEO = ({ metaTitle, metaDescription, children, iconLink }) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta title={metaTitle} />
      <meta name="description" content={metaDescription} />
      <link rel="icon" href={iconLink ? iconLink : ""} />
      {children}
    </Head>
  );
};

export default SEO;
