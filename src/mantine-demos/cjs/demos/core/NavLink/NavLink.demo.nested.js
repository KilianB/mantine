'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Box, NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <Box w={240}>
      <NavLink
        label="First parent link"
        icon={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Nested parent link" childrenOffset={28}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Second parent link"
        icon={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
    </Box>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    w: 240
  }, /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "First parent link",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconGauge, {
      size: "1rem",
      stroke: 1.5
    }),
    childrenOffset: 28
  }, /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "First child link"
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Second child link"
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Nested parent link",
    childrenOffset: 28
  }, /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "First child link"
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Second child link"
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Third child link"
  }))), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Second parent link",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconFingerprint, {
      size: "1rem",
      stroke: 1.5
    }),
    childrenOffset: 28,
    defaultOpened: true
  }, /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "First child link"
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Second child link"
  }), /* @__PURE__ */ React__default.createElement(core.NavLink, {
    label: "Third child link"
  }))));
}
const nested = {
  type: "demo",
  component: Demo,
  code
};

exports.nested = nested;
//# sourceMappingURL=NavLink.demo.nested.js.map
