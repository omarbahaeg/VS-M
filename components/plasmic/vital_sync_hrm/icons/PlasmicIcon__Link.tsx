// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkIcon(props: LinkIconProps) {
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
          "M8 1.75A.75.75 0 018.75 1h5.5a.75.75 0 01.75.75v5.503a.75.75 0 11-1.5 0V3.561L8.53 8.53a.75.75 0 01-1.06-1.06l4.97-4.97H8.75A.75.75 0 018 1.75z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.25 2.5a.75.75 0 010 1.5H3a.5.5 0 00-.5.5V13a.5.5 0 00.5.5h8.5a.5.5 0 00.5-.5V9.75a.75.75 0 011.5 0V13a2 2 0 01-2 2H3a2 2 0 01-2-2V4.5a2 2 0 012-2h3.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LinkIcon;
/* prettier-ignore-end */
