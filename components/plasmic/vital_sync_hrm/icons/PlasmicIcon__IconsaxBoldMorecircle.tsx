// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsaxBoldMorecircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsaxBoldMorecircleIcon(
  props: IconsaxBoldMorecircleIconProps
) {
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
          "M20 3.333C10.817 3.333 3.333 10.817 3.333 20c0 9.183 7.484 16.667 16.667 16.667 9.183 0 16.667-7.484 16.667-16.667 0-9.183-7.484-16.667-16.667-16.667zm-6.667 18.334A1.66 1.66 0 0111.667 20c0-.917.75-1.667 1.666-1.667.917 0 1.667.75 1.667 1.667a1.66 1.66 0 01-1.667 1.667zm6.667 0A1.66 1.66 0 0118.333 20c0-.917.75-1.667 1.667-1.667s1.667.75 1.667 1.667A1.66 1.66 0 0120 21.667zm6.667 0A1.66 1.66 0 0125 20c0-.917.75-1.667 1.667-1.667.916 0 1.666.75 1.666 1.667a1.66 1.66 0 01-1.666 1.667z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsaxBoldMorecircleIcon;
/* prettier-ignore-end */
