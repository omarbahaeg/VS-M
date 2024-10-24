// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: m-qBY6t_w4vi

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
import sty from "./PlasmicSectionCard.module.css"; // plasmic-import: m-qBY6t_w4vi/css

createPlasmicElementProxy;

export type PlasmicSectionCard__VariantMembers = {};
export type PlasmicSectionCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicSectionCard__VariantsArgs;
export const PlasmicSectionCard__VariantProps = new Array<VariantPropType>();

export type PlasmicSectionCard__ArgsType = {
  content?: React.ReactNode;
  title?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSectionCard__ArgsType;
export const PlasmicSectionCard__ArgProps = new Array<ArgPropType>(
  "content",
  "title"
);

export type PlasmicSectionCard__OverridesType = {
  section?: Flex__<"div">;
  headerSection?: Flex__<"div">;
  h5?: Flex__<"h5">;
  contentSection?: Flex__<"div">;
};

export interface DefaultSectionCardProps {
  content?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSectionCard__RenderFunc(props: {
  variants: PlasmicSectionCard__VariantsArgs;
  args: PlasmicSectionCard__ArgsType;
  overrides: PlasmicSectionCard__OverridesType;
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

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"section"}
      data-plasmic-override={overrides.section}
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
        sty.section
      )}
    >
      <div
        data-plasmic-name={"headerSection"}
        data-plasmic-override={overrides.headerSection}
        className={classNames(projectcss.all, sty.headerSection)}
      >
        <h5
          data-plasmic-name={"h5"}
          data-plasmic-override={overrides.h5}
          className={classNames(projectcss.all, projectcss.h5, sty.h5)}
        >
          {renderPlasmicSlot({
            defaultContents: <Trans__>{"Section Title"}</Trans__>,
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </h5>
      </div>
      <div
        data-plasmic-name={"contentSection"}
        data-plasmic-override={overrides.contentSection}
        className={classNames(projectcss.all, sty.contentSection)}
      >
        {renderPlasmicSlot({
          defaultContents: null,
          value: args.content
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  section: ["section", "headerSection", "h5", "contentSection"],
  headerSection: ["headerSection", "h5"],
  h5: ["h5"],
  contentSection: ["contentSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  section: "div";
  headerSection: "div";
  h5: "h5";
  contentSection: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionCard__VariantsArgs;
    args?: PlasmicSectionCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSectionCard__ArgsType,
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
          internalArgPropNames: PlasmicSectionCard__ArgProps,
          internalVariantPropNames: PlasmicSectionCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "section") {
    func.displayName = "PlasmicSectionCard";
  } else {
    func.displayName = `PlasmicSectionCard.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionCard = Object.assign(
  // Top-level PlasmicSectionCard renders the root element
  makeNodeComponent("section"),
  {
    // Helper components rendering sub-elements
    headerSection: makeNodeComponent("headerSection"),
    h5: makeNodeComponent("h5"),
    contentSection: makeNodeComponent("contentSection"),

    // Metadata about props expected for PlasmicSectionCard
    internalVariantProps: PlasmicSectionCard__VariantProps,
    internalArgProps: PlasmicSectionCard__ArgProps
  }
);

export default PlasmicSectionCard;
/* prettier-ignore-end */
