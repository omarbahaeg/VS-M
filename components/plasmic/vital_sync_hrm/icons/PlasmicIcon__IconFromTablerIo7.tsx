// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFromTablerIo7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFromTablerIo7Icon(props: IconFromTablerIo7IconProps) {
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
        d={
          "M2 13.333l.867-2.6c-1.55-2.291-.951-5.248 1.4-6.916 2.35-1.667 5.726-1.53 7.896.32 2.17 1.852 2.464 4.844.686 7.001-1.777 2.157-5.076 2.81-7.716 1.529L2 13.333z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.25"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconFromTablerIo7Icon;
/* prettier-ignore-end */
