// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VitalSyncWordMarkSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VitalSyncWordMarkSvgIcon(props: VitalSyncWordMarkSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 176.4 36.6"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M89.5 25.9l1.1-2.2c1.9 1.8 5.2 3.2 8.7 3.2 4.9 0 7.1-2.1 7.1-4.7 0-7.2-16.3-2.8-16.3-12.6 0-3.9 3-7.2 9.7-7.2 3 0 6.1.9 8.2 2.3l-.9 2.2c-2.3-1.5-4.9-2.2-7.2-2.2-4.8 0-7 2.1-7 4.8 0 7.2 16.3 2.9 16.3 12.5 0 3.9-3.1 7.2-9.9 7.2-3.9.2-7.8-1.2-9.8-3.3zM131 9.3l-9.9 22.2c-1.7 3.9-3.8 5.1-6.6 5.1-1.9 0-3.6-.6-4.8-1.8l1.2-2c1 1 2.2 1.5 3.6 1.5 1.8 0 3-.8 4.1-3.3l.9-1.9-8.9-19.8h2.8l7.5 16.9 7.5-16.9h2.6zm22 8.3v11.5h-2.7V17.9c0-4.2-2.2-6.3-6-6.3-4.3 0-6.9 2.6-6.9 7.2v10.4h-2.7V9.3h2.6V13c1.4-2.4 4.1-3.8 7.5-3.8 4.9-.1 8.2 2.7 8.2 8.4zm5.4 1.6c0-5.9 4.3-10.1 10.2-10.1 3.4 0 6.2 1.3 7.8 3.9l-2 1.4c-1.4-2-3.5-2.9-5.8-2.9-4.3 0-7.5 3.1-7.5 7.7s3.2 7.7 7.5 7.7c2.3 0 4.4-.9 5.8-2.9l2 1.4c-1.6 2.6-4.4 3.9-7.8 3.9-5.9 0-10.2-4.2-10.2-10.1zM27.9 2.7L16.4 29.1h-4.8L0 2.7h5.3l8.8 20.4L23 2.7h4.9zm1.9.1c0-1.6 1.3-2.8 3-2.8s3 1.2 3 2.7c0 1.7-1.2 2.9-3 2.9s-3-1.2-3-2.8zm.6 6.2h4.7v20.1h-4.7V9zm23 19c-1.1.9-2.8 1.4-4.5 1.4-4.4 0-6.9-2.3-6.9-6.8v-9.7h-3.3V9.1H42V4.5h4.7v4.6h5.4v3.8h-5.4v9.6c0 2 1 3 2.8 3 1 0 1.9-.3 2.6-.8l1.3 3.3zm20.8-10.7v11.8h-4.4v-2.5c-1.1 1.7-3.3 2.7-6.3 2.7-4.6 0-7.5-2.5-7.5-6s2.3-6 8.4-6h5.2V17c0-2.8-1.7-4.4-5-4.4-2.3 0-4.6.8-6.1 2l-1.9-3.4c2.1-1.7 5.3-2.5 8.5-2.5 5.7.1 9.1 2.8 9.1 8.6zm-4.7 5.5v-2.3h-4.9c-3.2 0-4.1 1.2-4.1 2.7 0 1.7 1.4 2.8 3.9 2.8s4.3-1.1 5.1-3.2zM80.2 1.1h4.7v28h-4.7v-28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VitalSyncWordMarkSvgIcon;
/* prettier-ignore-end */
