'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Error as boolean \u2013 red border color */}
      <Autocomplete error data={['React', 'Angular', 'Svelte', 'Vue']} />

      {/* Error as React node \u2013 red border color and message below input */}
      <Autocomplete error="Field is required" data={['React', 'Angular', 'Svelte', 'Vue']} />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick one that you like",
    error: true
  }), /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    mt: "md",
    data: ["React", "Angular", "Svelte", "Vue"],
    label: "Your favorite frameworks/libraries",
    placeholder: "Pick one that you like",
    error: "Field is required"
  }));
}
const validation = {
  type: "demo",
  code,
  component: Demo
};

exports.validation = validation;
//# sourceMappingURL=Autocomplete.demo.validation.js.map
