// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRiseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRiseIcon(props: ArrowRiseIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.455 5.608L14 4l-1.38 5.606-1.722-1.653-2.777 2.893a.5.5 0 01-.722 0L5.36 8.722l-3 3.124a.5.5 0 01-.72-.692L5 7.654a.5.5 0 01.72 0l2.04 2.124 2.417-2.517-1.722-1.653z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRiseIcon;
/* prettier-ignore-end */
