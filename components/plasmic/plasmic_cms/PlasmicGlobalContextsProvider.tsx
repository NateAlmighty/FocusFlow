// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hjKYmYi6HMwK6TRyk7ew5R

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms";

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps,
) {
  const { children, cmsCredentialsProviderProps } = props;

  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId!
          : undefined
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken!
          : undefined
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host!
          : "https://data.plasmic.app"
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale!
          : undefined
      }
    >
      {children}
    </CmsCredentialsProvider>
  );
}
