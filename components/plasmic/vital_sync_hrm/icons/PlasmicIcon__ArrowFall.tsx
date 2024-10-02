// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowFallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowFallIcon(props: ArrowFallIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M14.346 3.64a.5.5 0 01.015.706L11 7.846a.5.5 0 01-.722 0L8.24 5.722 5.823 8.239l1.722 1.653L2 11.5l1.38-5.606 1.722 1.653 2.777-2.893a.5.5 0 01.722 0l2.039 2.124 3-3.124a.5.5 0 01.706-.015z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowFallIcon;
/* prettier-ignore-end */
