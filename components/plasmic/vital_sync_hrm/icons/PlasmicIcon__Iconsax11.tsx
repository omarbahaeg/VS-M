// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Iconsax11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Iconsax11Icon(props: Iconsax11IconProps) {
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
        d={"M12 15a3 3 0 100-6 3 3 0 000 6v0z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.9 1.9 0 01-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Iconsax11Icon;
/* prettier-ignore-end */
