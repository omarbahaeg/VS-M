// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DatabaseExportSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DatabaseExportSvgIcon(props: DatabaseExportSvgIconProps) {
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
        "icon icon-tabler icons-tabler-outline icon-tabler-database-export"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <path
        d={"M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3"}
      ></path>

      <path
        d={"M4 6v6c0 1.657 3.582 3 8 3 1.118 0 2.183-.086 3.15-.241M20 12V6"}
      ></path>

      <path
        d={
          "M4 12v6c0 1.657 3.582 3 8 3 .157 0 .312-.002.466-.005M16 19h6m-3-3l3 3-3 3"
        }
      ></path>
    </svg>
  );
}

export default DatabaseExportSvgIcon;
/* prettier-ignore-end */
