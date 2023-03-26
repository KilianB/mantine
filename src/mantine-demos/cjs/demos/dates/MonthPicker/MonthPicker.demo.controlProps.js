'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { MonthPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <MonthPicker
        value={value}
        onChange={setValue}
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
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.MonthPicker, {
    value,
    onChange: setValue,
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

exports.controlProps = controlProps;
//# sourceMappingURL=MonthPicker.demo.controlProps.js.map
