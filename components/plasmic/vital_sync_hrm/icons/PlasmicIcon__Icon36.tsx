// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon36Icon(props: Icon36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M4 5L0 0h8L4 5z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Icon36Icon;
/* prettier-ignore-end */
