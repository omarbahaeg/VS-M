// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
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
          "M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zM6.945 18.516a6 6 0 0110.11 0 8.234 8.234 0 01-10.11 0zM9 11.25a3 3 0 116 0 3 3 0 01-6 0zm9.165 6.226a7.469 7.469 0 00-3.38-2.695 4.5 4.5 0 10-5.57 0 7.468 7.468 0 00-3.38 2.695 8.25 8.25 0 1112.33 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */
