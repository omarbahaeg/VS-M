// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: p0mnkpzglymX

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qFgf32neWRE8gRveVBaatz/projectcss
import sty from "./PlasmicBadgeCount.module.css"; // plasmic-import: p0mnkpzglymX/css

createPlasmicElementProxy;

export type PlasmicBadgeCount__VariantMembers = {
  noCount: "noCount";
};
export type PlasmicBadgeCount__VariantsArgs = {
  noCount?: SingleBooleanChoiceArg<"noCount">;
};
type VariantPropType = keyof PlasmicBadgeCount__VariantsArgs;
export const PlasmicBadgeCount__VariantProps = new Array<VariantPropType>(
  "noCount"
);

export type PlasmicBadgeCount__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBadgeCount__ArgsType;
export const PlasmicBadgeCount__ArgProps = new Array<ArgPropType>("children");

export type PlasmicBadgeCount__OverridesType = {
  count?: Flex__<"section">;
};

export interface DefaultBadgeCountProps {
  children?: React.ReactNode;
  noCount?: SingleBooleanChoiceArg<"noCount">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBadgeCount__RenderFunc(props: {
  variants: PlasmicBadgeCount__VariantsArgs;
  args: PlasmicBadgeCount__ArgsType;
  overrides: PlasmicBadgeCount__OverridesType;
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
        path: "noCount",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noCount
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
    <section
      data-plasmic-name={"count"}
      data-plasmic-override={overrides.count}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.count,
        { [sty.countnoCount]: hasVariant($state, "noCount", "noCount") }
      )}
    >
      {renderPlasmicSlot({
        defaultContents: <Trans__>{"0"}</Trans__>,
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  count: ["count"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  count: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBadgeCount__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBadgeCount__VariantsArgs;
    args?: PlasmicBadgeCount__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBadgeCount__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBadgeCount__ArgsType,
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
          internalArgPropNames: PlasmicBadgeCount__ArgProps,
          internalVariantPropNames: PlasmicBadgeCount__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBadgeCount__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "count") {
    func.displayName = "PlasmicBadgeCount";
  } else {
    func.displayName = `PlasmicBadgeCount.${nodeName}`;
  }
  return func;
}

export const PlasmicBadgeCount = Object.assign(
  // Top-level PlasmicBadgeCount renders the root element
  makeNodeComponent("count"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBadgeCount
    internalVariantProps: PlasmicBadgeCount__VariantProps,
    internalArgProps: PlasmicBadgeCount__ArgProps
  }
);

export default PlasmicBadgeCount;
/* prettier-ignore-end */