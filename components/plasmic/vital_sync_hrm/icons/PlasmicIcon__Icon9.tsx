// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.25 5.25H16.5V4.5a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 4.5v.75H3.75a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5zM9 4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v.75H9V4.5zm11.25 2.25v3.9a17.257 17.257 0 01-16.5.001V6.75h16.5zm0 12H3.75v-6.409a18.772 18.772 0 0016.5 0v6.409zM9.75 10.5a.75.75 0 01.75-.75h3a.75.75 0 110 1.5h-3a.75.75 0 01-.75-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
