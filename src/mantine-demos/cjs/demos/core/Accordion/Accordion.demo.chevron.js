'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

function Demo() {
  return (
    <Accordion
      chevron={<IconPlus size="1rem" />}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
      }}
    >
      {/* ... content */}
    </Accordion>
  );
}
`;
function IconReplaceDemo() {
  return /* @__PURE__ */ React__default.createElement(_base.BaseDemo, {
    chevron: /* @__PURE__ */ React__default.createElement(iconsReact.IconPlus, {
      size: "1rem"
    }),
    styles: {
      chevron: {
        "&[data-rotate]": {
          transform: "rotate(45deg)"
        }
      }
    }
  });
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 380,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(IconReplaceDemo, null));
}
const chevron = {
  type: "demo",
  component: Demo,
  code
};

exports.IconReplaceDemo = IconReplaceDemo;
exports.chevron = chevron;
//# sourceMappingURL=Accordion.demo.chevron.js.map
