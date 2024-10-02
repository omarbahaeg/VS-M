// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon10Icon(props: Icon10IconProps) {
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
          "M20.25 4.5H3.75A1.5 1.5 0 002.25 6v15a1.485 1.485 0 00.867 1.36 1.49 1.49 0 001.606-.224L7.734 19.5H20.25a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5zm0 13.5H7.734a1.5 1.5 0 00-.965.352l-.011.01L3.75 21V6h16.5v12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
