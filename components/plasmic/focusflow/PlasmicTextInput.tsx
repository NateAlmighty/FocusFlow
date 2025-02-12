// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wj2qAuEBWxMEsUxpANdi1b
// Component: R0aC9LPHdiOB

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
  wrapWithClassName,
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions,
} from "@plasmicapp/react-web/lib/host";

import { BaseInput } from "@plasmicpkgs/react-aria/skinny/registerInput";
import { inputHelpers as BaseInput_Helpers } from "@plasmicpkgs/react-aria/skinny/registerInput";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wj2qAuEBWxMEsUxpANdi1b/projectcss
import sty from "./PlasmicTextInput.module.css"; // plasmic-import: R0aC9LPHdiOB/css

createPlasmicElementProxy;

export type PlasmicTextInput__VariantMembers = {
  type: "soft" | "plain";
  flat: "top" | "right" | "bottom" | "left";
  padded: "left" | "right";
};
export type PlasmicTextInput__VariantsArgs = {
  type?: SingleChoiceArg<"soft" | "plain">;
  flat?: MultiChoiceArg<"top" | "right" | "bottom" | "left">;
  padded?: MultiChoiceArg<"left" | "right">;
};
type VariantPropType = keyof PlasmicTextInput__VariantsArgs;
export const PlasmicTextInput__VariantProps = new Array<VariantPropType>(
  "type",
  "flat",
  "padded",
);

export type PlasmicTextInput__ArgsType = {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  inputType?: "text" | "search" | "url" | "tel" | "email" | "password";
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  autoComplete?:
    | "on"
    | "off"
    | "name"
    | "honorific-prefix"
    | "given-name"
    | "additional-name"
    | "family-name"
    | "honorific-suffix"
    | "nickname"
    | "email"
    | "username"
    | "new-password"
    | "current-password"
    | "one-time-code"
    | "organization-title"
    | "organization"
    | "street-address"
    | "shipping"
    | "billing"
    | "address-line1"
    | "address-line2"
    | "address-line3"
    | "address-level4"
    | "address-level3"
    | "address-level2"
    | "address-level1"
    | "country"
    | "country-name"
    | "postal-code"
    | "cc-name"
    | "cc-given-name"
    | "cc-additional-name"
    | "cc-family-name"
    | "cc-number"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-csc"
    | "cc-type"
    | "transaction-currency"
    | "transaction-amount"
    | "language"
    | "bday"
    | "bday-day"
    | "bday-month"
    | "bday-year"
    | "sex"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-area-code"
    | "tel-local"
    | "tel-local-suffix"
    | "tel-local-prefix"
    | "tel-extension"
    | "impp"
    | "url"
    | "photo"
    | "webauthn";
  ariaLabel?: string;
  onChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicTextInput__ArgsType;
export const PlasmicTextInput__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "defaultValue",
  "disabled",
  "readOnly",
  "autoFocus",
  "inputType",
  "inputMode",
  "autoComplete",
  "ariaLabel",
  "onChange",
);

export type PlasmicTextInput__OverridesType = {
  ariaInput?: Flex__<typeof BaseInput>;
};

