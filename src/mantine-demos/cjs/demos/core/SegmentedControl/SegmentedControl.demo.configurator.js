'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Wrapper = require('./Wrapper.js');

const codeTemplate = (props) => `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl${props} />;
}
`;
const configurator = {
  type: "configurator",
  component: Wrapper.SegmentedControlWrapper,
  codeTemplate,
  configurator: [{ name: "color", type: "color", initialValue: "blue", defaultValue: null }]
};

exports.configurator = configurator;
//# sourceMappingURL=SegmentedControl.demo.configurator.js.map
