// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
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
          "M21.648 16.125a.75.75 0 01-.273 1.023l-9 5.25a.75.75 0 01-.756 0l-9-5.25a.75.75 0 01.756-1.296L12 20.882l8.625-5.03a.75.75 0 011.023.273zm-1.023-4.773L12 16.382l-8.625-5.03a.75.75 0 00-.75 1.296l9 5.25a.75.75 0 00.756 0l9-5.25a.75.75 0 10-.756-1.296zM2.25 7.5a.75.75 0 01.375-.648l9-5.25a.75.75 0 01.756 0l9 5.25a.75.75 0 010 1.296l-9 5.25a.75.75 0 01-.756 0l-9-5.25A.75.75 0 012.25 7.5zm2.239 0L12 11.882 19.511 7.5 12 3.118 4.489 7.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
