// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinusSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinusSvgIcon(props: MinusSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 330 330"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M281.633 48.328C250.469 17.163 209.034 0 164.961 0 120.888 0 79.453 17.163 48.289 48.328c-64.333 64.334-64.333 169.011 0 233.345C79.453 312.837 120.888 330 164.962 330c44.073 0 85.507-17.163 116.671-48.328 31.165-31.164 48.328-72.599 48.328-116.672s-17.163-85.508-48.328-116.672zM260.42 260.46C234.922 285.957 201.021 300 164.962 300c-36.06 0-69.961-14.043-95.46-39.54-52.636-52.637-52.636-138.282 0-190.919C95 44.042 128.901 30 164.961 30s69.961 14.042 95.459 39.54c25.498 25.499 39.541 59.4 39.541 95.46s-14.043 69.961-39.541 95.46z"
        }
      ></path>

      <path
        d={
          "M254.961 150H74.962c-8.284 0-15 6.716-15 15s6.716 15 15 15h179.999c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        }
      ></path>
    </svg>
  );
}

export default MinusSvgIcon;
/* prettier-ignore-end */
