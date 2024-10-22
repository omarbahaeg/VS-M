// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Iconsax5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Iconsax5Icon(props: Iconsax5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20 3.333C10.817 3.333 3.333 10.817 3.333 20c0 9.183 7.484 16.667 16.667 16.667 9.183 0 16.667-7.484 16.667-16.667 0-9.183-7.484-16.667-16.667-16.667zm6.667 17.917H21.25v5.417a1.26 1.26 0 01-1.25 1.25 1.26 1.26 0 01-1.25-1.25V21.25h-5.417a1.26 1.26 0 01-1.25-1.25c0-.683.567-1.25 1.25-1.25h5.417v-5.417c0-.683.567-1.25 1.25-1.25s1.25.567 1.25 1.25v5.417h5.417c.683 0 1.25.567 1.25 1.25a1.26 1.26 0 01-1.25 1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Iconsax5Icon;
/* prettier-ignore-end */
