import React, { forwardRef } from 'react';
import { Flex, Box, MultiSelect, rem, CloseButton } from '@mantine/core';
import { countriesData, flags } from './_countries-data.js';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const code = `
import { forwardRef } from 'react';
import {
  MultiSelect,
  Box,
  CloseButton,
  SelectItemProps,
  MultiSelectValueProps,
  rem,
  Flex,
} from '@mantine/core';

const countriesData = [
  { label: 'United States', value: 'US' },
  { label: 'Great Britain', value: 'GB' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'Russia', value: 'RU' },
];

const flags = { /* Record with flag icon components */ };

function Value({
  value,
  label,
  onRemove,
  classNames,
  ...others
}: MultiSelectValueProps & { value: string }) {
  const Flag = flags[value];
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          cursor: 'default',
          alignItems: 'center',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          border: \`\${rem(1)} solid \${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
          }\`,
          paddingLeft: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        })}
      >
        <Box mr={10}>
          <Flag />
        </Box>
        <Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{label}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

const Item = forwardRef<HTMLDivElement, SelectItemProps>(({ label, value, ...others }, ref) => {
  const Flag = flags[value];
  return (
    <div ref={ref} {...others}>
      <Flex align="center">
        <Box mr={10}>
          <Flag />
        </Box>
        <div>{label}</div>
      </Flex>
    </div>
  );
});

function Demo() {
  return (
    <MultiSelect
      data={countriesData}
      limit={20}
      valueComponent={Value}
      itemComponent={Item}
      searchable
      defaultValue={['US', 'FI']}
      placeholder="Pick countries"
      label="Which countries did you visit last year?"
    />
  );
}
`;
function Value(_a) {
  var _b = _a, {
    value,
    label,
    onRemove,
    classNames
  } = _b, others = __objRest(_b, [
    "value",
    "label",
    "onRemove",
    "classNames"
  ]);
  const Flag = flags[value];
  return /* @__PURE__ */ React.createElement("div", __spreadValues({}, others), /* @__PURE__ */ React.createElement(Box, {
    sx: (theme) => ({
      display: "flex",
      cursor: "default",
      alignItems: "center",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[4]}`,
      paddingLeft: theme.spacing.xs,
      borderRadius: theme.radius.sm
    })
  }, /* @__PURE__ */ React.createElement(Box, {
    mr: 10
  }, /* @__PURE__ */ React.createElement(Flag, null)), /* @__PURE__ */ React.createElement(Box, {
    sx: { lineHeight: 1, fontSize: rem(12) }
  }, label), /* @__PURE__ */ React.createElement(CloseButton, {
    onMouseDown: onRemove,
    variant: "transparent",
    size: 22,
    iconSize: 14,
    tabIndex: -1
  })));
}
const Item = forwardRef((_c, ref) => {
  var _d = _c, { label, value } = _d, others = __objRest(_d, ["label", "value"]);
  const Flag = flags[value];
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    ref
  }, others), /* @__PURE__ */ React.createElement(Flex, {
    align: "center"
  }, /* @__PURE__ */ React.createElement(Box, {
    mr: 10
  }, /* @__PURE__ */ React.createElement(Flag, null)), /* @__PURE__ */ React.createElement("div", null, label)));
});
function CountriesSelect(props) {
  return /* @__PURE__ */ React.createElement(MultiSelect, __spreadValues({
    data: countriesData,
    limit: 20,
    valueComponent: Value,
    itemComponent: Item,
    searchable: true,
    defaultValue: ["US", "FI"],
    placeholder: "Pick countries",
    label: "Which countries did you visit last year?"
  }, props));
}
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(CountriesSelect, null));
}
const countries = {
  type: "demo",
  code,
  component: Demo
};

export { CountriesSelect, countries };
//# sourceMappingURL=MultiSelect.demo.countries.js.map
