// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FluentFlashFlow16FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FluentFlashFlow16FilledIcon(
  props: FluentFlashFlow16FilledIconProps
) {
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
          "M7.37 2.546a1.5 1.5 0 011.438-1.073h6.609a1.5 1.5 0 011.404 2.028l-1.49 3.972h3.046a1.125 1.125 0 01.879 1.827l-1.898 2.383-.345-.69a2.243 2.243 0 00-.165-.276 3.863 3.863 0 00-2.527-1.654l-.027-.005a3.75 3.75 0 10-.715 5.13l.158.319.014.024.517 1.034-4.923 6.185c-1.281 1.608-3.843.28-3.267-1.694l1.92-6.583H5.625a1.124 1.124 0 01-1.08-1.446L7.37 2.546zm5.997 7.939a2.25 2.25 0 10.01 1.5c.141-.003.265.002.402.027a.853.853 0 01.576.375l1.474 2.946a2.36 2.36 0 001.62 1.125c.223.042.464.054.684.054a2.25 2.25 0 10-.01-1.5 1.99 1.99 0 01-.402-.029.852.852 0 01-.576-.373l-1.474-2.947a2.36 2.36 0 00-1.62-1.126 3.898 3.898 0 00-.684-.052zm-2.117.015a.75.75 0 110 1.5.75.75 0 010-1.5zm9 4.5a.75.75 0 110 1.5.75.75 0 010-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FluentFlashFlow16FilledIcon;
/* prettier-ignore-end */
