// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: TXVIWb_8PPG_

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

import Select from "../../Select"; // plasmic-import: emalQdNAiu4w/component
import Button from "../../Button"; // plasmic-import: JRPPbMhYptfo/component
import CustomDropdown from "../../CustomDropdown"; // plasmic-import: oUw-Oq8BPl_P/component
import CustomButton from "../../CustomButton"; // plasmic-import: r1AkQsrHSZtQ/component
import ActionsList from "../../ActionsList"; // plasmic-import: VUxalQKdyCYj/component
import ActionListItems from "../../ActionListItems"; // plasmic-import: _msz16lTRhj1/component
import CtNoData from "../../CtNoData"; // plasmic-import: iPx11GU5dJeG/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qFgf32neWRE8gRveVBaatz/projectcss
import sty from "./PlasmicSectionMetrics.module.css"; // plasmic-import: TXVIWb_8PPG_/css

import PlusSvgIcon from "./icons/PlasmicIcon__PlusSvg"; // plasmic-import: qKMzzxYWCT9r/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: 6im6f-sFV6o1/icon
import SettingSvgIcon from "./icons/PlasmicIcon__SettingSvg"; // plasmic-import: GwVz15svOXJ1/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 9Xy14f7tX9Ax/icon

createPlasmicElementProxy;

export type PlasmicSectionMetrics__VariantMembers = {
  noData: "noData";
  footer: "footer";
  actionType: "filter" | "button" | "dropdown";
};
export type PlasmicSectionMetrics__VariantsArgs = {
  noData?: SingleBooleanChoiceArg<"noData">;
  footer?: SingleBooleanChoiceArg<"footer">;
  actionType?: SingleChoiceArg<"filter" | "button" | "dropdown">;
};
type VariantPropType = keyof PlasmicSectionMetrics__VariantsArgs;
export const PlasmicSectionMetrics__VariantProps = new Array<VariantPropType>(
  "noData",
  "footer",
  "actionType"
);

