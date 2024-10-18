// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon38Icon(props: Icon38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      className={classNames("plasmic-default__svg", className, "icon")}
      viewBox={"0 0 1024 1024"}
      xmlns={"http://www.w3.org/2000/svg"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#333"}
        d={
          "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"
        }
      ></path>
    </svg>
  );
}

export default Icon38Icon;
/* prettier-ignore-end */
