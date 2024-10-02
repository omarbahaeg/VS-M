// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse5Icon(props: Ellipse5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 186 102"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.376 102C3.75 102-.037 98.243.353 93.634c1.568-18.57 8.336-36.427 19.642-51.588C32.99 24.619 51.315 11.648 72.342 4.992a107.327 107.327 0 0164.705 0c18.278 5.786 34.515 16.344 46.984 30.453 3.088 3.495 2.226 8.822-1.581 11.516-3.676 2.602-8.727 1.766-11.746-1.575-10.388-11.497-23.787-20.11-38.834-24.873a90.153 90.153 0 00-54.352 0C59.856 26.105 44.463 37 33.547 51.64c-9.226 12.371-14.854 26.88-16.376 42C16.708 98.24 13 102 8.376 102z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse5Icon;
/* prettier-ignore-end */
