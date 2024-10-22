// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Search2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Search2Icon(props: Search2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M8.25 3a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM1.5 8.25a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.957 11.957a.75.75 0 011.06 0l3.263 3.263a.75.75 0 11-1.06 1.06l-3.263-3.262a.75.75 0 010-1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Search2Icon;
/* prettier-ignore-end */
