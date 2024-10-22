// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaperclipIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaperclipIcon(props: PaperclipIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.835 1.79c-.597 0-1.17.238-1.592.66L3.35 9.343a3.753 3.753 0 005.307 5.307l6.893-6.893a.75.75 0 111.06 1.06L9.718 15.71A5.252 5.252 0 112.29 8.282L9.182 1.39a3.752 3.752 0 115.306 5.305l-6.9 6.893a2.25 2.25 0 11-3.183-3.183l6.368-6.36a.75.75 0 111.06 1.06l-6.368 6.36a.752.752 0 001.062 1.062l6.9-6.892a2.253 2.253 0 00-1.592-3.844z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PaperclipIcon;
/* prettier-ignore-end */
