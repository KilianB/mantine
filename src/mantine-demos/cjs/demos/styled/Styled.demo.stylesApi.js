'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var styled = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const code = `
import { Slider } from '@mantine/core';
import styled from '@emotion/styled';

const StyledSlider = styled(Slider)\`
  & .mantine-Slider-bar {
    background-color: pink;
  }

  & .mantine-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: ${core.rem(24)};
    height: ${core.rem(24)};
  }
\`;

function Demo() {
  return <StyledSlider defaultValue={40} />;
}
`;
const StyledSlider = styled__default(core.Slider)`
  & .mantine-Slider-bar {
    background-color: pink;
  }

  & .mantine-Slider-thumb {
    border-color: pink;
    background-color: white;
    width: ${core.rem(24)};
    height: ${core.rem(24)};
  }
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(StyledSlider, {
    defaultValue: 40
  });
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Styled.demo.stylesApi.js.map
