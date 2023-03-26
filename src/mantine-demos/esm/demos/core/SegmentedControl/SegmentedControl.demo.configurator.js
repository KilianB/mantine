import { SegmentedControlWrapper } from './Wrapper.js';

const codeTemplate = (props) => `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl${props} />;
}
`;
const configurator = {
  type: "configurator",
  component: SegmentedControlWrapper,
  codeTemplate,
  configurator: [{ name: "color", type: "color", initialValue: "blue", defaultValue: null }]
};

export { configurator };
//# sourceMappingURL=SegmentedControl.demo.configurator.js.map
