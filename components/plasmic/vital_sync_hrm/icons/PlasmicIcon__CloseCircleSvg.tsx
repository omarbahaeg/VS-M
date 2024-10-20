// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseCircleSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseCircleSvgIcon(props: CloseCircleSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      fill={"currentColor"}
      fillRule={"evenodd"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 010 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 01.05.06l.009.023a.118.118 0 010 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 01-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 01-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019a.199.199 0 01-.058-.083.118.118 0 010-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 01-.05-.061l-.009-.023a.118.118 0 010-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 01.07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 01.07 0z"
        }
      ></path>
    </svg>
  );
}

export default CloseCircleSvgIcon;
/* prettier-ignore-end */
