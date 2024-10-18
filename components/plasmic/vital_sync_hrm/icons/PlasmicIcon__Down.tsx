// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownIcon(props: DownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.03 6.47a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l2.5-2.5a.75.75 0 10-1.06-1.06L8 8.44 6.03 6.47z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15 8A7 7 0 111 8a7 7 0 0114 0zm-1.5 0a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DownIcon;
/* prettier-ignore-end */
