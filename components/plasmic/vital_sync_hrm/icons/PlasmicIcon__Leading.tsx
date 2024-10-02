// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeadingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeadingIcon(props: LeadingIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 112 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M63.833 0l-8 8-8-8h16z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default LeadingIcon;
/* prettier-ignore-end */
