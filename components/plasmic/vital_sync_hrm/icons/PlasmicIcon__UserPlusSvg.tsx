// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserPlusSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserPlusSvgIcon(props: UserPlusSvgIconProps) {
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
        "icon icon-tabler icons-tabler-outline icon-tabler-user-plus"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={"M8 7a4 4 0 108 0 4 4 0 00-8 0m8 12h6m-3-3v6M6 21v-2a4 4 0 014-4h4"}
      ></path>
    </svg>
  );
}

export default UserPlusSvgIcon;
/* prettier-ignore-end */
