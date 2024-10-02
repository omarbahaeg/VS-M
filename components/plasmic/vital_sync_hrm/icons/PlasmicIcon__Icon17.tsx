// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.5 8.125a.625.625 0 11-1.25 0v-3.49l-5.182 5.182a.625.625 0 01-.884-.884l5.182-5.183h-3.491a.625.625 0 110-1.25h5a.625.625 0 01.625.625v5zM14.375 10a.624.624 0 00-.625.625v5.625h-10v-10h5.625a.625.625 0 000-1.25H3.75A1.25 1.25 0 002.5 6.25v10a1.25 1.25 0 001.25 1.25h10A1.25 1.25 0 0015 16.25v-5.625a.624.624 0 00-.625-.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */
