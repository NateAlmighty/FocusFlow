import * as React from "react";
import {
  PlasmicComponent,
  extractPlasmicQueryData,
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import type { GetStaticProps } from "next";

import Error from "next/error";
import { useRouter } from "next/router";
import { PLASMIC } from "@/plasmic-init";

// Removed duplicate PlasmicLoaderPage function

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
if (!plasmicData) {
  // non-Plasmic catch-all
  return { props: {} };
}
const pageMeta = plasmicData.entryCompMetas[0];
// Cache the necessary data fetched for the page
const queryCache = await extractPlasmicQueryData(
  <PlasmicRootProvider
    loader={PLASMIC}
    prefetchedData={plasmicData}
    pageRoute={pageMeta.path}
    pageParams={pageMeta.params}
  >
    <PlasmicComponent component={pageMeta.displayName} />
  </PlasmicRootProvider>
);
// Use revalidate if you want incremental static regeneration
return { props: { plasmicData, queryCache }, revalidate: 60 };
};

/**
 * Actually render the page!
 */
export default function CatchallPage(props: { plasmicData?: ComponentRenderData; queryCache?: Record<string, any> }) {
  const { plasmicData, queryCache } = props;
  const router = useRouter();
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    // Pass in the data fetched in getStaticProps as prefetchedData
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      {
      // pageMeta.displayName contains the name of the component you fetched.
      }
      <PlasmicComponent component={pageMeta.displayName} />
      {
      // Add your dynamic data rendering logic here
      }
      <div>
      <h1>Dynamic Data</h1>
      <p>{router.query.dynamicData}</p>
      </div>
    </PlasmicRootProvider>
  );
}
export async function getStaticPaths() {
  const pageModules = await PLASMIC.fetchPages();
  const paths = pageModules.map((mod) => ({
    params: { catchall: mod.path.substring(1).split("/") },
  }));
  return { paths, fallback: "blocking" };
}