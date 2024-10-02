// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PencilBoltSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PencilBoltSvgIcon(props: PencilBoltSvgIconProps) {
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
        "icon icon-tabler icons-tabler-outline icon-tabler-pencil-bolt"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={
          "M4 20h4L18.5 9.5a2.828 2.828 0 10-4-4L4 16v4m9.5-13.5l4 4M19 16l-2 3h4l-2 3"
        }
      ></path>
    </svg>
  );
}

export default PencilBoltSvgIcon;
/* prettier-ignore-end */
