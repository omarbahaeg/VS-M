// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qFgf32neWRE8gRveVBaatz
// Component: 7axq3JOxCFIc

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Sidebar from "../../Sidebar"; // plasmic-import: MaimrxZZ2uDo/component
import Header from "../../Header"; // plasmic-import: zd496FfthYEg/component
import RightBarToggle from "../../RightBarToggle"; // plasmic-import: 7-guXMnuxTk_/component
import UserAvatar from "../../UserAvatar"; // plasmic-import: gWWU5Ob64_0l/component
import NotificationButton from "../../NotificationButton"; // plasmic-import: KnYNZm1t2IR5/component
import MessagesButton from "../../MessagesButton"; // plasmic-import: Ir4fGGB2J2Ay/component
import HomeButton from "../../HomeButton"; // plasmic-import: vc4QrCJM7nhW/component
import SidebarToggleButton from "../../SidebarToggleButton"; // plasmic-import: vp-0ZJI-DQym/component
import Button from "../../Button"; // plasmic-import: JRPPbMhYptfo/component
import Footer from "../../Footer"; // plasmic-import: dIME4mUiH-Rp/component
import RightBar from "../../RightBar"; // plasmic-import: pW9ClsR7IfI0/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsujc2VYpomBng } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: UJC2VYpomBng/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qFgf32neWRE8gRveVBaatz/projectcss
import sty from "./PlasmicMessages.module.css"; // plasmic-import: 7axq3JOxCFIc/css

import PlusSvgIcon from "./icons/PlasmicIcon__PlusSvg"; // plasmic-import: qKMzzxYWCT9r/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: 6im6f-sFV6o1/icon

createPlasmicElementProxy;

export type PlasmicMessages__VariantMembers = {};
export type PlasmicMessages__VariantsArgs = {};
type VariantPropType = keyof PlasmicMessages__VariantsArgs;
export const PlasmicMessages__VariantProps = new Array<VariantPropType>();

export type PlasmicMessages__ArgsType = {};
type ArgPropType = keyof PlasmicMessages__ArgsType;
export const PlasmicMessages__ArgProps = new Array<ArgPropType>();

export type PlasmicMessages__OverridesType = {
  home?: Flex__<"div">;
  sidebar?: Flex__<typeof Sidebar>;
  body?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  rightBarToggle?: Flex__<typeof RightBarToggle>;
  sidebarToggleButton?: Flex__<typeof SidebarToggleButton>;
  content?: Flex__<"div">;
  frame7?: Flex__<"div">;
  frame8?: Flex__<"div">;
  hiKatiePena?: Flex__<"div">;
  welcomeBackToRhom?: Flex__<"div">;
  frame1?: Flex__<"div">;
  button?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
  frame10?: Flex__<"div">;
  footer?: Flex__<typeof Footer>;
  rightBar?: Flex__<typeof RightBar>;
  overlay?: Flex__<"section">;
};

