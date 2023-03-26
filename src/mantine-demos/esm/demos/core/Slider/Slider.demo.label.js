import React from 'react';
import { Box, Text, Slider } from '@mantine/core';

const code = `
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disable label */}
      <Slider label={null} />

      {/* Format label with function */}
      <Slider label={(value) => \`\${value} \xB0C\`} />

      {/* Always display label */}
      <Slider labelAlwaysOn />

      {/* Change label transition */}
      <Slider
        labelTransition="skew-down"
        labelTransitionDuration={150}
        labelTransitionTimingFunction="ease"
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 400,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Text, null, "No label"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    label: null
  }), /* @__PURE__ */ React.createElement(Text, {
    mt: "xl"
  }, "Formatted label"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    label: (value) => `${value} \xB0C`
  }), /* @__PURE__ */ React.createElement(Text, {
    mt: "xl"
  }, "Label always visible"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    labelAlwaysOn: true
  }), /* @__PURE__ */ React.createElement(Text, {
    mt: "xl"
  }, "Custom label transition"), /* @__PURE__ */ React.createElement(Slider, {
    defaultValue: 40,
    labelTransition: "skew-down",
    labelTransitionDuration: 150,
    labelTransitionTimingFunction: "ease"
  }));
}
const label = {
  type: "demo",
  component: Demo,
  code
};

export { label };
//# sourceMappingURL=Slider.demo.label.js.map
