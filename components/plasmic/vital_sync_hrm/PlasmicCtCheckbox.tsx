// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: h4AhLHpwZjUP

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

import * as pp from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qFgf32neWRE8gRveVBaatz/projectcss
import sty from "./PlasmicCtCheckbox.module.css"; // plasmic-import: h4AhLHpwZjUP/css

import SquareSvgIcon from "./icons/PlasmicIcon__SquareSvg"; // plasmic-import: CpP-5HbIMBWm/icon
import SquareCheckFilledSvgIcon from "./icons/PlasmicIcon__SquareCheckFilledSvg"; // plasmic-import: AYyMz-QUMUDa/icon
import SquareMinusSvgIcon from "./icons/PlasmicIcon__SquareMinusSvg"; // plasmic-import: 7xqRrcjhZPHC/icon

createPlasmicElementProxy;

export type PlasmicCtCheckbox__VariantMembers = {
  isDisabled: "isDisabled";
  isChecked: "isChecked";
  isIndeterminate: "isIndeterminate";
};
export type PlasmicCtCheckbox__VariantsArgs = {
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
  isIndeterminate?: SingleBooleanChoiceArg<"isIndeterminate">;
};
type VariantPropType = keyof PlasmicCtCheckbox__VariantsArgs;
export const PlasmicCtCheckbox__VariantProps = new Array<VariantPropType>(
  "isDisabled",
  "isChecked",
  "isIndeterminate"
);

export type PlasmicCtCheckbox__ArgsType = {
  name?: string;
  value?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
  onClick?: (event: any) => void;
};
type ArgPropType = keyof PlasmicCtCheckbox__ArgsType;
export const PlasmicCtCheckbox__ArgProps = new Array<ArgPropType>(
  "name",
  "value",
  "aria-label",
  "aria-labelledby",
  "onChange",
  "onClick"
);

export type PlasmicCtCheckbox__OverridesType = {
  root?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultCtCheckboxProps extends pp.CheckboxProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  onChange?: (isChecked: boolean) => void;
  onClick?: (event: any) => void;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCtCheckbox__RenderFunc(props: {
  variants: PlasmicCtCheckbox__VariantsArgs;
  args: PlasmicCtCheckbox__ArgsType;
  overrides: PlasmicCtCheckbox__OverridesType;
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
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "isChecked",
        type: "writable",
        variableType: "boolean",

        valueProp: "isChecked",
        onChangeProp: "onChange"
      },
      {
        path: "isIndeterminate",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isIndeterminate
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
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root,
        {
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          )
        }
      )}
      onClick={args.onClick}
    >
      <PlasmicIcon__
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant($state, "isIndeterminate", "isIndeterminate")
            ? SquareMinusSvgIcon
            : hasVariant($state, "isChecked", "isChecked")
            ? SquareCheckFilledSvgIcon
            : SquareSvgIcon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.svgisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.svgisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          )
        })}
        role={"img"}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.CheckboxProps>(
  props: P,
  ref: pp.CheckboxRef
) {
  return pp.useCheckbox<P, typeof PlasmicCtCheckbox>(
    PlasmicCtCheckbox,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isIndeterminateVariant: {
        group: "isIndeterminate",
        variant: "isIndeterminate"
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCtCheckbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCtCheckbox__VariantsArgs;
    args?: PlasmicCtCheckbox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCtCheckbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCtCheckbox__ArgsType,
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
          internalArgPropNames: PlasmicCtCheckbox__ArgProps,
          internalVariantPropNames: PlasmicCtCheckbox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCtCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtCheckbox";
  } else {
    func.displayName = `PlasmicCtCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCtCheckbox = Object.assign(
  // Top-level PlasmicCtCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicCtCheckbox
    internalVariantProps: PlasmicCtCheckbox__VariantProps,
    internalArgProps: PlasmicCtCheckbox__ArgProps,

    useBehavior
  }
);

export default PlasmicCtCheckbox;
/* prettier-ignore-end */