// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse4Icon(props: Ellipse4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 70"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.376 69.824c-4.626 0-8.413-3.757-8.023-8.366C2.286 38.558 12.116 16.869 28.375 0l12.212 11.172c-13.342 13.842-21.53 31.547-23.416 50.29-.463 4.602-4.17 8.362-8.795 8.362z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse4Icon;
/* prettier-ignore-end */
