// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DataIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DataIcon(props: DataIconProps) {
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
          "M1.5 8a1 1 0 011-1h1a1 1 0 011 1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V8zm5-6a1 1 0 011-1h1a1 1 0 011 1v12a1 1 0 01-1 1h-1a1 1 0 01-1-1V2zm5 4a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DataIcon;
/* prettier-ignore-end */
