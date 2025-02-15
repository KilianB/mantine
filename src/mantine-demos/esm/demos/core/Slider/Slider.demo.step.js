import React from 'react';
import { Box, Text, Slider } from '@mantine/core';

const code = `
import { Slider } from '@mantine/core';

// Configure marks to match step
const MARKS = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      {/* Set min, max and step props to replace default values */}
      <Slider
        defaultValue={5}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Slider
        label={(val) => MARKS.find((mark) => mark.value === val).label}
        defaultValue={50}
        step={25}
        marks={MARKS}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`;
function Demo() {
  const MARKS = [
    { value: 0, label: "xs" },
    { value: 25, label: "sm" },
    { value: 50, label: "md" },
    { value: 75, label: "lg" },
    { value: 100, label: "xl" }
  ];
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Text, null, "Decimal step"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 0,
    min: -10,
    max: 10,
    label: (value) => value.toFixed(1),
    step: 0.1,
    styles: { markLabel: { display: "none" } }
  }), /* @__PURE__ */ React.createElement(Text, {
    mt: "md"
  }, "Step matched with marks"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 50,
    label: (val) => MARKS.find((mark) => mark.value === val).label,
    step: 25,
    marks: MARKS,
    styles: { markLabel: { display: "none" } }
  }));
}
const step = {
  type: "demo",
  component: Demo,
  code
};

export { step };
//# sourceMappingURL=Slider.demo.step.js.map
