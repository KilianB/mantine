import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

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
const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <DatePicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2021, 7)}
        getDayProps={(date) => {
          if (date.getDay() === 5 && date.getDate() === 13) {
            return {
              sx: (theme) => ({
                backgroundColor: theme.colors.red[theme.fn.primaryShade()],
                color: theme.white,
                ...theme.fn.hover({ backgroundColor: theme.colors.red[7] }),
              }),
            };
          }

          return {};
        }}
        getYearControlProps={(date) => {
          if (date.getFullYear() === new Date().getFullYear()) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getFullYear() === new Date().getFullYear() + 1) {
            return { disabled: true };
          }

          return {};
        }}
        getMonthControlProps={(date) => {
          if (date.getMonth() === 1) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getMonth() === 5) {
            return { disabled: true };
          }

          return {};
        }}
      />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(DatePicker, {
    value,
    onChange: setValue,
    defaultDate: new Date(2021, 7),
    getDayProps: (date) => {
      if (date.getDay() === 5 && date.getDate() === 13) {
        return {
          sx: (theme) => __spreadValues({
            backgroundColor: theme.colors.red[theme.fn.primaryShade()],
            color: theme.white
          }, theme.fn.hover({ backgroundColor: theme.colors.red[7] }))
        };
      }
      return {};
    },
    getYearControlProps: (date) => {
      if (date.getFullYear() === new Date().getFullYear()) {
        return {
          sx: (theme) => ({
            color: theme.fn.primaryColor(),
            fontWeight: 700
          })
        };
      }
      if (date.getFullYear() === new Date().getFullYear() + 1) {
        return { disabled: true };
      }
      return {};
    },
    getMonthControlProps: (date) => {
      if (date.getMonth() === 1) {
        return {
          sx: (theme) => ({
            color: theme.fn.primaryColor(),
            fontWeight: 700
          })
        };
      }
      if (date.getMonth() === 5) {
        return { disabled: true };
      }
      return {};
    }
  }));
}
const controlProps = {
  type: "demo",
  component: Demo,
  code
};

export { controlProps };
//# sourceMappingURL=DatePicker.demo.controlProps.js.map
