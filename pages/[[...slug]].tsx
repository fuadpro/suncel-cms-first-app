//
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { PageRender, getSuncelStaticProps, getSuncelStaticPaths } from "@suncel/nextjs";
import { ContentWrapper } from "@/components/layouts/contentWrapper";
import { suncelContextConfig } from "@/suncel/suncelContextConfig";
import { Footer } from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { getGlobal } from "@suncel/nextjs/api";


export default function Slug(props: any) {
  if (!props?.suncel) return <div>Cannot load the page</div>;

  return <PageRender suncelProps={props?.suncel} />;
}

Slug.getLayout = function getLayout(page: ReactElement) {
  console.log(page?.props?.footer)
  return (
    <ContentWrapper>
      <Header />
      {page}
      <Footer menu={page?.props?.footer?.links} text={page?.props?.footer}/>
    </ContentWrapper>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const suncelProps = await getSuncelStaticProps(ctx, {
    context: suncelContextConfig,
  });

  const { data: footer } = await getGlobal('6570ec20fd6d83399e83e66e', { language:'en'} )

  const { data: header } = await getGlobal('6570ec4afd6d83399e83e6ac', { language:'en'} )

  console.log(footer?.contents)

  if (!suncelProps) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
  // Return the page props
  return {
    props: {
      // Pass the page props related to Suncel into the suncel prop
      suncel: suncelProps,
      footer: footer?.contents?.[0].content|| [],
      header: header?.contents?.[0].content|| [],
    },
    revalidate: 10,
  };
  
};

export const getStaticPaths: GetStaticPaths = async () => {
  const formattedPaths = await getSuncelStaticPaths();

  return {
    paths: formattedPaths,
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    fallback: "blocking",
  };
};
