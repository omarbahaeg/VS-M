// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
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
          "M2.5 5a.625.625 0 01.625-.625h13.75a.625.625 0 110 1.25H3.125A.625.625 0 012.5 5zm.625 3.75h10a.625.625 0 100-1.25h-10a.625.625 0 000 1.25zm13.75 1.875H3.125a.625.625 0 100 1.25h13.75a.624.624 0 100-1.25zm-3.75 3.125h-10a.625.625 0 100 1.25h10a.624.624 0 100-1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
