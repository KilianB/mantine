'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Indicator } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.DatePicker, {
    renderDay: (date) => {
      const day = date.getDate();
      return /* @__PURE__ */ React__default.createElement(core.Indicator, {
        size: 6,
        color: "red",
        offset: -5,
        disabled: day !== 16
      }, /* @__PURE__ */ React__default.createElement("div", null, day));
    }
  }));
}
const renderDay = {
  type: "demo",
  component: Demo,
  code
};

exports.renderDay = renderDay;
//# sourceMappingURL=DatePicker.demo.renderDay.js.map
