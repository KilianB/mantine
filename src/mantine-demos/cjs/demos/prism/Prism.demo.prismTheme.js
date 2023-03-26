'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var prism = require('@mantine/prism');
var duotoneDark = require('prism-react-renderer/themes/duotoneDark');
var duotoneLight = require('prism-react-renderer/themes/duotoneLight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var duotoneDark__default = /*#__PURE__*/_interopDefaultLegacy(duotoneDark);
var duotoneLight__default = /*#__PURE__*/_interopDefaultLegacy(duotoneLight);

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;
const code = `
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';
import { Prism } from '@mantine/prism';

const demoCode = \`import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return (
    <Prism
      language="tsx"
      getPrismTheme={(_theme, colorScheme) =>
        colorScheme === 'light' ? duotoneLight : duotoneDark
      }
    >
      {demoCode}
    </Prism>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(prism.Prism, {
    language: "tsx",
    getPrismTheme: (_theme, colorScheme) => colorScheme === "light" ? duotoneLight__default : duotoneDark__default
  }, demoCode);
}
const prismTheme = {
  type: "demo",
  component: Demo,
  code
};

exports.demoCode = demoCode;
exports.prismTheme = prismTheme;
//# sourceMappingURL=Prism.demo.prismTheme.js.map
