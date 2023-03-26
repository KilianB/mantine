'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var reactImask = require('react-imask');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper id={id} label="Your phone" required maw={320} mx="auto">
      <Input<any>
        component={IMaskInput}
        mask="+7 (000) 000-00-00"
        id={id}
        placeholder="Your phone"
      />
    </Input.Wrapper>
  );
}
`;
function Demo() {
  const id = hooks.useId();
  return /* @__PURE__ */ React__default.createElement(core.Input.Wrapper, {
    id,
    label: "Your phone",
    required: true,
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Input, {
    component: reactImask.IMaskInput,
    mask: "+7 (000) 000-00-00",
    id,
    placeholder: "Your phone"
  }));
}
const mask = {
  type: "demo",
  component: Demo,
  code
};

exports.mask = mask;
//# sourceMappingURL=Input.demo.mask.js.map
