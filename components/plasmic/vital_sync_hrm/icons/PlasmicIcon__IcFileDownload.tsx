// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcFileDownloadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcFileDownloadIcon(props: IcFileDownloadIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcFileDownloadIcon;
/* prettier-ignore-end */