export interface DefaultMessagesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMessages__RenderFunc(props: {
  variants: PlasmicMessages__VariantsArgs;
  args: PlasmicMessages__ArgsType;
  overrides: PlasmicMessages__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "rightBarToggle.collapsed",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "sidebarToggleButton.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    user: usePlasmicDataOp(() => {
      return {
        sourceId: "jy9oBFjmhhSMLYBVGZ4Xm2",
        opId: "39fc56d4-2f5e-4102-bdd2-c72491c1dc13",
        userArgs: {},
        cacheKey: `plasmic.$.39fc56d4-2f5e-4102-bdd2-c72491c1dc13.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    eSign: usePlasmicDataOp(() => {
      return {
        sourceId: "jy9oBFjmhhSMLYBVGZ4Xm2",
        opId: "dead7ebe-265e-4262-a3ae-78041d232a01",
        userArgs: {},
        cacheKey: `plasmic.$.dead7ebe-265e-4262-a3ae-78041d232a01.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    employees: usePlasmicDataOp(() => {
      return {
        sourceId: "jy9oBFjmhhSMLYBVGZ4Xm2",
        opId: "c0c3f78b-dfe5-4015-a5e3-04ffe1715358",
        userArgs: {},
        cacheKey: `plasmic.$.c0c3f78b-dfe5-4015-a5e3-04ffe1715358.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsujc2VYpomBng()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicMessages.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicMessages.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicMessages.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"home"}
        data-plasmic-override={overrides.home}
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
          sty.home
        )}
      >
        <Sidebar
          data-plasmic-name={"sidebar"}
          data-plasmic-override={overrides.sidebar}
          className={classNames("__wab_instance", sty.sidebar)}
        />

        <div
          data-plasmic-name={"body"}
          data-plasmic-override={overrides.body}
          className={classNames(projectcss.all, sty.body)}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
            rightBarToggle2={
              <RightBarToggle
                data-plasmic-name={"rightBarToggle"}
                data-plasmic-override={overrides.rightBarToggle}
                className={classNames("__wab_instance", sty.rightBarToggle)}
                collapsed={generateStateValueProp($state, [
                  "rightBarToggle",
                  "collapsed"
                ])}
                onCollapsedChange={generateStateOnChangeProp($state, [
                  "rightBarToggle",
                  "collapsed"
                ])}
              />
            }
          >
            <SidebarToggleButton
              data-plasmic-name={"sidebarToggleButton"}
              data-plasmic-override={overrides.sidebarToggleButton}
              className={classNames("__wab_instance", sty.sidebarToggleButton)}
              isOpen={generateStateValueProp($state, [
                "sidebarToggleButton",
                "isOpen"
              ])}
              onIsOpenChange={generateStateOnChangeProp($state, [
                "sidebarToggleButton",
                "isOpen"
              ])}
            />
          </Header>
          <Stack__
            as={"div"}
            data-plasmic-name={"content"}
            data-plasmic-override={overrides.content}
            hasGap={true}
            className={classNames(projectcss.all, sty.content)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"frame7"}
              data-plasmic-override={overrides.frame7}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame7)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"frame8"}
                data-plasmic-override={overrides.frame8}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame8)}
              >
                <div
                  data-plasmic-name={"hiKatiePena"}
                  data-plasmic-override={overrides.hiKatiePena}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.hiKatiePena
                  )}
                >
                  <Trans__>{"Messages"}</Trans__>
                </div>
                <div
                  data-plasmic-name={"welcomeBackToRhom"}
                  data-plasmic-override={overrides.welcomeBackToRhom}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.welcomeBackToRhom
                  )}
                >
                  <Trans__>{"Welcome back to Rhombus"}</Trans__>
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"frame1"}
                data-plasmic-override={overrides.frame1}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame1)}
              >
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  color={"green"}
                  shape={"rounded"}
                  showStartIcon={true}
                  size={"compact"}
                  startIcon={
                    <PlusSvgIcon
                      data-plasmic-name={"svg"}
                      data-plasmic-override={overrides.svg}
                      className={classNames(projectcss.all, sty.svg)}
                      role={"img"}
                    />
                  }
                  submitsForm={false}
                >
                  <Trans__>{"New User"}</Trans__>
                </Button>
              </Stack__>
            </Stack__>
            <div
              data-plasmic-name={"frame10"}
              data-plasmic-override={overrides.frame10}
              className={classNames(projectcss.all, sty.frame10)}
            />
          </Stack__>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
        <RightBar
          data-plasmic-name={"rightBar"}
          data-plasmic-override={overrides.rightBar}
          className={classNames("__wab_instance", sty.rightBar)}
        />

        <section
          data-plasmic-name={"overlay"}
          data-plasmic-override={overrides.overlay}
          className={classNames(projectcss.all, sty.overlay)}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  home: [
    "home",
    "sidebar",
    "body",
    "header",
    "rightBarToggle",
    "sidebarToggleButton",
    "content",
    "frame7",
    "frame8",
    "hiKatiePena",
    "welcomeBackToRhom",
    "frame1",
    "button",
    "svg",
    "frame10",
    "footer",
    "rightBar",
    "overlay"
  ],
  sidebar: ["sidebar"],
  body: [
    "body",
    "header",
    "rightBarToggle",
    "sidebarToggleButton",
    "content",
    "frame7",
    "frame8",
    "hiKatiePena",
    "welcomeBackToRhom",
    "frame1",
    "button",
    "svg",
    "frame10",
    "footer"
  ],
  header: ["header", "rightBarToggle", "sidebarToggleButton"],
  rightBarToggle: ["rightBarToggle"],
  sidebarToggleButton: ["sidebarToggleButton"],
  content: [
    "content",
    "frame7",
    "frame8",
    "hiKatiePena",
    "welcomeBackToRhom",
    "frame1",
    "button",
    "svg",
    "frame10"
  ],
  frame7: [
    "frame7",
    "frame8",
    "hiKatiePena",
    "welcomeBackToRhom",
    "frame1",
    "button",
    "svg"
  ],
  frame8: ["frame8", "hiKatiePena", "welcomeBackToRhom"],
  hiKatiePena: ["hiKatiePena"],
  welcomeBackToRhom: ["welcomeBackToRhom"],
  frame1: ["frame1", "button", "svg"],
  button: ["button", "svg"],
  svg: ["svg"],
  frame10: ["frame10"],
  footer: ["footer"],
  rightBar: ["rightBar"],
  overlay: ["overlay"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  home: "div";
  sidebar: typeof Sidebar;
  body: "div";
  header: typeof Header;
  rightBarToggle: typeof RightBarToggle;
  sidebarToggleButton: typeof SidebarToggleButton;
  content: "div";
  frame7: "div";
  frame8: "div";
  hiKatiePena: "div";
  welcomeBackToRhom: "div";
  frame1: "div";
  button: typeof Button;
  svg: "svg";
  frame10: "div";
  footer: typeof Footer;
  rightBar: typeof RightBar;
  overlay: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMessages__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMessages__VariantsArgs;
    args?: PlasmicMessages__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMessages__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMessages__ArgsType,
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
          internalArgPropNames: PlasmicMessages__ArgProps,
          internalVariantPropNames: PlasmicMessages__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMessages__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "home") {
    func.displayName = "PlasmicMessages";
  } else {
    func.displayName = `PlasmicMessages.${nodeName}`;
  }
  return func;
}

export const PlasmicMessages = Object.assign(
  // Top-level PlasmicMessages renders the root element
  makeNodeComponent("home"),
  {
    // Helper components rendering sub-elements
    sidebar: makeNodeComponent("sidebar"),
    body: makeNodeComponent("body"),
    header: makeNodeComponent("header"),
    rightBarToggle: makeNodeComponent("rightBarToggle"),
    sidebarToggleButton: makeNodeComponent("sidebarToggleButton"),
    content: makeNodeComponent("content"),
    frame7: makeNodeComponent("frame7"),
    frame8: makeNodeComponent("frame8"),
    hiKatiePena: makeNodeComponent("hiKatiePena"),
    welcomeBackToRhom: makeNodeComponent("welcomeBackToRhom"),
    frame1: makeNodeComponent("frame1"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    frame10: makeNodeComponent("frame10"),
    footer: makeNodeComponent("footer"),
    rightBar: makeNodeComponent("rightBar"),
    overlay: makeNodeComponent("overlay"),

    // Metadata about props expected for PlasmicMessages
    internalVariantProps: PlasmicMessages__VariantProps,
    internalArgProps: PlasmicMessages__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Messages",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMessages;
/* prettier-ignore-end */