export interface DefaultTextInputProps {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  inputType?: "text" | "search" | "url" | "tel" | "email" | "password";
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  autoComplete?:
    | "on"
    | "off"
    | "name"
    | "honorific-prefix"
    | "given-name"
    | "additional-name"
    | "family-name"
    | "honorific-suffix"
    | "nickname"
    | "email"
    | "username"
    | "new-password"
    | "current-password"
    | "one-time-code"
    | "organization-title"
    | "organization"
    | "street-address"
    | "shipping"
    | "billing"
    | "address-line1"
    | "address-line2"
    | "address-line3"
    | "address-level4"
    | "address-level3"
    | "address-level2"
    | "address-level1"
    | "country"
    | "country-name"
    | "postal-code"
    | "cc-name"
    | "cc-given-name"
    | "cc-additional-name"
    | "cc-family-name"
    | "cc-number"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-csc"
    | "cc-type"
    | "transaction-currency"
    | "transaction-amount"
    | "language"
    | "bday"
    | "bday-day"
    | "bday-month"
    | "bday-year"
    | "sex"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-area-code"
    | "tel-local"
    | "tel-local-suffix"
    | "tel-local-prefix"
    | "tel-extension"
    | "impp"
    | "url"
    | "photo"
    | "webauthn";
  ariaLabel?: string;
  onChange?: (val: string) => void;
  type?: SingleChoiceArg<"soft" | "plain">;
  flat?: MultiChoiceArg<"top" | "right" | "bottom" | "left">;
  padded?: MultiChoiceArg<"left" | "right">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTextInput__RenderFunc(props: {
  variants: PlasmicTextInput__VariantsArgs;
  args: PlasmicTextInput__ArgsType;
  overrides: PlasmicTextInput__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined),
        ),
      ),
    [props.args],
  );

  const $props = {
    ...args,
    ...variants,
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaInput.value",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultValue"],

        onChangeProp: "onChange",

        onMutate: generateOnMutateForSpec("value", BaseInput_Helpers),
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type,
      },
      {
        path: "flat",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flat,
      },
      {
        path: "padded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.padded,
      },
    ],

    [$props, $ctx, $refs],
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    focused: false,
    focusVisible: false,
    hovered: false,
    disabled: false,
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants((prev) => {
        if (!Object.keys(changes).some((k) => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    [],
  );

  return (() => {
    const child$Props = {
      "aria-label": args.ariaLabel,
      autoComplete: args.autoComplete,
      autoFocus: args.autoFocus,
      className: classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.ariaInput,
        {
          [sty.ariaInputflat_bottom]: hasVariant($state, "flat", "bottom"),
          [sty.ariaInputflat_left]: hasVariant($state, "flat", "left"),
          [sty.ariaInputflat_right]: hasVariant($state, "flat", "right"),
          [sty.ariaInputflat_top]: hasVariant($state, "flat", "top"),
          [sty.ariaInputpadded_left]: hasVariant($state, "padded", "left"),
          [sty.ariaInputpadded_right]: hasVariant($state, "padded", "right"),
          [sty.ariaInputtype_plain]: hasVariant($state, "type", "plain"),
          [sty.ariaInputtype_soft]: hasVariant($state, "type", "soft"),
        },
      ),
      defaultValue: args.defaultValue,
      disabled: args.disabled,
      inputMode: args.inputMode,
      onChange: async (...eventArgs: any) => {
        generateStateOnChangePropForCodeComponents(
          $state,
          "value",
          ["ariaInput", "value"],
          BaseInput_Helpers,
        ).apply(null, eventArgs);
      },
      placeholder: args.placeholder,
      plasmicUpdateVariant: updateVariant,
      readOnly: args.readOnly,
      type: args.inputType,
      value: generateStateValueProp($state, ["ariaInput", "value"]),
    };
    initializeCodeComponentStates(
      $state,
      [
        {
          name: "value",
          plasmicStateName: "ariaInput.value",
        },
      ],

      [],
      BaseInput_Helpers ?? {},
      child$Props,
    );

    return (
      <BaseInput
        data-plasmic-name={"ariaInput"}
        data-plasmic-override={overrides.ariaInput}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        {...child$Props}
      />
    );
  })() as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaInput: ["ariaInput"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaInput: typeof BaseInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextInput__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextInput__VariantsArgs;
    args?: PlasmicTextInput__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTextInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTextInput__ArgsType,
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
    props: T & StrictProps<T, PropsType>,
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTextInput__ArgProps,
          internalVariantPropNames: PlasmicTextInput__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicTextInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "ariaInput") {
    func.displayName = "PlasmicTextInput";
  } else {
    func.displayName = `PlasmicTextInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput = Object.assign(
  // Top-level PlasmicTextInput renders the root element
  makeNodeComponent("ariaInput"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTextInput
    internalVariantProps: PlasmicTextInput__VariantProps,
    internalArgProps: PlasmicTextInput__ArgProps,
  },
);

export default PlasmicTextInput;
/* prettier-ignore-end */
