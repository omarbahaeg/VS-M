// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Iconsax2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Iconsax2Icon(props: Iconsax2IconProps) {
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
          "M16.14 2.96l-9.03 3c-6.07 2.03-6.07 5.34 0 7.36l2.68.89.89 2.68c2.02 6.07 5.34 6.07 7.36 0l3.01-9.02c1.34-4.05-.86-6.26-4.91-4.91zm.32 5.38l-3.8 3.82c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3.8-3.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Iconsax2Icon;
/* prettier-ignore-end */
