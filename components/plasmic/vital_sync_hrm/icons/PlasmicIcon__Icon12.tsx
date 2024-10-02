// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
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
          "M20.25 6.75h-7.94L9.75 4.19a1.487 1.487 0 00-1.06-.44H3.75a1.5 1.5 0 00-1.5 1.5v13.558a1.444 1.444 0 001.442 1.442h16.641a1.419 1.419 0 001.417-1.417V8.25a1.5 1.5 0 00-1.5-1.5zm-16.5-1.5h4.94l1.5 1.5H3.75v-1.5zm16.5 13.5H3.75V8.25h16.5v10.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
