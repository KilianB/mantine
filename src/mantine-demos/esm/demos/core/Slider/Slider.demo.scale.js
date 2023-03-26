import React from 'react';
import { Stack, Slider, RangeSlider } from '@mantine/core';

const code = `
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  function valueLabelFormat(value: number) {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }

    return \`\${scaledValue} \${units[unitIndex]}\`;
  }

  return (
    <Stack spacing="xl" p="xl">
      <Slider
        py="xl"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        py="xl"
        scale={(v) => 2 ** v}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </Stack>
  );
}
`;
function Demo() {
  function valueLabelFormat(value) {
    const units = ["KB", "MB", "GB", "TB"];
    let unitIndex = 0;
    let scaledValue = value;
    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1024;
    }
    return `${scaledValue} ${units[unitIndex]}`;
  }
  return /* @__PURE__ */ React.createElement(Stack, {
    spacing: "xl",
    p: "xl"
  }, /* @__PURE__ */ React.createElement(Slider, {
    py: "xl",
    scale: (v) => 2 ** v,
    step: 1,
    min: 2,
    max: 30,
    labelAlwaysOn: true,
    defaultValue: 10,
    label: valueLabelFormat
  }), /* @__PURE__ */ React.createElement(RangeSlider, {
    py: "xl",
    scale: (v) => 2 ** v,
    step: 1,
    min: 2,
    max: 30,
    labelAlwaysOn: true,
    defaultValue: [10, 20],
    label: valueLabelFormat
  }));
}
const scale = {
  type: "demo",
  component: Demo,
  code
};

export { scale };
//# sourceMappingURL=Slider.demo.scale.js.map
