import React from 'react';
import { Box, Slider, RangeSlider } from '@mantine/core';

const code = `
import { Slider, RangeSlider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
`;
function Demo() {
  const marks2 = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" }
  ];
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    marks: [{ value: 10 }, { value: 40 }, { value: 95 }],
    pb: 50
  }), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    marks: marks2,
    pb: 50
  }), /* @__PURE__ */ React.createElement(RangeSlider, {
    defaultValue: [20, 80],
    marks: marks2,
    pb: 50
  }));
}
const marks = {
  type: "demo",
  component: Demo,
  code
};

export { marks };
//# sourceMappingURL=Slider.demo.marks.js.map
