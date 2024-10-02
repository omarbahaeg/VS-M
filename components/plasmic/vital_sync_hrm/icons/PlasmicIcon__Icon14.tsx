// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
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
          "M10.992 14.805a5.625 5.625 0 10-6.234 0A8.984 8.984 0 00.33 18.34a.75.75 0 101.256.82 7.5 7.5 0 0112.576 0 .75.75 0 001.256-.82 8.985 8.985 0 00-4.427-3.535zm-7.242-4.68a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zm19.7 9.253a.75.75 0 01-1.037-.218 7.485 7.485 0 00-6.288-3.41.75.75 0 110-1.5 4.125 4.125 0 10-1.532-7.957.75.75 0 11-.557-1.392 5.625 5.625 0 015.206 9.904 8.985 8.985 0 014.427 3.535.75.75 0 01-.218 1.038z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
