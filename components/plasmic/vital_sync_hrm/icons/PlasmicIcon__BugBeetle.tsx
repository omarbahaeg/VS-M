// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BugBeetleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BugBeetleIcon(props: BugBeetleIconProps) {
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
          "M13 9h1a.5.5 0 000-1h-1V7h1a.5.5 0 000-1h-1.025a4.985 4.985 0 00-1.34-2.928l1.219-1.218a.5.5 0 00-.708-.708l-1.268 1.269a4.984 4.984 0 00-5.756 0L3.854 1.146a.5.5 0 00-.708.708l1.219 1.218A4.98 4.98 0 003.025 6H2a.5.5 0 100 1h1v1H2a.5.5 0 100 1h1v.5c0 .169.009.336.025.5H2a.5.5 0 000 1h1.23a5 5 0 009.54 0H14a.5.5 0 000-1h-1.025A5.15 5.15 0 0013 9.5V9zM8 2.5A4.004 4.004 0 0111.967 6H4.03A4.004 4.004 0 018 2.5zm.5 10.967V8.5a.5.5 0 10-1 0v4.967A4.004 4.004 0 014 9.5V7h8v2.5a4.004 4.004 0 01-3.5 3.967z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BugBeetleIcon;
/* prettier-ignore-end */
