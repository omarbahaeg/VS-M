// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon49Icon(props: Icon49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icons-tabler-outline icon-tabler-wifi"
      )}
      viewBox={"0 0 24 24"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={
          "M12 18h.01m-2.838-2.828a4 4 0 015.656 0m-8.485-2.829a8 8 0 0111.314 0M3.515 9.515c4.686-4.687 12.284-4.687 17 0"
        }
      ></path>
    </svg>
  );
}

export default Icon49Icon;
/* prettier-ignore-end */
