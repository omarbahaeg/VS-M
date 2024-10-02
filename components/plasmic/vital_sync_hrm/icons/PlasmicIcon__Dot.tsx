// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotIcon(props: DotIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.75 4a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DotIcon;
/* prettier-ignore-end */
