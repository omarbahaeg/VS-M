// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: Dbp6QW6F8Oz_

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
import sty from "./PlasmicSubItem.module.css"; // plasmic-import: Dbp6QW6F8Oz_/css

createPlasmicElementProxy;

export type PlasmicSubItem__VariantMembers = {
  pressed: "pressed";
};
export type PlasmicSubItem__VariantsArgs = {
  pressed?: SingleBooleanChoiceArg<"pressed">;
};
type VariantPropType = keyof PlasmicSubItem__VariantsArgs;
export const PlasmicSubItem__VariantProps = new Array<VariantPropType>(
  "pressed"
);

export type PlasmicSubItem__ArgsType = {
  children?: React.ReactNode;
  pageLink?: string;
};
type ArgPropType = keyof PlasmicSubItem__ArgsType;
export const PlasmicSubItem__ArgProps = new Array<ArgPropType>(
  "children",
  "pageLink"
);

export type PlasmicSubItem__OverridesType = {
  subItem?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultSubItemProps {
  children?: React.ReactNode;
  pageLink?: string;
  pressed?: SingleBooleanChoiceArg<"pressed">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSubItem__RenderFunc(props: {
  variants: PlasmicSubItem__VariantsArgs;
  args: PlasmicSubItem__ArgsType;
  overrides: PlasmicSubItem__OverridesType;
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
        path: "pressed",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.pageLink === $ctx.pagePath;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.pressed
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

  const [isSubItemFocusVisibleWithin, triggerSubItemFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_subItem: isSubItemFocusVisibleWithin
  };

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"subItem"}
      data-plasmic-override={overrides.subItem}
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
        sty.subItem,
        { [sty.subItempressed]: hasVariant($state, "pressed", "pressed") }
      )}
      data-plasmic-trigger-props={[triggerSubItemFocusVisibleWithinProps]}
    >
      <PlasmicLink__
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        aria-label={``}
        className={classNames(projectcss.all, projectcss.a, sty.link, {
          [sty.linkpressed]: hasVariant($state, "pressed", "pressed")
        })}
        component={Link}
        href={
          hasVariant($state, "pressed", "pressed")
            ? (() => {
                try {
                  return $props.pageLink;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()
            : undefined
        }
        onClick={async event => {
          const $steps = {};

          $steps["goToPage"] = true
            ? (() => {
                const actionArgs = {
                  destination: (() => {
                    try {
                      return $props.pageLink;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return undefined;
                      }
                      throw e;
                    }
                  })()
                };
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    __nextRouter?.push(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToPage"] != null &&
            typeof $steps["goToPage"] === "object" &&
            typeof $steps["goToPage"].then === "function"
          ) {
            $steps["goToPage"] = await $steps["goToPage"];
          }
        }}
        platform={"nextjs"}
        title={``}
      >
        {renderPlasmicSlot({
          defaultContents: <Trans__>{"Label"}</Trans__>,
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildren___focusVisibleWithin]:
              triggers.focusVisibleWithin_subItem,
            [sty.slotTargetChildrenpressed]: hasVariant(
              $state,
              "pressed",
              "pressed"
            )
          })
        })}
      </PlasmicLink__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  subItem: ["subItem", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  subItem: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSubItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSubItem__VariantsArgs;
    args?: PlasmicSubItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSubItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSubItem__ArgsType,
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
          internalArgPropNames: PlasmicSubItem__ArgProps,
          internalVariantPropNames: PlasmicSubItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSubItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "subItem") {
    func.displayName = "PlasmicSubItem";
  } else {
    func.displayName = `PlasmicSubItem.${nodeName}`;
  }
  return func;
}

export const PlasmicSubItem = Object.assign(
  // Top-level PlasmicSubItem renders the root element
  makeNodeComponent("subItem"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSubItem
    internalVariantProps: PlasmicSubItem__VariantProps,
    internalArgProps: PlasmicSubItem__ArgProps
  }
);

export default PlasmicSubItem;
/* prettier-ignore-end */
