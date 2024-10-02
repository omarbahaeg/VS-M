// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.649 19.875c-1.428-2.468-3.628-4.238-6.196-5.078a6.75 6.75 0 10-6.906 0c-2.568.839-4.768 2.609-6.196 5.078a.75.75 0 101.299.75C5.416 17.573 8.538 15.75 12 15.75c3.462 0 6.584 1.823 8.35 4.875a.75.75 0 101.299-.75zM6.75 9a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
