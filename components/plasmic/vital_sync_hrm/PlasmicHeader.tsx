// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: zd496FfthYEg

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import SidebarToggleButton from "../../SidebarToggleButton"; // plasmic-import: vp-0ZJI-DQym/component
import RightBarToggle from "../../RightBarToggle"; // plasmic-import: 7-guXMnuxTk_/component
import Breadcrumb from "../../Breadcrumb"; // plasmic-import: zKVxLfUZw9WN/component
import HomeButton from "../../HomeButton"; // plasmic-import: vc4QrCJM7nhW/component
import MessagesButton from "../../MessagesButton"; // plasmic-import: Ir4fGGB2J2Ay/component
import NotificationButton from "../../NotificationButton"; // plasmic-import: KnYNZm1t2IR5/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: gWWU5Ob64_0l/component

import { useScreenVariants as useScreenVariantsujc2VYpomBng } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: UJC2VYpomBng/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qFgf32neWRE8gRveVBaatz/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: zd496FfthYEg/css

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {
  rightBarToggle2?: React.ReactNode;
  pageLink?: string;
  openInNewTab?: Target;
  userAvatar?: React.ReactNode;
  notificationButton?: React.ReactNode;
  messagesButton?: React.ReactNode;
  homeButton?: React.ReactNode;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>(
  "rightBarToggle2",
  "pageLink",
  "openInNewTab",
  "userAvatar",
  "notificationButton",
  "messagesButton",
  "homeButton",
  "children"
);

export type PlasmicHeader__OverridesType = {
  header?: Flex__<"div">;
  actions?: Flex__<"section">;
  breadcrumb?: Flex__<typeof Breadcrumb>;
  alerts?: Flex__<"section">;
};

export interface DefaultHeaderProps {
  rightBarToggle2?: React.ReactNode;
  pageLink?: string;
  openInNewTab?: Target;
  userAvatar?: React.ReactNode;
  notificationButton?: React.ReactNode;
  messagesButton?: React.ReactNode;
  homeButton?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $translator = usePlasmicTranslator?.();

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          pageLink: "https://vitalsynchealth.com/"
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsujc2VYpomBng()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"header"}
      data-plasmic-override={overrides.header}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.header
      )}
    >
      <Stack__
        as={"section"}
        data-plasmic-name={"actions"}
        data-plasmic-override={overrides.actions}
        hasGap={true}
        className={classNames(projectcss.all, sty.actions)}
      >
        {(hasVariant(globalVariants, "screen", "tablet") ? true : false)
          ? renderPlasmicSlot({
              defaultContents: (
                <SidebarToggleButton
                  className={classNames(
                    "__wab_instance",
                    sty.sidebarToggleButton__rBwFr
                  )}
                />
              ),

              value: args.children
            })
          : null}
        {(hasVariant(globalVariants, "screen", "tablet") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <RightBarToggle
                  className={classNames(
                    "__wab_instance",
                    sty.rightBarToggle__cgx5
                  )}
                />
              ),

              value: args.rightBarToggle2
            })
          : null}
        <Breadcrumb
          data-plasmic-name={"breadcrumb"}
          data-plasmic-override={overrides.breadcrumb}
          className={classNames("__wab_instance", sty.breadcrumb)}
          noRoot={(() => {
            try {
              return (
                window.location.pathname !== "/" &&
                window.location.pathname.split("/").length === 3
              );
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()}
        />
      </Stack__>
      <Stack__
        as={"section"}
        data-plasmic-name={"alerts"}
        data-plasmic-override={overrides.alerts}
        hasGap={true}
        className={classNames(projectcss.all, sty.alerts)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <HomeButton
              className={classNames("__wab_instance", sty.homeButton__qy4Qc)}
            />
          ),

          value: args.homeButton
        })}
        {renderPlasmicSlot({
          defaultContents: (
            <MessagesButton
              className={classNames(
                "__wab_instance",
                sty.messagesButton___8UM0
              )}
            />
          ),

          value: args.messagesButton
        })}
        {renderPlasmicSlot({
          defaultContents: (
            <NotificationButton
              className={classNames(
                "__wab_instance",
                sty.notificationButton__kS6Mh
              )}
            />
          ),

          value: args.notificationButton
        })}
      </Stack__>
      {renderPlasmicSlot({
        defaultContents: (
          <UserAvatar
            className={classNames("__wab_instance", sty.userAvatar__nZysw)}
          />
        ),

        value: args.userAvatar
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  header: ["header", "actions", "breadcrumb", "alerts"],
  actions: ["actions", "breadcrumb"],
  breadcrumb: ["breadcrumb"],
  alerts: ["alerts"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  header: "div";
  actions: "section";
  breadcrumb: typeof Breadcrumb;
  alerts: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "header") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("header"),
  {
    // Helper components rendering sub-elements
    actions: makeNodeComponent("actions"),
    breadcrumb: makeNodeComponent("breadcrumb"),
    alerts: makeNodeComponent("alerts"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
