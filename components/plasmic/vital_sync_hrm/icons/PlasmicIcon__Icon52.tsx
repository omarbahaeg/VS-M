// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon52Icon(props: Icon52IconProps) {
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
        "icon icon-tabler icons-tabler-outline icon-tabler-users-group"
      )}
      viewBox={"0 0 24 24"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={
          "M10 13a2 2 0 104 0 2 2 0 00-4 0m-2 8v-1a2 2 0 012-2h4a2 2 0 012 2v1M15 5a2 2 0 104 0 2 2 0 00-4 0m2 5h2a2 2 0 012 2v1M5 5a2 2 0 104 0 2 2 0 00-4 0m-2 8v-1a2 2 0 012-2h2"
        }
      ></path>
    </svg>
  );
}

export default Icon52Icon;
/* prettier-ignore-end */