export type PlasmicSectionMetrics__ArgsType = {
  content?: React.ReactNode;
  title?: React.ReactNode;
  filter?: React.ReactNode;
  button?: React.ReactNode;
  dropdown?: React.ReactNode;
  footerButton?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSectionMetrics__ArgsType;
export const PlasmicSectionMetrics__ArgProps = new Array<ArgPropType>(
  "content",
  "title",
  "filter",
  "button",
  "dropdown",
  "footerButton"
);

export type PlasmicSectionMetrics__OverridesType = {
  section?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  headerSection?: Flex__<"div">;
  h5?: Flex__<"h5">;
  actionSectgion?: Flex__<"div">;
  ctNoData?: Flex__<typeof CtNoData>;
  footerSection?: Flex__<"div">;
};

export interface DefaultSectionMetricsProps {
  content?: React.ReactNode;
  title?: React.ReactNode;
  filter?: React.ReactNode;
  button?: React.ReactNode;
  dropdown?: React.ReactNode;
  footerButton?: React.ReactNode;
  noData?: SingleBooleanChoiceArg<"noData">;
  footer?: SingleBooleanChoiceArg<"footer">;
  actionType?: SingleChoiceArg<"filter" | "button" | "dropdown">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSectionMetrics__RenderFunc(props: {
  variants: PlasmicSectionMetrics__VariantsArgs;
  args: PlasmicSectionMetrics__ArgsType;
  overrides: PlasmicSectionMetrics__OverridesType;
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
        path: "noData",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noData
      },
      {
        path: "actionType",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.actionType
      },
      {
        path: "footer",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.footer
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
        sty.section,
        {
          [sty.sectionactionType_button]: hasVariant(
            $state,
            "actionType",
            "button"
          ),
          [sty.sectionactionType_filter]: hasVariant(
            $state,
            "actionType",
            "filter"
          ),
          [sty.sectionfooter]: hasVariant($state, "footer", "footer"),
          [sty.sectionnoData]: hasVariant($state, "noData", "noData")
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxfooter]: hasVariant($state, "footer", "footer")
        })}
      >
        <div
          data-plasmic-name={"headerSection"}
          data-plasmic-override={overrides.headerSection}
          className={classNames(projectcss.all, sty.headerSection, {
            [sty.headerSectionactionType_button]: hasVariant(
              $state,
              "actionType",
              "button"
            ),
            [sty.headerSectionactionType_dropdown]: hasVariant(
              $state,
              "actionType",
              "dropdown"
            ),
            [sty.headerSectionactionType_filter]: hasVariant(
              $state,
              "actionType",
              "filter"
            ),
            [sty.headerSectionfooter]: hasVariant($state, "footer", "footer")
          })}
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
          <div
            data-plasmic-name={"actionSectgion"}
            data-plasmic-override={overrides.actionSectgion}
            className={classNames(projectcss.all, sty.actionSectgion, {
              [sty.actionSectgionactionType_button]: hasVariant(
                $state,
                "actionType",
                "button"
              ),
              [sty.actionSectgionactionType_dropdown]: hasVariant(
                $state,
                "actionType",
                "dropdown"
              ),
              [sty.actionSectgionactionType_filter]: hasVariant(
                $state,
                "actionType",
                "filter"
              )
            })}
          >
            {(
              hasVariant($state, "actionType", "dropdown")
                ? false
                : hasVariant($state, "actionType", "button")
                ? false
                : hasVariant($state, "actionType", "filter")
                ? true
                : true
            )
              ? renderPlasmicSlot({
                  defaultContents: (
                    <Select
                      className={classNames(
                        "__wab_instance",
                        sty.select__b0VsO
                      )}
                      color={"clear"}
                      options={(() => {
                        const __composite = [
                          { value: null, label: null },
                          { value: null, label: null },
                          { value: null, label: null }
                        ];
                        __composite["0"]["value"] = "week";
                        __composite["0"]["label"] = "This Week";
                        __composite["1"]["value"] = "month";
                        __composite["1"]["label"] = "This Month";
                        __composite["2"]["value"] = "year";
                        __composite["2"]["label"] = "This Year";
                        return __composite;
                      })()}
                      value={"week"}
                    />
                  ),

                  value: args.filter
                })
              : null}
            {(
              hasVariant($state, "actionType", "dropdown")
                ? false
                : hasVariant($state, "actionType", "button")
                ? true
                : hasVariant($state, "actionType", "filter")
                ? false
                : true
            )
              ? renderPlasmicSlot({
                  defaultContents: (
                    <Button
                      color={"white"}
                      shape={"rounded"}
                      size={"compact"}
                      startIcon={
                        <PlusSvgIcon
                          className={classNames(projectcss.all, sty.svg__oxJt5)}
                          role={"img"}
                        />
                      }
                    >
                      <Trans__>{"Action"}</Trans__>
                    </Button>
                  ),
                  value: args.button
                })
              : null}
            {(
              hasVariant($state, "actionType", "button")
                ? false
                : hasVariant($state, "actionType", "filter")
                ? false
                : true
            )
              ? renderPlasmicSlot({
                  defaultContents: (
                    <CustomDropdown
                      dropdownAlignment={"right"}
                      slot={
                        <ActionsList
                          actionsList={
                            <React.Fragment>
                              <ActionListItems
                                className={classNames(
                                  "__wab_instance",
                                  sty.actionListItems__lcyCx
                                )}
                              />

                              <ActionListItems
                                className={classNames(
                                  "__wab_instance",
                                  sty.actionListItems__bIh62
                                )}
                              />
                            </React.Fragment>
                          }
                          className={classNames(
                            "__wab_instance",
                            sty.actionsList__aPlm8
                          )}
                          noTitle={true}
                        />
                      }
                    >
                      <CustomButton
                        className={classNames(
                          "__wab_instance",
                          sty.customButton__pXx2A
                        )}
                        type={"labelOnly"}
                      />
                    </CustomDropdown>
                  ),
                  value: args.dropdown
                })
              : null}
          </div>
        </div>
        {(hasVariant($state, "noData", "noData") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: null,
              value: args.content
            })
          : null}
        <CtNoData
          data-plasmic-name={"ctNoData"}
          data-plasmic-override={overrides.ctNoData}
          className={classNames("__wab_instance", sty.ctNoData, {
            [sty.ctNoDatanoData]: hasVariant($state, "noData", "noData")
          })}
        />
      </Stack__>
      {(hasVariant($state, "footer", "footer") ? true : false) ? (
        <div
          data-plasmic-name={"footerSection"}
          data-plasmic-override={overrides.footerSection}
          className={classNames(projectcss.all, sty.footerSection, {
            [sty.footerSectionfooter]: hasVariant($state, "footer", "footer")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Button
                className={classNames("__wab_instance", sty.button__voZcf)}
                color={"clear"}
                showEndIcon={true}
                size={"compact"}
              />
            ),

            value: args.footerButton
          })}
        </div>
      ) : null}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  section: [
    "section",
    "freeBox",
    "headerSection",
    "h5",
    "actionSectgion",
    "ctNoData",
    "footerSection"
  ],
  freeBox: ["freeBox", "headerSection", "h5", "actionSectgion", "ctNoData"],
  headerSection: ["headerSection", "h5", "actionSectgion"],
  h5: ["h5"],
  actionSectgion: ["actionSectgion"],
  ctNoData: ["ctNoData"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  section: "div";
  freeBox: "div";
  headerSection: "div";
  h5: "h5";
  actionSectgion: "div";
  ctNoData: typeof CtNoData;
  footerSection: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionMetrics__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionMetrics__VariantsArgs;
    args?: PlasmicSectionMetrics__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionMetrics__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSectionMetrics__ArgsType,
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
          internalArgPropNames: PlasmicSectionMetrics__ArgProps,
          internalVariantPropNames: PlasmicSectionMetrics__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionMetrics__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "section") {
    func.displayName = "PlasmicSectionMetrics";
  } else {
    func.displayName = `PlasmicSectionMetrics.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionMetrics = Object.assign(
  // Top-level PlasmicSectionMetrics renders the root element
  makeNodeComponent("section"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    headerSection: makeNodeComponent("headerSection"),
    h5: makeNodeComponent("h5"),
    actionSectgion: makeNodeComponent("actionSectgion"),
    ctNoData: makeNodeComponent("ctNoData"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicSectionMetrics
    internalVariantProps: PlasmicSectionMetrics__VariantProps,
    internalArgProps: PlasmicSectionMetrics__ArgProps
  }
);

export default PlasmicSectionMetrics;
/* prettier-ignore-end */
