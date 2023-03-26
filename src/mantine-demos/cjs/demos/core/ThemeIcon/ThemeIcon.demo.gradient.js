'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { IconPhoto } from '@tabler/icons-react';
import { ThemeIcon } from '@mantine/core';

function Demo() {
  return (
    <>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
        <IconPhoto size="1.2rem" />
      </ThemeIcon>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan" }
  }, /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, {
    size: "1.2rem"
  })), /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "teal", to: "lime", deg: 105 }
  }, /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, {
    size: "1.2rem"
  })), /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "teal", to: "blue", deg: 60 }
  }, /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, {
    size: "1.2rem"
  })), /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "orange", to: "red" }
  }, /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, {
    size: "1.2rem"
  })), /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "#ed6ea0", to: "#ec8c69", deg: 35 }
  }, /* @__PURE__ */ React__default.createElement(iconsReact.IconPhoto, {
    size: "1.2rem"
  })));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

exports.gradient = gradient;
//# sourceMappingURL=ThemeIcon.demo.gradient.js.map
