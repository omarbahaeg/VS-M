// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotesIcon(props: NotesIconProps) {
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
          "M12 1.75H4A2.25 2.25 0 001.75 4v8A2.25 2.25 0 004 14.25h6.248c.303 0 .596-.11.824-.31l2.751-2.407a1.25 1.25 0 00.427-.94V4A2.25 2.25 0 0012 1.75z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
      ></path>

      <path
        d={"M5.25 6.5h5.5m-5.5 3h3.5"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default NotesIcon;
/* prettier-ignore-end */
