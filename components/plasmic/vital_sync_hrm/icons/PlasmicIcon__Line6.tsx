// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line6Icon(props: Line6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 559 162"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 160.617l34.913-44.251a20 20 0 0116.628-7.59l36.706 1.702 41.85 3.746a19.999 19.999 0 0014.353-4.364l52.92-42.763c5.03-4.064 12.536-2.358 15.315 3.481l31.661 66.527a20.002 20.002 0 0016.301 11.328l42.891 3.784a19.997 19.997 0 0018.397-8.826l22.175-33.251a20 20 0 0124.018-7.492l22.48 8.923c11.383 4.519 24.117-2.162 26.868-14.096l10.227-44.358a20 20 0 0117.702-15.426l44.885-4.027a20 20 0 007.42-2.166L557.518 1"
        }
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeDasharray={"2 4"}
      ></path>
    </svg>
  );
}

export default Line6Icon;
/* prettier-ignore-end */
