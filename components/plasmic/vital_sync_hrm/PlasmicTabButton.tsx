// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: TAXiLlfQD5MN

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
import sty from "./PlasmicTabButton.module.css"; // plasmic-import: TAXiLlfQD5MN/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 9Xy14f7tX9Ax/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: 6im6f-sFV6o1/icon

createPlasmicElementProxy;

export type PlasmicTabButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  shape: "rounded" | "round" | "sharp";
  size: "compact" | "minimal";
};
export type PlasmicTabButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
};
type VariantPropType = keyof PlasmicTabButton__VariantsArgs;
export const PlasmicTabButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size"
);

export type PlasmicTabButton__ArgsType = {
  label?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
  submitsForm?: boolean;
  target?: boolean;
  count?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTabButton__ArgsType;
export const PlasmicTabButton__ArgProps = new Array<ArgPropType>(
  "label",
  "startIcon",
  "endIcon",
  "link",
  "submitsForm",
  "target",
  "count"
);

export type PlasmicTabButton__OverridesType = {
  root?: Flex__<"button">;
  startIconContainer?: Flex__<"div">;
  contentContainer?: Flex__<"div">;
  endIconContainer?: Flex__<"div">;
};

export interface DefaultTabButtonProps extends pp.BaseButtonProps {
  label?: React.ReactNode;
  submitsForm?: boolean;
  target?: boolean;
  count?: React.ReactNode;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTabButton__RenderFunc(props: {
  variants: PlasmicTabButton__VariantsArgs;
  args: PlasmicTabButton__ArgsType;
  overrides: PlasmicTabButton__OverridesType;
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
        path: "showStartIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
      },
      {
        path: "showEndIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "shape",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <Stack__
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootshape_round]: hasVariant($state, "shape", "round"),
          [sty.rootshape_round_size_compact]:
            hasVariant($state, "shape", "round") &&
            hasVariant($state, "size", "compact"),
          [sty.rootshape_rounded]: hasVariant($state, "shape", "rounded"),
          [sty.rootshape_rounded_showStartIcon]:
            hasVariant($state, "shape", "rounded") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootshape_rounded_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootshape_sharp]: hasVariant($state, "shape", "sharp"),
          [sty.rootshowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          ),
          [sty.rootshowEndIcon_shape_rounded]:
            hasVariant($state, "showEndIcon", "showEndIcon") &&
            hasVariant($state, "shape", "rounded"),
          [sty.rootshowEndIcon_showStartIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootshowEndIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showEndIcon", "showEndIcon"),
          [sty.rootshowStartIcon]: hasVariant(
            $state,
            "showStartIcon",
            "showStartIcon"
          ),
          [sty.rootshowStartIcon_size_compact]:
            hasVariant($state, "size", "compact") &&
            hasVariant($state, "showStartIcon", "showStartIcon"),
          [sty.rootsize_compact]: hasVariant($state, "size", "compact"),
          [sty.rootsize_minimal]: hasVariant($state, "size", "minimal")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(hasVariant($state, "showStartIcon", "showStartIcon") ? true : false) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainershape_rounded_showStartIcon]:
              hasVariant($state, "shape", "rounded") &&
              hasVariant($state, "showStartIcon", "showStartIcon"),
            [sty.startIconContainershowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CheckSvgIcon
                className={classNames(projectcss.all, sty.svg___66B)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                $state,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}
      <Stack__
        as={"div"}
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.contentContainer, {
          [sty.contentContainer___focusVisibleWithin]:
            triggers.focusVisibleWithin_root,
          [sty.contentContainerisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.contentContainershape_rounded]: hasVariant(
            $state,
            "shape",
            "rounded"
          ),
          [sty.contentContainershowEndIcon]: hasVariant(
            $state,
            "showEndIcon",
            "showEndIcon"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: <Trans__>{"Button"}</Trans__>,
          value: args.label,
          className: classNames(sty.slotTargetLabel, {
            [sty.slotTargetLabel___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetLabelisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetLabelshape_rounded]: hasVariant(
              $state,
              "shape",
              "rounded"
            ),
            [sty.slotTargetLabelshowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.slotTargetLabelshowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.slotTargetLabelsize_minimal]: hasVariant(
              $state,
              "size",
              "minimal"
            )
          })
        })}
        {renderPlasmicSlot({
          defaultContents: <Trans__>{"(0)"}</Trans__>,
          value: args.count,
          className: classNames(sty.slotTargetCount, {
            [sty.slotTargetCount___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.slotTargetCountisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.slotTargetCountshape_rounded]: hasVariant(
              $state,
              "shape",
              "rounded"
            ),
            [sty.slotTargetCountshowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            ),
            [sty.slotTargetCountshowStartIcon]: hasVariant(
              $state,
              "showStartIcon",
              "showStartIcon"
            ),
            [sty.slotTargetCountsize_minimal]: hasVariant(
              $state,
              "size",
              "minimal"
            )
          })
        })}
      </Stack__>
      {(hasVariant($state, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainershowEndIcon]: hasVariant(
              $state,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Icon19Icon
                className={classNames(projectcss.all, sty.svg__kNKqW)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                $state,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.PlumeButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicTabButton>(
    PlasmicTabButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );
  if (b.plasmicProps.overrides.root.as === "a") {
    b.plasmicProps.overrides.root.as = PlasmicLink__;
    b.plasmicProps.overrides.root.props.component = Link;
    b.plasmicProps.overrides.root.props.platform = "nextjs";
  }
  return b;
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  startIconContainer: "div";
  contentContainer: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTabButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTabButton__VariantsArgs;
    args?: PlasmicTabButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTabButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTabButton__ArgsType,
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
          internalArgPropNames: PlasmicTabButton__ArgProps,
          internalVariantPropNames: PlasmicTabButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTabButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTabButton";
  } else {
    func.displayName = `PlasmicTabButton.${nodeName}`;
  }
  return func;
}

export const PlasmicTabButton = Object.assign(
  // Top-level PlasmicTabButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicTabButton
    internalVariantProps: PlasmicTabButton__VariantProps,
    internalArgProps: PlasmicTabButton__ArgProps,

    useBehavior
  }
);

export default PlasmicTabButton;
/* prettier-ignore-end */