// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon37Icon(props: Icon37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
          "M12 6A6 6 0 110 6a6 6 0 0112 0zM4.702 4.657h2.122v4.52a.792.792 0 01-1.584 0V6.062h-.538a.702.702 0 010-1.405zm.308-1.725c0-.124.022-.24.066-.348a.901.901 0 011.734.348.916.916 0 01-.071.354.917.917 0 01-.478.476.857.857 0 01-.346.07.967.967 0 01-.361-.07.92.92 0 01-.478-.476.955.955 0 01-.066-.354z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon37Icon;
/* prettier-ignore-end */
