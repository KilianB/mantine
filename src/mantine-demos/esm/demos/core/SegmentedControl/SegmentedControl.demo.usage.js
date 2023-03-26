import React from 'react';
import { Group } from '@mantine/core';
import { SegmentedControlWrapper } from './Wrapper.js';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <SegmentedControl
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(SegmentedControlWrapper, null));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=SegmentedControl.demo.usage.js.map
