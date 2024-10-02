// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon7Icon(props: Icon7IconProps) {
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
          "M19.5 3.75h-15A1.5 1.5 0 003 5.25v5.51c0 8.402 7.108 11.189 8.531 11.662.304.104.634.104.938 0C13.894 21.95 21 19.162 21 10.761V5.25a1.5 1.5 0 00-1.5-1.5zm0 7.012c0 7.351-6.22 9.808-7.5 10.235-1.268-.423-7.5-2.877-7.5-10.235V5.25h15v5.512zM7.72 13.28a.75.75 0 111.06-1.062l1.72 1.72 4.72-4.72a.751.751 0 011.06 1.062l-5.25 5.25a.747.747 0 01-1.06 0l-2.25-2.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
