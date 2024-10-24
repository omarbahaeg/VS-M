// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseCircleSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseCircleSvg2Icon(props: CloseCircleSvg2IconProps) {
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
          "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.978 274.82l-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 00-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 000 .07l.01.022a.268.268 0 00.049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 000 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 00.07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 00.07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 000-.07l-.01-.022a.268.268 0 00-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 000-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02a.199.199 0 00-.083-.058.118.118 0 00-.07 0z"
        }
      ></path>
    </svg>
  );
}

export default CloseCircleSvg2Icon;
/* prettier-ignore-end */
