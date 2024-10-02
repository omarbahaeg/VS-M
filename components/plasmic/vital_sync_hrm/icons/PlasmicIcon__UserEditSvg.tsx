// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserEditSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserEditSvgIcon(props: UserEditSvgIconProps) {
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
        "icon icon-tabler icons-tabler-outline icon-tabler-user-edit"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={
          "M8 7a4 4 0 108 0 4 4 0 00-8 0M6 21v-2a4 4 0 014-4h3.5m4.92.61a2.1 2.1 0 012.97 2.97L18 22h-3v-3l3.42-3.39z"
        }
      ></path>
    </svg>
  );
}

export default UserEditSvgIcon;
/* prettier-ignore-end */
