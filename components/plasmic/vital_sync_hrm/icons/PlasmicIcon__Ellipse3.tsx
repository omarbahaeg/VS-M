// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse3Icon(props: Ellipse3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 210 102"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.376 102C3.75 102-.037 98.243.353 93.634a99.845 99.845 0 017.616-30.668c5.262-12.375 12.973-23.62 22.695-33.09C40.386 20.402 51.928 12.89 64.63 7.763A107.099 107.099 0 01104.694 0a107.1 107.1 0 0140.065 7.764c12.702 5.126 24.244 12.64 33.965 22.111 9.722 9.472 17.434 20.716 22.695 33.091a99.833 99.833 0 017.617 30.668c.389 4.61-3.397 8.366-8.023 8.366-4.626 0-8.332-3.76-8.795-8.362a83.893 83.893 0 00-6.275-24.426c-4.419-10.396-10.897-19.84-19.063-27.797-8.167-7.956-17.861-14.267-28.531-18.573a89.968 89.968 0 00-33.655-6.522 89.964 89.964 0 00-33.654 6.522c-10.67 4.306-20.365 10.617-28.53 18.573-8.167 7.956-14.645 17.401-19.065 27.797a83.891 83.891 0 00-6.274 24.426C16.708 98.241 13 102 8.376 102z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse3Icon;
/* prettier-ignore-end */
