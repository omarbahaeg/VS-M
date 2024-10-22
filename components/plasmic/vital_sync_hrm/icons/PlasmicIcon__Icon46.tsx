// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon46Icon(props: Icon46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icons-tabler-outline icon-tabler-brand-google-analytics"
      )}
      viewBox={"0 0 24 24"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={
          "M10 10.105A1.105 1.105 0 0111.105 9h1.79A1.105 1.105 0 0114 10.105v9.79A1.105 1.105 0 0112.895 21h-1.79A1.105 1.105 0 0110 19.895zm7-6A1.105 1.105 0 0118.105 3h1.79A1.105 1.105 0 0121 4.105v15.79A1.105 1.105 0 0119.895 21h-1.79A1.105 1.105 0 0117 19.895zM3 19a2 2 0 104 0 2 2 0 10-4 0"
        }
      ></path>
    </svg>
  );
}

export default Icon46Icon;
/* prettier-ignore-end */
