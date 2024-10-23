// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon55Icon(props: Icon55IconProps) {
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
        "icon icon-tabler icons-tabler-outline icon-tabler-chart-area-line"
      )}
      viewBox={"0 0 24 24"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path d={"M4 19l4-6 4 2 4-5 4 4v5H4m0-7l3-4 4 2 5-6 4 4"}></path>
    </svg>
  );
}

export default Icon55Icon;
/* prettier-ignore-end */
