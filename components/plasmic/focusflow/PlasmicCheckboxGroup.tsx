// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wj2qAuEBWxMEsUxpANdi1b
// Component: 74X7Xnsr0LfR

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

import { BaseCheckboxGroup } from "@plasmicpkgs/react-aria/skinny/registerCheckboxGroup";
import Label from "../../Label"; // plasmic-import: rPd1hJ4d5NLY/component
import Checkbox from "../../Checkbox"; // plasmic-import: Fiwni9fctKpg/component
import Description from "../../Description"; // plasmic-import: WIgwPD04N7jm/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wj2qAuEBWxMEsUxpANdi1b/projectcss
import sty from "./PlasmicCheckboxGroup.module.css"; // plasmic-import: 74X7Xnsr0LfR/css

createPlasmicElementProxy;

export type PlasmicCheckboxGroup__VariantMembers = {};
export type PlasmicCheckboxGroup__VariantsArgs = {};
type VariantPropType = keyof PlasmicCheckboxGroup__VariantsArgs;
export const PlasmicCheckboxGroup__VariantProps = new Array<VariantPropType>();

export type PlasmicCheckboxGroup__ArgsType = {
  defaultValues?: any;
  showLabel?: boolean;
  showDescription?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onChange?: (val: any) => void;
  label?: React.ReactNode;
  options?: React.ReactNode;
  description?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCheckboxGroup__ArgsType;
export const PlasmicCheckboxGroup__ArgProps = new Array<ArgPropType>(
  "defaultValues",
  "showLabel",
  "showDescription",
  "disabled",
  "ariaLabel",
  "onChange",
  "label",
  "options",
  "description"
);

export type PlasmicCheckboxGroup__OverridesType = {
  ariaCheckboxGroup?: Flex__<typeof BaseCheckboxGroup>;
  label?: Flex__<typeof Label>;
  description?: Flex__<typeof Description>;
};

export interface DefaultCheckboxGroupProps {
  defaultValues?: any;
  showLabel?: boolean;
  showDescription?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onChange?: (val: any) => void;
  label?: React.ReactNode;
  options?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCheckboxGroup__RenderFunc(props: {
  variants: PlasmicCheckboxGroup__VariantsArgs;
  args: PlasmicCheckboxGroup__ArgsType;
  overrides: PlasmicCheckboxGroup__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showDescription: false
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaCheckboxGroup.value",
        type: "readonly",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultValues"],

        onChangeProp: "onChange"
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

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    disabled: false,
    readonly: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseCheckboxGroup
      data-plasmic-name={"ariaCheckboxGroup"}
      data-plasmic-override={overrides.ariaCheckboxGroup}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.ariaCheckboxGroup
      )}
      defaultValue={args.defaultValues}
      isDisabled={args.disabled}
      isReadOnly={$ccVariants["readonly"] ? true : undefined}
      onChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["ariaCheckboxGroup", "value"]).apply(
          null,
          eventArgs
        );
      }}
      plasmicUpdateVariant={updateVariant}
      value={generateStateValueProp($state, ["ariaCheckboxGroup", "value"])}
    >
      {$props.showLabel ? (
        <Label
          data-plasmic-name={"label"}
          data-plasmic-override={overrides.label}
          className={classNames("__wab_instance", sty.label)}
        >
          {renderPlasmicSlot({
            defaultContents: "Label",
            value: args.label
          })}
        </Label>
      ) : null}
      {renderPlasmicSlot({
        defaultContents: (
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xwwcy)}
          >
            <Checkbox
              className={classNames("__wab_instance", sty.checkbox__yj9NC)}
              label={"Option 1"}
              value={"option1"}
            />

            <Checkbox
              className={classNames("__wab_instance", sty.checkbox__rJ6Op)}
              label={"Option 2"}
              value={"option2"}
            />

            <Checkbox
              className={classNames("__wab_instance", sty.checkbox__mT6Hc)}
              label={"Option 3"}
              value={"option3"}
            />
          </Stack__>
        ),

        value: args.options
      })}
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        >
          {renderPlasmicSlot({
            defaultContents: "Description...",
            value: args.description
          })}
        </Description>
      ) : null}
    </BaseCheckboxGroup>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaCheckboxGroup: ["ariaCheckboxGroup", "label", "description"],
  label: ["label"],
  description: ["description"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaCheckboxGroup: typeof BaseCheckboxGroup;
  label: typeof Label;
  description: typeof Description;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckboxGroup__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckboxGroup__VariantsArgs;
    args?: PlasmicCheckboxGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCheckboxGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCheckboxGroup__ArgsType,
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
          internalArgPropNames: PlasmicCheckboxGroup__ArgProps,
          internalVariantPropNames: PlasmicCheckboxGroup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCheckboxGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaCheckboxGroup") {
    func.displayName = "PlasmicCheckboxGroup";
  } else {
    func.displayName = `PlasmicCheckboxGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckboxGroup = Object.assign(
  // Top-level PlasmicCheckboxGroup renders the root element
  makeNodeComponent("ariaCheckboxGroup"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    description: makeNodeComponent("description"),

    // Metadata about props expected for PlasmicCheckboxGroup
    internalVariantProps: PlasmicCheckboxGroup__VariantProps,
    internalArgProps: PlasmicCheckboxGroup__ArgProps
  }
);

export default PlasmicCheckboxGroup;
/* prettier-ignore-end */
