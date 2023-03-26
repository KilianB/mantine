'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input, Tooltip } from '@mantine/core';
import { IconBrandTwitter, IconAlertCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <Input
      icon={<IconBrandTwitter size="1rem" />}
      placeholder="Your twitter"
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Input, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconBrandTwitter, {
      size: "1rem",
      stroke: 1.5
    }),
    placeholder: "Your twitter",
    rightSection: /* @__PURE__ */ React__default.createElement(core.Tooltip, {
      label: "This is public",
      position: "top-end",
      withArrow: true
    }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(iconsReact.IconAlertCircle, {
      size: "1rem",
      stroke: 1.5,
      style: { display: "block", opacity: 0.5 }
    })))
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

exports.icon = icon;
//# sourceMappingURL=Input.demo.icon.js.map
