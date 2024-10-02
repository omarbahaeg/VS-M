// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserIcon(props: UserIconProps) {
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
          "M14.432 13.25c-.951-1.646-2.418-2.826-4.13-3.385a4.5 4.5 0 10-4.604 0c-1.712.559-3.179 1.739-4.13 3.385a.5.5 0 10.865.5C3.611 11.715 5.692 10.5 8 10.5c2.308 0 4.39 1.215 5.567 3.25a.499.499 0 10.865-.5zM4.5 6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UserIcon;
/* prettier-ignore-end */
