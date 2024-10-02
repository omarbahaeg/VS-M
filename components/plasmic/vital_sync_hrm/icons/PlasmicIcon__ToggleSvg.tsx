// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToggleSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToggleSvgIcon(props: ToggleSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 17.6 17.6"}
      xmlSpace={"preserve"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 14.8c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h11c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3H1zm14.9-1.7l-3.6-3.6c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7l3.6-3.6c.2-.2.4-.3.7-.3s.5.1.7.3c.2.2.3.4.3.7s-.1.5-.3.7l-2.9 2.9 2.9 2.9c.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zM1 9.8c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h8c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7s-.4.3-.7.3H1zm0-5c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3h11c.3 0 .5.1.7.3.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3H1z"
        }
      ></path>
    </svg>
  );
}

export default ToggleSvgIcon;
/* prettier-ignore-end */
