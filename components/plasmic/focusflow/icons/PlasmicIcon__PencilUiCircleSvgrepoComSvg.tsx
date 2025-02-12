// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PencilUiCircleSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PencilUiCircleSvgrepoComSvgIcon(
  props: PencilUiCircleSvgrepoComSvgIconProps,
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.01 9.01 0 01-9 9zm3-14l2 2-7 7-3 1 1-3z"
        }
      ></path>
    </svg>
  );
}

export default PencilUiCircleSvgrepoComSvgIcon;
/* prettier-ignore-end */
