// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BroadcastIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BroadcastIcon(props: BroadcastIconProps) {
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
          "M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.607.446a5.002 5.002 0 01-.88 1.388.5.5 0 01-.745-.667 3.997 3.997 0 000-5.333.5.5 0 11.745-.667 5.005 5.005 0 01.88 5.28zM4.313 6.443a4 4 0 00.703 4.224.5.5 0 01-.745.667 4.996 4.996 0 010-6.667.5.5 0 01.747.667 3.986 3.986 0 00-.705 1.11zM15.5 8a7.474 7.474 0 01-2.143 5.25.501.501 0 01-.826-.537.5.5 0 01.112-.163 6.494 6.494 0 000-9.098.5.5 0 01.714-.702A7.474 7.474 0 0115.5 8zM3.357 12.549a.5.5 0 11-.714.701 7.492 7.492 0 010-10.5.5.5 0 11.714.7 6.494 6.494 0 000 9.098z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BroadcastIcon;
/* prettier-ignore-end */
