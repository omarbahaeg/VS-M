// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoIcon(props: InfoIconProps) {
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
          "M14 8A6 6 0 112 8a6 6 0 0112 0zM6.702 6.657h2.122v4.52a.792.792 0 11-1.584 0V8.062h-.538a.702.702 0 010-1.405zm.308-1.725c0-.124.022-.24.066-.348a.901.901 0 011.734.348.916.916 0 01-.071.354.917.917 0 01-.478.476.857.857 0 01-.346.07.967.967 0 01-.361-.07.92.92 0 01-.478-.476.955.955 0 01-.066-.354z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InfoIcon;
/* prettier-ignore-end */
