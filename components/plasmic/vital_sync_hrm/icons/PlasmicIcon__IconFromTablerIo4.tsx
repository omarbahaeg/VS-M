// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFromTablerIo4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFromTablerIo4Icon(props: IconFromTablerIo4IconProps) {
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
          "M8 11.833l-4.115 2.164.786-4.582L1.338 6.17l4.6-.667 2.057-4.168 2.058 4.168 4.6.667-3.334 3.245.786 4.582L8 11.833z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.25"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconFromTablerIo4Icon;
/* prettier-ignore-end */
