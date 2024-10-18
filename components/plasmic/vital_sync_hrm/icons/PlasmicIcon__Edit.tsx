// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EditIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EditIcon(props: EditIconProps) {
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
          "M13.183 5.881c-.4.4-.6.6-.848.6-.249 0-.449-.2-.849-.6l-1.365-1.365c-.4-.4-.6-.6-.6-.848 0-.249.2-.449.6-.849l.217-.217c.4-.4.6-.6.848-.6.249 0 .449.2.85.6L13.4 3.967c.4.4.6.6.6.849s-.2.449-.6.849l-.217.216zM3.2 14.002c-.566 0-.848 0-1.024-.175C2 13.65 2 13.368 2 12.802v-1.365c0-.245 0-.367.046-.478.045-.11.132-.197.306-.37l5.306-5.307c.4-.4.6-.6.849-.6s.449.2.849.6l1.364 1.365c.4.4.6.6.6.848 0 .249-.2.449-.6.849l-5.306 5.307c-.174.173-.26.26-.37.306-.111.045-.234.045-.479.045H3.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EditIcon;
/* prettier-ignore-end */
