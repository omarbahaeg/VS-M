// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: ZuuWfkNiYXry

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

import BadgeSidebar from "../../BadgeSidebar"; // plasmic-import: Dxo6omEgGGYV/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qFgf32neWRE8gRveVBaatz/projectcss
import sty from "./PlasmicNavigationItem.module.css"; // plasmic-import: ZuuWfkNiYXry/css

import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: -hHWm0myDKZV/icon

createPlasmicElementProxy;

export type PlasmicNavigationItem__VariantMembers = {
  showBadge: "showBadge";
  collapsed: "collapsed";
  active: "active";
};
export type PlasmicNavigationItem__VariantsArgs = {
  showBadge?: SingleBooleanChoiceArg<"showBadge">;
  collapsed?: SingleBooleanChoiceArg<"collapsed">;
  active?: SingleBooleanChoiceArg<"active">;
};
type VariantPropType = keyof PlasmicNavigationItem__VariantsArgs;
export const PlasmicNavigationItem__VariantProps = new Array<VariantPropType>(
  "showBadge",
  "collapsed",
  "active"
);

export type PlasmicNavigationItem__ArgsType = {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  pageLink?: string;
  openInNewTab?: Target;
};
type ArgPropType = keyof PlasmicNavigationItem__ArgsType;
export const PlasmicNavigationItem__ArgProps = new Array<ArgPropType>(
  "label",
  "icon",
  "pageLink",
  "openInNewTab"
);

export type PlasmicNavigationItem__OverridesType = {
  menuItem?: Flex__<"a"> & Partial<LinkProps>;
  leftContent?: Flex__<"div">;
  centerContent?: Flex__<"div">;
  rightContent?: Flex__<"div">;
  badgeSidebar?: Flex__<typeof BadgeSidebar>;
};

export interface DefaultNavigationItemProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  pageLink?: string;
  openInNewTab?: Target;
  showBadge?: SingleBooleanChoiceArg<"showBadge">;
  collapsed?: SingleBooleanChoiceArg<"collapsed">;
  active?: SingleBooleanChoiceArg<"active">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavigationItem__RenderFunc(props: {
  variants: PlasmicNavigationItem__VariantsArgs;
  args: PlasmicNavigationItem__ArgsType;
  overrides: PlasmicNavigationItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $translator = usePlasmicTranslator?.();

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showBadge",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showBadge
      },
      {
        path: "collapsed",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.collapsed
      },
      {
        path: "active",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return (() => {
                return $props.pageLink === $ctx.pagePath;
              })();
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.active
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={PlasmicLink__}
      data-plasmic-name={"menuItem"}
      data-plasmic-override={overrides.menuItem}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.menuItem,
        {
          [sty.menuItemactive]: hasVariant($state, "active", "active"),
          [sty.menuItemcollapsed]: hasVariant($state, "collapsed", "collapsed"),
          [sty.menuItemshowBadge]: hasVariant($state, "showBadge", "showBadge")
        }
      )}
      component={Link}
      href={args.pageLink}
      platform={"nextjs"}
      target={args.openInNewTab}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"leftContent"}
        data-plasmic-override={overrides.leftContent}
        hasGap={true}
        className={classNames(projectcss.all, sty.leftContent, {
          [sty.leftContentcollapsed]: hasVariant(
            $state,
            "collapsed",
            "collapsed"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <Icon4Icon
              className={classNames(projectcss.all, sty.svg___1HY3A)}
              role={"img"}
            />
          ),

          value: args.icon,
          className: classNames(sty.slotTargetIcon, {
            [sty.slotTargetIconactive]: hasVariant($state, "active", "active")
          })
        })}
        <div
          data-plasmic-name={"centerContent"}
          data-plasmic-override={overrides.centerContent}
          className={classNames(projectcss.all, sty.centerContent, {
            [sty.centerContentcollapsed]: hasVariant(
              $state,
              "collapsed",
              "collapsed"
            ),
            [sty.centerContentshowBadge]: hasVariant(
              $state,
              "showBadge",
              "showBadge"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: <Trans__>{"Label"}</Trans__>,
            value: args.label,
            className: classNames(sty.slotTargetLabel, {
              [sty.slotTargetLabelactive]: hasVariant(
                $state,
                "active",
                "active"
              )
            })
          })}
        </div>
      </Stack__>
      {(
        hasVariant($state, "collapsed", "collapsed")
          ? true
          : hasVariant($state, "showBadge", "showBadge")
          ? true
          : (() => {
              try {
                return $state.showBadge === true;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()
      ) ? (
        <Stack__
          as={"div"}
          data-plasmic-name={"rightContent"}
          data-plasmic-override={overrides.rightContent}
          hasGap={true}
          className={classNames(projectcss.all, sty.rightContent, {
            [sty.rightContentcollapsed]: hasVariant(
              $state,
              "collapsed",
              "collapsed"
            ),
            [sty.rightContentshowBadge]: hasVariant(
              $state,
              "showBadge",
              "showBadge"
            )
          })}
        >
          <BadgeSidebar
            data-plasmic-name={"badgeSidebar"}
            data-plasmic-override={overrides.badgeSidebar}
            className={classNames("__wab_instance", sty.badgeSidebar, {
              [sty.badgeSidebarshowBadge]: hasVariant(
                $state,
                "showBadge",
                "showBadge"
              )
            })}
          />
        </Stack__>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  menuItem: [
    "menuItem",
    "leftContent",
    "centerContent",
    "rightContent",
    "badgeSidebar"
  ],
  leftContent: ["leftContent", "centerContent"],
  centerContent: ["centerContent"],
  rightContent: ["rightContent", "badgeSidebar"],
  badgeSidebar: ["badgeSidebar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  menuItem: "a";
  leftContent: "div";
  centerContent: "div";
  rightContent: "div";
  badgeSidebar: typeof BadgeSidebar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavigationItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavigationItem__VariantsArgs;
    args?: PlasmicNavigationItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavigationItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavigationItem__ArgsType,
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
          internalArgPropNames: PlasmicNavigationItem__ArgProps,
          internalVariantPropNames: PlasmicNavigationItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavigationItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "menuItem") {
    func.displayName = "PlasmicNavigationItem";
  } else {
    func.displayName = `PlasmicNavigationItem.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigationItem = Object.assign(
  // Top-level PlasmicNavigationItem renders the root element
  makeNodeComponent("menuItem"),
  {
    // Helper components rendering sub-elements
    leftContent: makeNodeComponent("leftContent"),
    centerContent: makeNodeComponent("centerContent"),
    rightContent: makeNodeComponent("rightContent"),
    badgeSidebar: makeNodeComponent("badgeSidebar"),

    // Metadata about props expected for PlasmicNavigationItem
    internalVariantProps: PlasmicNavigationItem__VariantProps,
    internalArgProps: PlasmicNavigationItem__ArgProps
  }
);

export default PlasmicNavigationItem;
/* prettier-ignore-end */