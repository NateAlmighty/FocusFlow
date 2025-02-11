import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { PlasmicComponent, PlasmicRootProvider, initPlasmicLoader } from '@plasmicapp/loader-nextjs';

const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'wj2qAuEBWxMEsUxpANdi1b',  // Replace with your project ID
      token: 'Q1QcshdYrv5nhVThbK34N5nNHj9tXmP1LCUWjffbRHfmOdtRhsQehNanZ7eFvMcAjvJCDZvCYBDT7KA'  // Replace with your project token
    }
  ]
});

interface CatchallPageProps {
  plasmicData: any;
  pageMeta: any;
}

export default function CatchallPage({ plasmicData, pageMeta }: CatchallPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pageModules = await PLASMIC.fetchPages();
  const paths = pageModules.map((mod) => ({
    params: { catchall: mod.path.substring(1).split("/") },
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const catchall = Array.isArray(context.params?.catchall) ? context.params.catchall : [context.params?.catchall];
  const plasmicPath = '/' + catchall.join('/');
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

  if (!plasmicData) {
    return {
      notFound: true
    };
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  return {
    props: {
      plasmicData,
      pageMeta
    },
    revalidate: 60
  };
};