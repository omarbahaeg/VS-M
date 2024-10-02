// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Leading2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Leading2Icon(props: Leading2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 17.667l8 8-8 8v-16z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Leading2Icon;
/* prettier-ignore-end */
