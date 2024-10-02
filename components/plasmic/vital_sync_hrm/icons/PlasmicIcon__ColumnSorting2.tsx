// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColumnSorting2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ColumnSorting2Icon(props: ColumnSorting2IconProps) {
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
          "M8.39 13.512a.5.5 0 01-.78 0l-2.96-3.7A.5.5 0 015.04 9h5.92a.5.5 0 01.39.812l-2.96 3.7zm0-11.024a.5.5 0 00-.78 0l-2.96 3.7A.5.5 0 005.04 7h5.92a.5.5 0 00.39-.812l-2.96-3.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ColumnSorting2Icon;
/* prettier-ignore-end */
